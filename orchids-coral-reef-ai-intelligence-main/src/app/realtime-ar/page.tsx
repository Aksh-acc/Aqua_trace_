"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  X,
  Upload,
  Activity,
  Heart,
  AlertTriangle,
  Skull,
  Fish,
  Loader2,
  ArrowLeft,
  Settings,
  Zap,
  Pause,
  Play,
  Gauge,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Backend URLs
const WS_URL = process.env.NEXT_PUBLIC_REALTIME_WS_URL || "ws://localhost:8000/ws/stream";
const API_URL = process.env.NEXT_PUBLIC_CORAL_API_URL || "http://localhost:8000";

interface Detection {
  class: string;
  confidence: number;
}

interface HealthAnalysis {
  total_corals: number;
  healthy_count: number;
  bleached_count: number;
  dead_count: number;
  health_score: number;
  status: string;
  detections: Detection[];
}

interface StreamStats {
  fps: number;
  frameCount: number;
  latency: number;
}

export default function RealtimeARPage() {
  // State
  const [isActive, setIsActive] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [wsConnected, setWsConnected] = useState(false);
  
  // Health analysis state
  const [healthAnalysis, setHealthAnalysis] = useState<HealthAnalysis | null>(null);
  const [processedFrame, setProcessedFrame] = useState<string | null>(null);
  
  // Stats
  const [stats, setStats] = useState<StreamStats>({ fps: 0, frameCount: 0, latency: 0 });
  
  // Settings
  const [showSettings, setShowSettings] = useState(false);
  const [frameRate, setFrameRate] = useState(5); // Frames per second to send
  const [quality, setQuality] = useState(70);
  const [confidence, setConfidence] = useState(0.25);
  
  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const frameIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const lastFrameTimeRef = useRef<number>(0);

  // Start camera
  const startCamera = async () => {
    setError(null);
    setCameraError(null);
    setIsVideoReady(false);
    setProcessedFrame(null);

    try {
      let stream: MediaStream;
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment",
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
        });
      } catch (envErr) {
        console.log("Environment camera failed, trying any camera...");
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
      }

      console.log("Got camera stream:", stream.getVideoTracks()[0]?.label);
      streamRef.current = stream;
      setIsActive(true);
      
    } catch (err: any) {
      console.error("Camera error:", err);
      if (err.name === "NotAllowedError") {
        setCameraError("Camera access denied. Please enable camera permissions.");
      } else if (err.name === "NotFoundError") {
        setCameraError("No camera found. Please connect a camera.");
      } else if (err.name === "NotReadableError") {
        setCameraError("Camera is in use by another application.");
      } else {
        setCameraError(`Failed to access camera: ${err.message || err.name}`);
      }
    }
  };

  // Effect to attach stream to video element after it mounts
  useEffect(() => {
    if (isActive && streamRef.current && videoRef.current) {
      const video = videoRef.current;
      video.srcObject = streamRef.current;
      
      video.onloadedmetadata = () => {
        video.play().then(() => {
          setIsVideoReady(true);
          console.log("Video ready:", video.videoWidth, "x", video.videoHeight);
        }).catch(err => {
          console.error("Play error:", err);
          video.muted = true;
          video.play().then(() => setIsVideoReady(true));
        });
      };
    }
  }, [isActive]);

  // Stop camera
  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsActive(false);
    setIsVideoReady(false);
  }, []);

  // Connect to WebSocket
  const connectWebSocket = useCallback(() => {
    if (wsRef.current?.readyState === WebSocket.OPEN) return;

    console.log("Connecting to WebSocket:", WS_URL);
    const ws = new WebSocket(WS_URL);

    ws.onopen = () => {
      console.log("WebSocket connected!");
      setWsConnected(true);
      setError(null);
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        
        if (data.type === "processed_frame") {
          setProcessedFrame(data.frame);
          setHealthAnalysis(data.health);
          setStats({
            fps: data.fps || 0,
            frameCount: data.frame_count || 0,
            latency: Date.now() - lastFrameTimeRef.current,
          });
        } else if (data.type === "error") {
          console.error("Server error:", data.message);
        }
      } catch (e) {
        console.error("Failed to parse WebSocket message:", e);
      }
    };

    ws.onerror = (event) => {
      console.error("WebSocket error:", event);
      setError("WebSocket connection error. Make sure the backend is running.");
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
      setWsConnected(false);
      setIsStreaming(false);
    };

    wsRef.current = ws;
  }, []);

  // Disconnect WebSocket
  const disconnectWebSocket = useCallback(() => {
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
    setWsConnected(false);
  }, []);

  // Send frame to server
  const sendFrame = useCallback(() => {
    if (!videoRef.current || !canvasRef.current || !wsRef.current) return;
    if (wsRef.current.readyState !== WebSocket.OPEN) return;
    if (isPaused) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video.videoWidth === 0 || video.videoHeight === 0) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    ctx.drawImage(video, 0, 0);
    
    const imageData = canvas.toDataURL("image/jpeg", quality / 100);
    lastFrameTimeRef.current = Date.now();
    
    wsRef.current.send(JSON.stringify({
      type: "frame",
      data: imageData,
      conf: confidence,
      quality: quality,
    }));
  }, [isPaused, quality, confidence]);

  // Start streaming
  const startStreaming = useCallback(() => {
    if (!isVideoReady || !wsConnected) {
      setError("Camera or WebSocket not ready");
      return;
    }

    // Clear any existing interval
    if (frameIntervalRef.current) {
      clearInterval(frameIntervalRef.current);
    }

    // Start sending frames at specified rate
    const intervalMs = 1000 / frameRate;
    frameIntervalRef.current = setInterval(sendFrame, intervalMs);
    setIsStreaming(true);
    setIsPaused(false);
    
    console.log(`Started streaming at ${frameRate} FPS (${intervalMs}ms interval)`);
  }, [isVideoReady, wsConnected, frameRate, sendFrame]);

  // Stop streaming
  const stopStreaming = useCallback(() => {
    if (frameIntervalRef.current) {
      clearInterval(frameIntervalRef.current);
      frameIntervalRef.current = null;
    }
    setIsStreaming(false);
    setIsPaused(false);
  }, []);

  // Toggle pause
  const togglePause = useCallback(() => {
    setIsPaused((prev) => !prev);
  }, []);

  // Full start (camera + websocket + streaming)
  const startAll = async () => {
    await startCamera();
  };

  // Effect to connect WebSocket when camera is ready
  useEffect(() => {
    if (isVideoReady && !wsConnected) {
      connectWebSocket();
    }
  }, [isVideoReady, wsConnected, connectWebSocket]);

  // Effect to start streaming when WebSocket connects
  useEffect(() => {
    if (wsConnected && isVideoReady && !isStreaming) {
      startStreaming();
    }
  }, [wsConnected, isVideoReady, isStreaming, startStreaming]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopStreaming();
      disconnectWebSocket();
      stopCamera();
    };
  }, [stopStreaming, disconnectWebSocket, stopCamera]);

  // Update frame rate while streaming
  useEffect(() => {
    if (isStreaming && !isPaused) {
      if (frameIntervalRef.current) {
        clearInterval(frameIntervalRef.current);
      }
      const intervalMs = 1000 / frameRate;
      frameIntervalRef.current = setInterval(sendFrame, intervalMs);
    }
  }, [frameRate, isStreaming, isPaused, sendFrame]);

  // Get status color
  const getStatusColor = (status: string) => {
    if (status.includes("Healthy")) return "text-green-400";
    if (status.includes("Moderate")) return "text-yellow-400";
    if (status.includes("Bleaching")) return "text-orange-400";
    return "text-red-400";
  };

  // Get health score color
  const getScoreColor = (score: number) => {
    if (score >= 70) return "from-green-500 to-emerald-400";
    if (score >= 40) return "from-yellow-500 to-amber-400";
    if (score >= 20) return "from-orange-500 to-amber-500";
    return "from-red-500 to-rose-400";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="container mx-auto">
          <div className="glass rounded-2xl px-4 py-3 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="hidden sm:inline">Back</span>
            </Link>
            <h1 className="text-lg font-bold text-primary flex items-center gap-2">
              <Zap size={20} className="text-yellow-400" />
              Real-time Coral Detection
            </h1>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-4 z-50 w-72 glass rounded-2xl p-4 space-y-4"
          >
            <h3 className="font-bold text-sm">Streaming Settings</h3>
            
            <div className="space-y-2">
              <label className="text-xs text-muted-foreground">
                Frame Rate: {frameRate} FPS
              </label>
              <input
                type="range"
                min="1"
                max="15"
                value={frameRate}
                onChange={(e) => setFrameRate(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs text-muted-foreground">
                Quality: {quality}%
              </label>
              <input
                type="range"
                min="30"
                max="100"
                value={quality}
                onChange={(e) => setQuality(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-xs text-muted-foreground">
                Confidence: {(confidence * 100).toFixed(0)}%
              </label>
              <input
                type="range"
                min="10"
                max="90"
                value={confidence * 100}
                onChange={(e) => setConfidence(Number(e.target.value) / 100)}
                className="w-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="max-w-5xl mx-auto">
          {/* Video/Stream View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl border-2 border-primary/20"
          >
            {/* Live video feed - always visible as base layer */}
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover"
              style={{ display: isActive ? 'block' : 'none' }}
            />
            
            {/* Hidden canvas for frame capture */}
            <canvas ref={canvasRef} className="hidden" />

            {/* Processed frame overlay - shows on top of video when available */}
            {processedFrame && isStreaming && !isPaused && (
              <img
                src={processedFrame}
                alt="Processed frame with detections"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  console.error("Failed to load processed frame");
                  // Hide broken image and show video instead
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}

            {/* Overlays */}
            <AnimatePresence mode="wait">
              {/* Initial State */}
              {!isActive && !cameraError && (
                <motion.div
                  key="initial"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-background/80"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-pulse">
                    <Zap size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Real-time Detection</h3>
                  <p className="text-muted-foreground max-w-md mb-4">
                    Continuous coral health analysis at {frameRate} FPS using GPU-accelerated inference.
                  </p>
                  <p className="text-xs text-muted-foreground/60">
                    Backend: {API_URL}
                  </p>
                </motion.div>
              )}

              {/* Loading/Connecting State */}
              {isActive && !isVideoReady && !cameraError && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-background/60"
                >
                  <Loader2 size={48} className="text-primary animate-spin mb-4" />
                  <p className="text-lg font-medium">Initializing camera...</p>
                </motion.div>
              )}

              {/* Connecting to WebSocket */}
              {isActive && isVideoReady && !wsConnected && (
                <motion.div
                  key="connecting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-background/60"
                >
                  <Loader2 size={48} className="text-primary animate-spin mb-4" />
                  <p className="text-lg font-medium">Connecting to detection server...</p>
                  <p className="text-sm text-muted-foreground mt-2">{WS_URL}</p>
                </motion.div>
              )}

              {/* Camera Error */}
              {cameraError && (
                <motion.div
                  key="camera-error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-background/80"
                >
                  <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
                    <AlertTriangle size={48} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-red-400">Camera Error</h3>
                  <p className="text-muted-foreground max-w-md">{cameraError}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Stats Overlay */}
            {isStreaming && (
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                <div className="flex gap-2">
                  <div className={cn(
                    "glass px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2",
                    wsConnected ? "text-green-400" : "text-red-400"
                  )}>
                    <span className={cn(
                      "w-2 h-2 rounded-full animate-pulse",
                      wsConnected ? "bg-green-400" : "bg-red-400"
                    )} />
                    {isPaused ? "PAUSED" : "LIVE"}
                  </div>
                  <div className="glass px-3 py-1.5 rounded-full text-xs font-medium text-cyan-400">
                    <Gauge size={12} className="inline mr-1" />
                    {stats.fps.toFixed(1)} FPS
                  </div>
                </div>
                <div className="glass px-3 py-1.5 rounded-full text-xs font-medium text-purple-400">
                  Frame #{stats.frameCount}
                </div>
              </div>
            )}

            {/* Health Status Overlay */}
            {healthAnalysis && isStreaming && (
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                      getScoreColor(healthAnalysis.health_score)
                    )}>
                      {healthAnalysis.health_score}%
                    </div>
                    <div>
                      <div className={cn("font-bold text-sm", getStatusColor(healthAnalysis.status))}>
                        {healthAnalysis.status}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {healthAnalysis.total_corals} corals detected
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 text-xs">
                    <span className="text-green-400">🟢 {healthAnalysis.healthy_count}</span>
                    <span className="text-yellow-400">🟡 {healthAnalysis.bleached_count}</span>
                    <span className="text-red-400">🔴 {healthAnalysis.dead_count}</span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            {!isActive ? (
              <button
                onClick={startAll}
                className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20"
              >
                <Zap size={24} />
                Start Real-time Detection
              </button>
            ) : (
              <>
                {isStreaming && (
                  <button
                    onClick={togglePause}
                    className={cn(
                      "flex items-center gap-3 px-6 py-3 rounded-full text-lg font-bold transition-all",
                      isPaused 
                        ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" 
                        : "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                    )}
                  >
                    {isPaused ? <Play size={20} /> : <Pause size={20} />}
                    {isPaused ? "Resume" : "Pause"}
                  </button>
                )}
                <button
                  onClick={() => {
                    stopStreaming();
                    disconnectWebSocket();
                    stopCamera();
                    setProcessedFrame(null);
                    setHealthAnalysis(null);
                  }}
                  className="flex items-center gap-3 px-6 py-3 bg-red-500/10 text-red-500 rounded-full text-lg font-bold hover:bg-red-500/20 transition-all"
                >
                  <X size={20} />
                  Stop
                </button>
              </>
            )}
          </div>

          {/* Error Display */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-center"
            >
              <p className="text-red-400 font-medium">{error}</p>
              <p className="text-sm text-muted-foreground mt-2">
                Make sure the FastAPI backend is running: <code className="bg-muted px-2 py-0.5 rounded">python realtime_backend/main.py</code>
              </p>
            </motion.div>
          )}

          {/* Detections List */}
          {healthAnalysis && healthAnalysis.detections.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 glass rounded-2xl p-6"
            >
              <h3 className="font-bold mb-4">Live Detections</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-48 overflow-y-auto">
                {healthAnalysis.detections.slice(0, 12).map((det, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 rounded-lg bg-muted/50 text-sm"
                  >
                    <span className="truncate">{det.class}</span>
                    <span className="text-primary font-mono">{det.confidence}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
