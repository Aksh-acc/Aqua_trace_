"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Camera, X, Zap, Activity, ShieldAlert, 
  Target, Info, RefreshCw, Maximize, Scan, ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const detections = [
  { id: 1, label: "Acropora cervicornis", status: "Healthy", x: "25%", y: "40%", color: "text-green-400" },
  { id: 2, label: "Porites astreoides", status: "Stressed", x: "65%", y: "30%", color: "text-yellow-400" },
  { id: 3, label: "Diploria labyrinthiformis", status: "Bleached", x: "45%", y: "70%", color: "text-red-400" },
];

export default function ARScannerSection() {
  const [isActive, setIsActive] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [detectedItems, setDetectedItems] = useState<any[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isScanning, setIsScanning] = useState(false);

  const startAR = async () => {
    setIsActive(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("AR Camera error:", err);
      setIsActive(false);
    }
  };

  const stopAR = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
    }
    setIsActive(false);
    setIsScanning(false);
    setDetectedItems([]);
  };

  useEffect(() => {
    let interval: any;
    if (isActive && isScanning) {
      interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setDetectedItems(detections);
            return 100;
          }
          return prev + 2;
        });
      }, 50);
    } else {
      setScanProgress(0);
      setDetectedItems([]);
    }
    return () => clearInterval(interval);
  }, [isActive, isScanning]);

  return (
    <section className="w-full py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
              Real-Time AR Intelligence
            </div>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Identify bleaching <br /> in <span className="text-primary italic">real-time.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Equip your diving gear with CoralSense AR. Our neural engine identifies coral species and assesses bleaching severity instantly through your device's camera.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <Scan size={14} />
                </div>
                <div>
                  <h4 className="font-bold">Neural Species Tagging</h4>
                  <p className="text-sm text-muted-foreground">Automatic classification of 150+ coral species in the Indo-Pacific and Caribbean.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <Zap size={14} />
                </div>
                <div>
                  <h4 className="font-bold">Pigment Density Mapping</h4>
                  <p className="text-sm text-muted-foreground">Quantifies chlorophyll-a loss to detect early-stage bleaching before it's visible to the naked eye.</p>
                </div>
              </div>
            </div>

            {!isActive ? (
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/ar-view"
                  className="group flex items-center gap-3 px-10 py-5 bg-primary text-primary-foreground rounded-full text-xl font-bold hover:scale-105 transition-all shadow-xl shadow-primary/20"
                >
                  <Camera size={24} />
                  Launch AR Detection
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ) : (
              <button 
                onClick={stopAR}
                className="flex items-center gap-3 px-10 py-5 bg-red-500 text-white rounded-full text-xl font-bold hover:bg-red-600 transition-all"
              >
                <X size={24} />
                Close Scanner
              </button>
            )}
          </div>

          <div className="flex-1 w-full max-w-2xl relative">
            <div className="aspect-[4/3] rounded-[3rem] bg-muted overflow-hidden relative shadow-2xl border-4 border-primary/10">
              <AnimatePresence mode="wait">
                {!isActive ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-12"
                  >
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 animate-pulse">
                      <Scan size={48} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Camera Ready</h3>
                    <p className="text-muted-foreground">Allow camera access to begin real-time reef analysis</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black"
                  >
                    <video 
                      ref={videoRef} 
                      autoPlay 
                      playsInline 
                      className="w-full h-full object-cover opacity-80" 
                    />
                    
                    {/* AR Overlays */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Scanning Grid */}
                      <div className="absolute inset-0 border-[40px] border-black/40">
                        <div className="w-full h-full border-2 border-primary/30 border-dashed rounded-[2rem] relative">
                          {/* Corner Accents */}
                          <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-primary rounded-tl-xl" />
                          <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-right-4 border-primary rounded-tr-xl" />
                          <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-primary rounded-bl-xl" />
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-right-4 border-primary rounded-br-xl" />
                        </div>
                      </div>

                      {/* Scanning Line */}
                      {isScanning && scanProgress < 100 && (
                        <motion.div 
                          initial={{ top: "10%" }}
                          animate={{ top: "90%" }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="absolute left-10 right-10 h-0.5 bg-primary/50 shadow-[0_0_15px_rgba(var(--primary),0.5)] z-10"
                        />
                      )}

                      {/* Detected Items */}
                      {detectedItems.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          style={{ left: item.x, top: item.y }}
                          className="absolute z-20"
                        >
                          <div className="relative group">
                            <div className={cn("w-4 h-4 rounded-full border-2 border-white shadow-lg animate-ping absolute -inset-0.5", item.color)} />
                            <div className={cn("w-3 h-3 rounded-full border-2 border-white shadow-lg", item.color.replace('text', 'bg'))} />
                            
                            <div className="absolute left-6 top-1/2 -translate-y-1/2 glass px-4 py-2 rounded-xl border border-white/20 whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold text-white uppercase tracking-tighter">{item.label}</span>
                                <span className={cn("text-[8px] font-bold px-1.5 py-0.5 rounded-full bg-white/10", item.color)}>
                                  {item.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}

                      {/* HUD UI */}
                      <div className="absolute top-12 left-12 right-12 flex justify-between items-start">
                        <div className="glass px-4 py-2 rounded-xl border border-white/10 flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                          <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live AR Feed</span>
                        </div>
                        <div className="text-right">
                          <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Depth: 12.4m</div>
                          <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest">Temp: 29.4°C</div>
                        </div>
                      </div>

                      <div className="absolute bottom-12 left-12 right-12 flex flex-col items-center gap-6 pointer-events-auto">
                        {!isScanning ? (
                          <button 
                            onClick={() => setIsScanning(true)}
                            className="px-8 py-3 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-all shadow-xl"
                          >
                            Initiate Reef Scan
                          </button>
                        ) : (
                          <div className="w-full max-w-xs space-y-2">
                            <div className="flex justify-between text-[10px] font-bold text-white uppercase tracking-widest">
                              <span>Neural Processing</span>
                              <span>{scanProgress}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-primary"
                                initial={{ width: 0 }}
                                animate={{ width: `${scanProgress}%` }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Decorative data streams */}
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 space-y-4 hidden xl:block">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass p-3 rounded-xl border border-white/5 space-y-2 w-32">
                  <div className="h-1 w-full bg-primary/20 rounded-full overflow-hidden">
                    <motion.div 
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
                      className="h-full w-1/2 bg-primary"
                    />
                  </div>
                  <div className="flex justify-between text-[8px] font-bold text-muted-foreground">
                    <span>MTX-{i}</span>
                    <span>OK</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
