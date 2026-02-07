"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  X,
  Upload,
  RefreshCw,
  Activity,
  Heart,
  AlertTriangle,
  Skull,
  Fish,
  Loader2,
  CheckCircle,
  ArrowLeft,
  Settings,
  Zap,
  Pause,
  Play,
  Video,
  CameraIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Backend API URL - Update this to match your Flask server
const API_URL = process.env.NEXT_PUBLIC_CORAL_API_URL || "http://localhost:5000";

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

interface AnalysisResult {
  success: boolean;
  annotated_image: string;
  health_analysis: HealthAnalysis;
  error?: string;
}

export default function ARViewPage() {
  // Mode: 'snapshot' or 'live'
  const [mode, setMode] = useState<'snapshot' | 'live'>('live');
  
  // Camera state
  const [isActive, setIsActive] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  
  // Snapshot mode state
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  
  // Live mode state
  const [isStreaming, setIsStreaming] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [liveFrame, setLiveFrame] = useState<string | null>(null);
  const [liveHealth, setLiveHealth] = useState<HealthAnalysis | null>(null);
  const [fps, setFps] = useState(0);
  const [frameCount, setFrameCount] = useState(0);
  
  // Settings
  const [showSettings, setShowSettings] = useState(false);
  const [frameRate, setFrameRate] = useState(3); // Frames per second
  const [quality, setQuality] = useState(70);
  const [confidence, setConfidence] = useState(0.25);
  
  // Error state
  const [error, setError] = useState<string | null>(null);
  
  // Refs
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const frameIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const fpsCounterRef = useRef<number[]>([]);

  // Start camera
  const startCamera = async () => {
    setError(null);
    setCameraError(null);
    setResult(null);
    setIsVideoReady(false);
    setLiveFrame(null);
    setLiveHealth(null);

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setCameraError("Camera API not available. Please use HTTPS or localhost.");
      return;
    }

    try {
      let stream: MediaStream;
      const videoConstraints = {
        video: {
          facingMode: { ideal: "environment" },
          width: { ideal: 1280, min: 640 },
          height: { ideal: 720, min: 480 },
          frameRate: { ideal: 30 },
        },
        audio: false,
      };

      try {
        stream = await navigator.mediaDevices.getUserMedia(videoConstraints);
      } catch (envErr) {
        console.log("Environment camera failed, trying any camera...", envErr);
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
      }

      const videoTrack = stream.getVideoTracks()[0];
      console.log("Got camera stream:", videoTrack?.label);
      
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

  // Effect to attach stream to video element
  useEffect(() => {
    if (!isActive || !streamRef.current) return;
    
    const attachStream = () => {
      const video = videoRef.current;
      if (!video) {
        requestAnimationFrame(attachStream);
        return;
      }

      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      
      if (video.srcObject !== streamRef.current) {
        video.srcObject = streamRef.current;
      }
      
      const handleCanPlay = () => {
        if (video.videoWidth > 0 && video.videoHeight > 0) {
          video.play()
            .then(() => {
              setIsVideoReady(true);
              console.log("Video ready:", video.videoWidth, "x", video.videoHeight);
            })
            .catch((err) => {
              console.error("Play error:", err);
              setIsVideoReady(true);
            });
        }
      };

      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleCanPlay);
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleCanPlay);
      
      if (video.readyState >= 3) {
        handleCanPlay();
      }
    };

    requestAnimationFrame(attachStream);

    return () => {
      if (videoRef.current) {
        videoRef.current.oncanplay = null;
      }
    };
  }, [isActive]);

  // Stop camera
  const stopCamera = useCallback(() => {
    stopStreaming();
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsActive(false);
    setIsVideoReady(false);
    setLiveFrame(null);
    setLiveHealth(null);
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  // Send frame to backend for analysis (Live mode)
  const sendFrameForAnalysis = useCallback(async () => {
    if (!videoRef.current || !canvasRef.current || isPaused) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video.videoWidth === 0 || video.videoHeight === 0) return;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    ctx.drawImage(video, 0, 0);
    const imageData = canvas.toDataURL("image/jpeg", quality / 100);
    
    const startTime = Date.now();
    
    try {
      const response = await fetch(`${API_URL}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          image_data: imageData,
          conf: confidence 
        }),
      });

      const data = await response.json();

      if (data.success) {
        setLiveFrame(data.annotated_image);
        setLiveHealth(data.health_analysis);
        setError(null);
        
        // Calculate FPS
        const endTime = Date.now();
        const processingTime = endTime - startTime;
        fpsCounterRef.current.push(processingTime);
        if (fpsCounterRef.current.length > 10) {
          fpsCounterRef.current.shift();
        }
        const avgTime = fpsCounterRef.current.reduce((a, b) => a + b, 0) / fpsCounterRef.current.length;
        setFps(Math.round(1000 / avgTime));
        setFrameCount(prev => prev + 1);
      }
    } catch (err: any) {
      console.error("Live analysis error:", err);
      setError("Connection to backend failed. Check if server is running.");
    }
  }, [isPaused, quality, confidence]);

  // Start live streaming
  const startStreaming = useCallback(() => {
    if (!isVideoReady) {
      setError("Camera not ready");
      return;
    }

    if (frameIntervalRef.current) {
      clearInterval(frameIntervalRef.current);
    }

    const intervalMs = 1000 / frameRate;
    frameIntervalRef.current = setInterval(sendFrameForAnalysis, intervalMs);
    setIsStreaming(true);
    setIsPaused(false);
    setFrameCount(0);
    fpsCounterRef.current = [];
    
    console.log(`Started live streaming at ${frameRate} FPS`);
  }, [isVideoReady, frameRate, sendFrameForAnalysis]);

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
    setIsPaused(prev => !prev);
  }, []);

  // Auto-start streaming when camera is ready in live mode
  useEffect(() => {
    if (mode === 'live' && isVideoReady && !isStreaming) {
      startStreaming();
    }
  }, [mode, isVideoReady, isStreaming, startStreaming]);

  // Update frame rate while streaming
  useEffect(() => {
    if (isStreaming && !isPaused) {
      if (frameIntervalRef.current) {
        clearInterval(frameIntervalRef.current);
      }
      const intervalMs = 1000 / frameRate;
      frameIntervalRef.current = setInterval(sendFrameForAnalysis, intervalMs);
    }
  }, [frameRate, isStreaming, isPaused, sendFrameForAnalysis]);

  // Snapshot mode: Capture and analyze
  const captureAndAnalyze = async () => {
    if (!videoRef.current || !canvasRef.current) {
      setError("Video or canvas not available");
      return;
    }

    const video = videoRef.current;
    
    if (video.videoWidth === 0 || video.videoHeight === 0) {
      setError("Camera not ready. Please wait for the video to load.");
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Could not get canvas context");
      
      ctx.drawImage(video, 0, 0);
      const imageData = canvas.toDataURL("image/jpeg", 0.9);
      
      const response = await fetch(`${API_URL}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image_data: imageData }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data);
      } else {
        setError(data.error || "Analysis failed");
      }
    } catch (err: any) {
      setError(err.message || "Failed to analyze image");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Upload and analyze
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsAnalyzing(true);
    setError(null);
    stopCamera();

    const reader = new FileReader();
    reader.onload = async (e) => {
      const imageData = e.target?.result as string;
      try {
        const response = await fetch(`${API_URL}/analyze`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ image_data: imageData }),
        });
        const data = await response.json();
        if (data.success) {
          setResult(data);
        } else {
          setError(data.error || "Analysis failed");
        }
      } catch (err: any) {
        setError("Failed to connect to backend");
      } finally {
        setIsAnalyzing(false);
      }
    };
    reader.readAsDataURL(file);
  };

  // Reset view
  const resetView = () => {
    setResult(null);
    setError(null);
    setLiveFrame(null);
    setLiveHealth(null);
    startCamera();
  };

  // Switch mode
  const switchMode = (newMode: 'snapshot' | 'live') => {
    if (newMode === mode) return;
    
    if (newMode === 'snapshot') {
      stopStreaming();
    }
    setMode(newMode);
    setResult(null);
    setLiveFrame(null);
    setLiveHealth(null);
    
    if (newMode === 'live' && isVideoReady) {
      startStreaming();
    }
  };

  // Get the current health analysis (from live or snapshot)
  const currentHealth = mode === 'live' ? liveHealth : result?.health_analysis;

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
              {mode === 'live' ? <Zap size={20} className="text-yellow-400" /> : <Fish size={20} />}
              {mode === 'live' ? 'Real-time Coral Detection' : 'Coral AR Detection'}
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
            <h3 className="font-bold text-sm">Detection Settings</h3>
            
            <div className="space-y-2">
              <label className="text-xs text-muted-foreground">
                Frame Rate: {frameRate} FPS
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={frameRate}
                onChange={(e) => setFrameRate(Number(e.target.value))}
                className="w-full accent-primary"
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
                className="w-full accent-primary"
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
                className="w-full accent-primary"
              />
            </div>
            
            <div className="pt-2 border-t border-muted">
              <p className="text-xs text-muted-foreground mb-2">Backend: {API_URL}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 pt-24 pb-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Mode Toggle */}
          <div className="flex justify-center mb-6">
            <div className="glass rounded-full p-1 flex gap-1">
              <button
                onClick={() => switchMode('live')}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                  mode === 'live' 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                )}
              >
                <Video size={16} />
                Live Mode
              </button>
              <button
                onClick={() => switchMode('snapshot')}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                  mode === 'snapshot' 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                )}
              >
                <CameraIcon size={16} />
                Snapshot
              </button>
            </div>
          </div>

          {/* Camera/Result View */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden bg-muted shadow-2xl border-2 border-primary/20"
          >
            <AnimatePresence mode="wait">
              {/* Initial State - No Camera */}
              {!isActive && !result && !cameraError && (
                <motion.div
                  key="initial"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-pulse">
                    <Camera size={48} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {mode === 'live' ? 'Start Real-time Detection' : 'Start AR Detection'}
                  </h3>
                  <p className="text-muted-foreground max-w-md mb-6">
                    {mode === 'live' 
                      ? 'Stream your camera feed for continuous coral health analysis with live segmentation overlays.'
                      : 'Capture snapshots to detect and analyze coral health using YOLOv8 segmentation.'}
                  </p>
                </motion.div>
              )}

              {/* Camera Error */}
              {cameraError && (
                <motion.div
                  key="camera-error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-6">
                    <AlertTriangle size={48} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-red-400">Camera Access Error</h3>
                  <p className="text-muted-foreground max-w-md">{cameraError}</p>
                </motion.div>
              )}

              {/* Live Camera Feed with Overlay */}
              {isActive && !result && (
                <motion.div
                  key="camera"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black"
                >
                  {/* Video element (hidden when we have live frame in live mode) */}
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className={cn(
                      "w-full h-full object-cover",
                      mode === 'live' && liveFrame ? "hidden" : "block"
                    )}
                    style={{ transform: 'translateZ(0)' }}
                  />
                  
                  {/* Live segmentation overlay (in live mode) */}
                  {mode === 'live' && liveFrame && (
                    <img
                      src={liveFrame}
                      alt="Live Segmentation"
                      className="w-full h-full object-contain"
                    />
                  )}
                  
                  {/* Status overlay */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      {/* Status badge */}
                      <div className={cn(
                        "glass px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2",
                        isVideoReady 
                          ? (mode === 'live' && isStreaming ? "text-green-400" : "text-cyan-400")
                          : "text-yellow-400"
                      )}>
                        <span className={cn(
                          "w-2 h-2 rounded-full",
                          isVideoReady 
                            ? (mode === 'live' && isStreaming ? "bg-green-400 animate-pulse" : "bg-cyan-400")
                            : "bg-yellow-400 animate-pulse"
                        )} />
                        {!isVideoReady 
                          ? "LOADING..." 
                          : mode === 'live' 
                            ? (isPaused ? "PAUSED" : "STREAMING")
                            : "LIVE"
                        }
                      </div>
                      
                      {/* FPS counter (live mode) */}
                      {mode === 'live' && isStreaming && (
                        <div className="glass px-3 py-1.5 rounded-full text-xs font-medium text-green-400">
                          {fps} FPS | {frameCount} frames
                        </div>
                      )}
                    </div>
                    
                    {/* Live health stats (live mode) */}
                    {mode === 'live' && liveHealth && (
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="glass rounded-xl p-3 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Heart size={14} className="text-green-400" />
                              <span className="text-green-400 font-bold">{liveHealth.healthy_count}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <AlertTriangle size={14} className="text-yellow-400" />
                              <span className="text-yellow-400 font-bold">{liveHealth.bleached_count}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Skull size={14} className="text-red-400" />
                              <span className="text-red-400 font-bold">{liveHealth.dead_count}</span>
                            </div>
                          </div>
                          <div className={cn(
                            "px-3 py-1 rounded-full text-xs font-bold",
                            liveHealth.status.includes("Healthy") ? "bg-green-500/20 text-green-400" :
                            liveHealth.status.includes("Moderate") ? "bg-yellow-500/20 text-yellow-400" :
                            liveHealth.status.includes("Bleaching") ? "bg-orange-500/20 text-orange-400" :
                            "bg-red-500/20 text-red-400"
                          )}>
                            Score: {liveHealth.health_score}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Corner brackets (snapshot mode only) */}
                    {mode === 'snapshot' && (
                      <>
                        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
                        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/50 rounded-tr-lg" />
                        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/50 rounded-bl-lg" />
                        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/50 rounded-br-lg" />
                      </>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Analysis Result (snapshot mode) */}
              {result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0"
                >
                  <img
                    src={result.annotated_image}
                    alt="Analysis Result"
                    className="w-full h-full object-contain bg-black"
                  />
                </motion.div>
              )}

              {/* Analyzing Overlay */}
              {isAnalyzing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-20"
                >
                  <Loader2 size={48} className="text-primary animate-spin mb-4" />
                  <p className="text-white font-medium">Analyzing coral health...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            {!isActive && !result ? (
              <>
                <button
                  onClick={startCamera}
                  disabled={isAnalyzing}
                  className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20 disabled:opacity-50"
                >
                  <Camera size={24} />
                  Start Camera
                </button>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isAnalyzing}
                  className="flex items-center gap-3 px-8 py-4 glass text-primary rounded-full text-lg font-bold hover:bg-primary/10 transition-all disabled:opacity-50"
                >
                  <Upload size={24} />
                  Upload Image
                </button>
              </>
            ) : isActive && !result ? (
              <>
                {mode === 'live' ? (
                  <>
                    {/* Live mode controls */}
                    <button
                      onClick={togglePause}
                      disabled={!isStreaming}
                      className={cn(
                        "flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold transition-all disabled:opacity-50",
                        isPaused 
                          ? "bg-green-500 text-white hover:bg-green-600"
                          : "bg-yellow-500 text-black hover:bg-yellow-600"
                      )}
                    >
                      {isPaused ? <Play size={24} /> : <Pause size={24} />}
                      {isPaused ? "Resume" : "Pause"}
                    </button>
                  </>
                ) : (
                  <>
                    {/* Snapshot mode controls */}
                    <button
                      onClick={captureAndAnalyze}
                      disabled={isAnalyzing || !isVideoReady}
                      className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20 disabled:opacity-50"
                    >
                      {!isVideoReady ? (
                        <Loader2 size={24} className="animate-spin" />
                      ) : (
                        <Activity size={24} />
                      )}
                      {!isVideoReady ? "Loading..." : "Capture & Analyze"}
                    </button>
                  </>
                )}
                <button
                  onClick={stopCamera}
                  className="flex items-center gap-3 px-8 py-4 bg-red-500/10 text-red-500 rounded-full text-lg font-bold hover:bg-red-500/20 transition-all"
                >
                  <X size={24} />
                  Stop
                </button>
              </>
            ) : result ? (
              <>
                <button
                  onClick={resetView}
                  className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20"
                >
                  <RefreshCw size={24} />
                  New Scan
                </button>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-3 px-8 py-4 glass text-primary rounded-full text-lg font-bold hover:bg-primary/10 transition-all"
                >
                  <Upload size={24} />
                  Upload Another
                </button>
              </>
            ) : null}
          </div>

          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleFileUpload}
            className="hidden"
          />

          {/* Error Display */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-center"
            >
              <p className="text-red-400 font-medium">{error}</p>
              <p className="text-sm text-muted-foreground mt-2">
                Make sure backend is running: <code className="bg-muted px-2 py-0.5 rounded">python webapp/app.py</code>
              </p>
            </motion.div>
          )}

          {/* Health Analysis Results (detailed view for snapshot mode) */}
          {result && result.health_analysis && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 space-y-6"
            >
              <div className="glass rounded-3xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-6">Reef Health Analysis</h2>

                <div
                  className={cn(
                    "inline-flex items-center gap-2 px-6 py-3 rounded-full text-lg font-bold mb-6",
                    result.health_analysis.status.includes("Healthy")
                      ? "bg-green-500/20 text-green-400"
                      : result.health_analysis.status.includes("Moderate")
                      ? "bg-yellow-500/20 text-yellow-400"
                      : result.health_analysis.status.includes("Bleaching")
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-red-500/20 text-red-400"
                  )}
                >
                  {result.health_analysis.status.includes("Healthy") && <CheckCircle size={24} />}
                  {result.health_analysis.status.includes("Moderate") && <AlertTriangle size={24} />}
                  {result.health_analysis.status.includes("Bleaching") && <AlertTriangle size={24} />}
                  {result.health_analysis.status.includes("Critical") && <Skull size={24} />}
                  {result.health_analysis.status}
                </div>

                <div className="relative w-48 h-48 mx-auto mb-6">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="96" cy="96" r="88" fill="none" stroke="currentColor" strokeWidth="12" className="text-muted" />
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      fill="none"
                      stroke={result.health_analysis.health_score >= 70 ? "#22c55e" : result.health_analysis.health_score >= 40 ? "#eab308" : "#ef4444"}
                      strokeWidth="12"
                      strokeLinecap="round"
                      strokeDasharray={`${(result.health_analysis.health_score / 100) * 553} 553`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold">{result.health_analysis.health_score}</span>
                    <span className="text-muted-foreground text-sm">/ 100</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="bg-background/50 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-green-400">{result.health_analysis.healthy_count}</div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1">
                      <Heart size={14} className="text-green-400" /> Healthy
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-yellow-400">{result.health_analysis.bleached_count}</div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1">
                      <AlertTriangle size={14} className="text-yellow-400" /> Bleached
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-red-400">{result.health_analysis.dead_count}</div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1">
                      <Skull size={14} className="text-red-400" /> Dead
                    </div>
                  </div>
                  <div className="bg-background/50 rounded-2xl p-4">
                    <div className="text-3xl font-bold text-primary">{result.health_analysis.total_corals}</div>
                    <div className="text-sm text-muted-foreground flex items-center justify-center gap-1 mt-1">
                      <Fish size={14} className="text-primary" /> Total
                    </div>
                  </div>
                </div>
              </div>

              {result.health_analysis.detections.length > 0 && (
                <div className="glass rounded-3xl p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Activity size={20} className="text-primary" />
                    Detected Species ({result.health_analysis.detections.length})
                  </h3>
                  <div className="max-h-64 overflow-y-auto space-y-2 pr-2">
                    {result.health_analysis.detections.map((detection, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-xl">
                        <span className="font-medium capitalize">{detection.class.replace(/_/g, " ")}</span>
                        <span className={cn(
                          "px-3 py-1 rounded-full text-sm font-bold",
                          detection.confidence >= 80 ? "bg-green-500/20 text-green-400" :
                          detection.confidence >= 50 ? "bg-yellow-500/20 text-yellow-400" :
                          "bg-red-500/20 text-red-400"
                        )}>
                          {detection.confidence}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Hidden canvas for capture */}
          <canvas ref={canvasRef} className="hidden" />
        </div>
      </div>
    </div>
  );
}
