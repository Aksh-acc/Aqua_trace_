"use client";

import { useState, useCallback, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, Upload, ShieldCheck, ShieldAlert, 
  Thermometer, Info, RefreshCw, Send, CheckCircle2,
  Camera, X, Zap, Activity, Image as ImageIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

// Unique ID generator to prevent React key collisions
let messageIdCounter = 1;
const generateMessageId = () => {
  return `msg-${messageIdCounter++}-${Math.random().toString(36).substring(2, 9)}`;
};

const agentMessages = [
  { id: generateMessageId(), type: "agent", content: "Hello. I am the CoralSense Guardian. You can upload a coral image and ask me questions about it, or simply ask me anything about coral reefs and marine conservation." },
];

export default function AgentPage() {
  const [messages, setMessages] = useState(agentMessages);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [lastImageDataUrl, setLastImageDataUrl] = useState<string | null>(null);
  const [imageReady, setImageReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Convert file to base64 for Gemini Vision API
  const fileToBase64 = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        // Remove the data URL prefix to get just the base64
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
    });
  };

  // Get user's location for SST data
  const getUserLocation = async (): Promise<{ latitude: number; longitude: number }> => {
    return new Promise((resolve) => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (pos) => resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
          () => resolve({ latitude: 10.345, longitude: 72.345 }), // Default: Lakshadweep
          { enableHighAccuracy: true, timeout: 5000 }
        );
      } else {
        resolve({ latitude: 10.345, longitude: 72.345 });
      }
    });
  };

  // Function to handle queries (with or without image) using Gemini API
  const handleQuery = async (query: string, includeImage: boolean = false) => {
    setIsAnalyzing(true);
    setResult(null);
    
    try {
      let imageBase64: string | null = null;
      let mimeType: string = "image/jpeg";
      
      if (includeImage && selectedFile) {
        imageBase64 = await fileToBase64(selectedFile);
        mimeType = selectedFile.type || "image/jpeg";
      } else if (includeImage && lastImageDataUrl) {
        // Extract base64 from data URL
        imageBase64 = lastImageDataUrl.split(',')[1];
      }

      // Get location for SST data when analyzing images
      let location = { latitude: 10.345, longitude: 72.345 };
      if (includeImage) {
        location = await getUserLocation();
      }

      // Build conversation history for context (exclude system messages about image upload)
      const conversationHistory = messages
        .filter(m => !m.content.includes("Image uploaded!") && !m.content.includes("Image captured!"))
        .map(m => ({
          role: m.type === "user" ? "user" : "assistant",
          content: m.content
        }));

      const response = await fetch("/api/agent-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          message: query,
          image: imageBase64,
          mimeType: mimeType,
          history: conversationHistory,
          latitude: location.latitude,
          longitude: location.longitude
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get AI response");
      }

      const data = await response.json();
      
      // Check if it's an analysis response with structured metrics
      if (includeImage && data.response) {
        const metrics = data.metrics || {};
        const sstData = data.sstData || {};
        setResult({
          status: "Analysis Complete",
          explanation: data.response,
          sstEstimate: metrics.estimatedSST ?? sstData.sst_celsius ?? null,
          dhw: metrics.dhw ?? sstData.dhw ?? null,
          anomaly: metrics.anomaly ?? sstData.anomaly ?? null,
          sstStatus: sstData.status ?? null,
          sstSource: sstData.source ?? null,
          risk: metrics.riskLevel ?? "Unknown",
          confidence: metrics.confidenceLevel ?? null,
          bleachingPercentage: metrics.bleachingPercentage ?? null,
          healthScore: metrics.healthScore ?? null,
          recommendations: data.recommendations ?? null,
        });
      }
      
      setMessages((prev) => [
        ...prev,
        {
          id: generateMessageId(),
          type: "agent",
          content: data.response || "I apologize, but I couldn't process your request. Please try again.",
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: generateMessageId(),
          type: "agent",
          content: "I'm having trouble connecting to the AI service. Please try again in a moment.",
        },
      ]);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSendMessage = async () => {
    const msg = textInput.trim();
    if (!msg) return;
    
    setMessages((prev) => [...prev, { id: generateMessageId(), type: "user", content: msg }]);
    setTextInput("");
    
    // Determine if we should include the image in the analysis
    const hasImage = !!(selectedFile || lastImageDataUrl);
    const shouldAnalyzeImage = hasImage && imageReady;
    
    // After using the image, reset the imageReady state
    if (shouldAnalyzeImage) {
      setImageReady(false);
    }
    
    await handleQuery(msg, !!shouldAnalyzeImage);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const dataUrlToFile = async (dataUrl: string, filename: string) => {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return new File([blob], filename, { type: blob.type || "image/jpeg" });
  };

  const startCamera = async () => {
    setIsCameraActive(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Camera error:", err);
      setIsCameraActive(false);
    }
  };

  const capturePhoto = async () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        const dataUrl = canvasRef.current.toDataURL("image/jpeg");
        setPreview(dataUrl);
        setLastImageDataUrl(dataUrl);
        stopCamera();
        const file = await dataUrlToFile(dataUrl, "capture.jpg");
        setSelectedFile(file);
        setImageReady(true);
        // Notify user that image is ready
        setMessages((prev) => [
          ...prev,
          {
            id: generateMessageId(),
            type: "agent",
            content: "📸 Image captured! Now you can ask me any questions about this coral image. For example: 'Analyze this coral for bleaching' or 'What species is this?'",
          },
        ]);
        // Focus the input field
        inputRef.current?.focus();
      }
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
    setIsCameraActive(false);
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setSelectedFile(file);
      setImageReady(true);
      // Convert to data URL for later use
      const reader = new FileReader();
      reader.onload = (e) => {
        setLastImageDataUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
      // Notify user that image is ready
      setMessages((prev) => [
        ...prev,
        {
          id: generateMessageId(),
          type: "agent",
          content: "🪸 Image uploaded! Now you can ask me any questions about this coral image. For example: 'Is this coral bleached?' or 'Analyze the health of this reef'",
        },
      ]);
      // Focus the input field
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
    disabled: isCameraActive
  });

  return (
    <div className="min-h-screen bg-background flex flex-col items-center p-0 pt-24 pb-0">
      <div className="w-full h-[calc(100vh-96px)] flex flex-col items-center">
        
        {/* Main Agent Interface - Full Length */}
        <div className="w-full max-w-5xl flex-1 bg-card md:rounded-t-[3rem] border-x border-t border-primary/10 shadow-2xl flex flex-col overflow-hidden">
          <div className="p-8 border-b border-primary/5 flex items-center justify-between bg-primary/5 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                <Bot size={26} />
              </div>
              <div>
                <h2 className="font-bold text-xl leading-tight">CoralSense Guardian</h2>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Neural Intelligence Active</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Sync Status</span>
                <span className="text-xs font-semibold">Live Feed Connected</span>
              </div>
              <Activity className="text-primary animate-pulse" size={20} />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-8 custom-scrollbar bg-dot-pattern">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "max-w-[85%] p-8 rounded-[2.5rem] text-lg leading-relaxed shadow-sm",
                  msg.type === "agent" 
                    ? "bg-muted text-foreground rounded-tl-none border border-primary/5" 
                    : "bg-primary text-primary-foreground ml-auto rounded-tr-none shadow-primary/10"
                )}
              >
                {msg.content}
                {msg.type === 'agent' && result && msg.id === messages[messages.length-1].id && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 pt-8 border-t border-primary/10 space-y-8"
                  >
                    <div className="flex items-center gap-3 text-accent">
                      <ShieldAlert size={22} />
                      <span className="text-sm font-bold uppercase tracking-[0.2em]">Diagnostic Neural Report</span>
                    </div>
                    
                    <div className="bg-background/40 backdrop-blur-sm rounded-[2rem] p-8 border border-primary/10 space-y-6">
                      
                      {/* SST Data Source Badge */}
                      {result.sstSource && (
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <span className={cn(
                            "px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                            result.sstSource === "api" ? "bg-green-500/20 text-green-600" : "bg-yellow-500/20 text-yellow-600"
                          )}>
                            {result.sstSource === "api" ? "🌊 Live SST Data" : "📊 Simulated SST Data"}
                          </span>
                          {result.sstStatus && (
                            <span className={cn(
                              "px-2 py-1 rounded-full text-[10px] font-bold uppercase",
                              result.sstStatus === "critical" ? "bg-red-500/20 text-red-600" :
                              result.sstStatus === "elevated" ? "bg-orange-500/20 text-orange-600" :
                              "bg-green-500/20 text-green-600"
                            )}>
                              {result.sstStatus}
                            </span>
                          )}
                        </div>
                      )}

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className={cn(
                          "p-5 rounded-2xl border flex items-center gap-4 shadow-inner",
                          result.sstEstimate && result.sstEstimate > 29 
                            ? "bg-red-500/10 border-red-500/30" 
                            : "bg-card border-primary/5"
                        )}>
                          <Thermometer className={result.sstEstimate && result.sstEstimate > 29 ? "text-red-500" : "text-primary"} size={24} />
                          <div>
                            <span className="block text-[10px] uppercase text-muted-foreground font-bold tracking-widest">SST</span>
                            <span className="text-xl font-bold">
                              {typeof result.sstEstimate === "number" ? `${result.sstEstimate}°C` : "N/A"}
                            </span>
                          </div>
                        </div>
                        <div className={cn(
                          "p-5 rounded-2xl border flex items-center gap-4 shadow-inner",
                          result.dhw && result.dhw >= 8 ? "bg-red-500/10 border-red-500/30" :
                          result.dhw && result.dhw >= 4 ? "bg-orange-500/10 border-orange-500/30" :
                          "bg-card border-primary/5"
                        )}>
                          <Activity className={
                            result.dhw && result.dhw >= 8 ? "text-red-500" :
                            result.dhw && result.dhw >= 4 ? "text-orange-500" :
                            "text-primary"
                          } size={24} />
                          <div>
                            <span className="block text-[10px] uppercase text-muted-foreground font-bold tracking-widest">DHW</span>
                            <span className={cn(
                              "text-xl font-bold",
                              result.dhw && result.dhw >= 8 ? "text-red-500" :
                              result.dhw && result.dhw >= 4 ? "text-orange-500" :
                              ""
                            )}>
                              {typeof result.dhw === "number" ? result.dhw.toFixed(1) : "N/A"}
                            </span>
                          </div>
                        </div>
                        <div className={cn(
                          "p-5 rounded-2xl border flex items-center gap-4 shadow-inner",
                          result.risk === "Critical" ? "bg-red-500/10 border-red-500/30" :
                          result.risk === "High" ? "bg-orange-500/10 border-orange-500/30" :
                          result.risk === "Moderate" ? "bg-yellow-500/10 border-yellow-500/30" :
                          "bg-green-500/10 border-green-500/30"
                        )}>
                          <Zap className={
                            result.risk === "Critical" ? "text-red-500" :
                            result.risk === "High" ? "text-orange-500" :
                            result.risk === "Moderate" ? "text-yellow-500" :
                            "text-green-500"
                          } size={24} />
                          <div>
                            <span className="block text-[10px] uppercase text-muted-foreground font-bold tracking-widest">Risk Level</span>
                            <span className={cn(
                              "text-xl font-bold",
                              result.risk === "Critical" ? "text-red-500" :
                              result.risk === "High" ? "text-orange-500" :
                              result.risk === "Moderate" ? "text-yellow-500" :
                              "text-green-500"
                            )}>{result.risk || "N/A"}</span>
                          </div>
                        </div>
                        <div className="bg-card p-5 rounded-2xl border border-primary/5 flex items-center gap-4 shadow-inner">
                          <CheckCircle2 className="text-primary" size={24} />
                          <div>
                            <span className="block text-[10px] uppercase text-muted-foreground font-bold tracking-widest">Confidence</span>
                            <span className="text-xl font-bold">
                              {typeof result.confidence === "number" ? `${result.confidence}%` : "N/A"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Anomaly indicator */}
                      {typeof result.anomaly === "number" && (
                        <div className={cn(
                          "flex items-center gap-3 p-3 rounded-xl text-sm",
                          result.anomaly > 1.5 ? "bg-red-500/10 text-red-600" :
                          result.anomaly > 0.5 ? "bg-orange-500/10 text-orange-600" :
                          "bg-blue-500/10 text-blue-600"
                        )}>
                          <Thermometer size={18} />
                          <span className="font-medium">
                            Temperature Anomaly: <strong>{result.anomaly > 0 ? "+" : ""}{result.anomaly.toFixed(1)}°C</strong> from baseline
                          </span>
                        </div>
                      )}

                      {result.bleachingPercentage !== null && (
                        <div className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-primary/5">
                          <div className="flex-1">
                            <span className="block text-[10px] uppercase text-muted-foreground font-bold tracking-widest mb-2">Bleaching Level</span>
                            <div className="h-3 bg-muted rounded-full overflow-hidden">
                              <div 
                                className={cn(
                                  "h-full rounded-full transition-all",
                                  result.bleachingPercentage > 50 ? "bg-red-500" :
                                  result.bleachingPercentage > 25 ? "bg-orange-500" :
                                  "bg-yellow-500"
                                )}
                                style={{ width: `${result.bleachingPercentage}%` }}
                              />
                            </div>
                          </div>
                          <span className="text-2xl font-bold">{result.bleachingPercentage}%</span>
                        </div>
                      )}

                      <div className={cn(
                        "p-6 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6",
                        result.risk === "Critical" || result.risk === "High" 
                          ? "bg-accent/5 border-accent/10" 
                          : "bg-green-500/5 border-green-500/10"
                      )}>
                        <p className="text-sm font-medium text-foreground/80 italic">
                          {result.recommendations || (
                            result.risk === "Critical" || result.risk === "High" 
                              ? "⚠️ Immediate intervention recommended. Consider alerting local marine conservation authorities."
                              : result.risk === "Moderate"
                              ? "📋 Continue monitoring this area. Schedule follow-up assessment in 2 weeks."
                              : "✅ Coral appears healthy. Continue regular monitoring protocol."
                          )}
                        </p>
                        {(result.risk === "Critical" || result.risk === "High") && (
                          <button className="px-8 py-3 bg-accent text-white rounded-full font-bold shadow-lg shadow-accent/20 hover:scale-105 transition-transform whitespace-nowrap">
                            Broadcast Alert
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
            {isAnalyzing && (
              <div className="flex gap-2 p-6 bg-muted/50 rounded-full w-28 justify-center shadow-inner ml-4">
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce" />
              </div>
            )}
          </div>

          <div className="p-8 md:p-12 border-t border-primary/5 bg-background/50 backdrop-blur-xl">
            {/* Input & Camera Actions */}
            <div className="max-w-4xl mx-auto space-y-6">
              <AnimatePresence>
                {isCameraActive && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl mb-6"
                  >
                    <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
                    <div className="absolute inset-0 pointer-events-none border-[30px] border-black/20">
                      <div className="w-full h-full border-2 border-primary/50 border-dashed rounded-3xl" />
                    </div>
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-6">
                      <button onClick={stopCamera} className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30"><X size={24} /></button>
                      <button onClick={capturePhoto} className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center group"><div className="w-16 h-16 rounded-full bg-white group-hover:scale-90 transition-transform" /></button>
                      <div className="w-12 h-12" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-4">
                <div {...getRootProps()} className="flex-shrink-0 relative">
                  <input {...getInputProps()} />
                  <button className={cn(
                    "w-14 h-14 rounded-2xl border flex items-center justify-center transition-all",
                    imageReady 
                      ? "bg-primary/20 border-primary text-primary" 
                      : "bg-muted border-primary/10 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  )}>
                    <Upload size={24} />
                  </button>
                  {imageReady && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                  )}
                </div>
                <button 
                  onClick={startCamera}
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center transition-all",
                    isCameraActive ? "bg-accent text-white" : "bg-muted border border-primary/10 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  <Camera size={24} />
                </button>
                <div className="relative flex-1 flex items-center gap-3">
                  <input 
                    ref={inputRef}
                    type="text" 
                    placeholder={imageReady ? "Ask about the uploaded image..." : "Ask me anything about coral reefs..."}
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    className="flex-1 bg-muted border border-primary/5 rounded-2xl px-8 py-4 text-lg focus:ring-2 focus:ring-primary/20 focus:bg-background focus:border-primary/10 outline-none transition-all shadow-inner"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isAnalyzing || !textInput.trim()}
                    className="w-14 h-14 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <Send size={24} />
                  </button>
                </div>
              </div>
              {imageReady && preview && (
                <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-2xl border border-primary/10">
                  <img src={preview} alt="Uploaded coral" className="w-12 h-12 rounded-xl object-cover" />
                  <span className="text-sm text-muted-foreground flex-1">Image ready for analysis</span>
                  <button 
                    onClick={() => {
                      setImageReady(false);
                      setPreview(null);
                      setSelectedFile(null);
                      setLastImageDataUrl(null);
                    }}
                    className="p-2 hover:bg-primary/10 rounded-xl transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
              <p className="text-center text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em]">
                Neural Imagery & Spectral Analysis Protocol v4.2
              </p>
            </div>
          </div>
        </div>
      </div>
      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
}
