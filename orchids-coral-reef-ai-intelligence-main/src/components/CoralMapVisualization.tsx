"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Thermometer, AlertTriangle, Activity, Waves, RefreshCw, Phone, Building, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Nursery { id: number; name: string; lat: number; lon: number; region: string; phone: string; type: string; status: string; }
interface EnvironmentalData { region: string; sst: number; dhw: number; anomaly: number; hotspot: number; alertLevel: number; lastUpdated: string; }
interface CoralData { nurseries: Nursery[]; environmental: EnvironmentalData[]; lastUpdated: string; }
type MetricType = "sst" | "dhw" | "anomaly" | "hotspot" | "alert";

const METRIC_CONFIG = {
  sst: { label: "Sea Surface Temperature", unit: "°C", icon: Thermometer, gradient: ["#00d2ff", "#92fe9d", "#ff512f"], description: "Current sea surface temperature" },
  dhw: { label: "Degree Heating Week", unit: "°C-weeks", icon: Activity, gradient: ["#0000ff", "#00ffff", "#ffcc00", "#ff0000"], description: "Accumulated heat stress" },
  anomaly: { label: "SST Anomaly", unit: "°C", icon: Waves, gradient: ["#0000ff", "#00ffff", "#ffcc00", "#ff0000"], description: "Deviation from average" },
  hotspot: { label: "Coral Hotspot", unit: "°C", icon: AlertTriangle, gradient: ["#fceabb", "#f8b500"], description: "SST exceeds monthly mean" },
  alert: { label: "Bleaching Alert", unit: "Level", icon: AlertTriangle, gradient: ["#22c55e", "#facc15", "#ef4444", "#9333ea"], description: "NOAA alert level" },
};

export default function CoralMapVisualization() {
  const [data, setData] = useState<CoralData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedMetric, setSelectedMetric] = useState<MetricType>("sst");
  const [selectedNursery, setSelectedNursery] = useState<Nursery | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => { fetchData(); }, []);
  const fetchData = async () => { setLoading(true); try { const res = await fetch("/api/coral-data"); setData(await res.json()); } catch (e) { console.error(e); } finally { setLoading(false); } };

  const getMetricValue = (env: EnvironmentalData, m: MetricType) => m === "sst" ? env.sst : m === "dhw" ? env.dhw : m === "anomaly" ? env.anomaly : m === "hotspot" ? env.hotspot : env.alertLevel;
  const getMetricColor = (v: number, m: MetricType) => { if (m === "sst") return v < 26 ? "#00d2ff" : v < 28 ? "#92fe9d" : v < 29 ? "#facc15" : "#ff512f"; if (m === "dhw") return v < 1 ? "#22c55e" : v < 4 ? "#facc15" : v < 8 ? "#f97316" : "#ef4444"; if (m === "anomaly") return v < 0 ? "#0000ff" : v < 1 ? "#00ffff" : v < 2 ? "#ffcc00" : "#ff0000"; if (m === "hotspot") return v < 0.5 ? "#fceabb" : "#f8b500"; return v === 0 ? "#22c55e" : v === 1 ? "#facc15" : "#9333ea"; };
  const getAlertLabel = (l: number) => l === 0 ? "No Stress" : l === 1 ? "Watch" : l === 2 ? "Alert Level 1" : "Alert Level 2";

  if (loading) return <div className="glass rounded-3xl p-6 h-[500px] flex items-center justify-center"><RefreshCw className="w-8 h-8 animate-spin text-primary" /></div>;
  if (!data) return <div className="glass rounded-3xl p-6 h-[500px] flex items-center justify-center"><p className="text-muted-foreground">Failed to load</p></div>;

  const config = METRIC_CONFIG[selectedMetric]; const Icon = config.icon;

  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div><h3 className="text-xl font-bold flex items-center gap-2"><MapPin className="w-5 h-5 text-primary" />Coral Monitoring Map</h3><p className="text-sm text-muted-foreground mt-1">Real-time environmental data</p></div>
        <div className="relative">
          <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors"><Icon className="w-4 h-4 text-primary" /><span className="font-medium">{config.label}</span><ChevronDown className={cn("w-4 h-4 transition-transform", isDropdownOpen && "rotate-180")} /></button>
          <AnimatePresence>{isDropdownOpen && (<motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute right-0 top-full mt-2 w-64 bg-background border border-border rounded-xl shadow-xl z-50 overflow-hidden">{(Object.keys(METRIC_CONFIG) as MetricType[]).map((k) => { const c = METRIC_CONFIG[k]; const I = c.icon; return (<button key={k} onClick={() => { setSelectedMetric(k); setIsDropdownOpen(false); }} className={cn("w-full flex items-start gap-3 p-3 hover:bg-primary/10 transition-colors text-left", selectedMetric === k && "bg-primary/10")}><I className="w-5 h-5 text-primary mt-0.5" /><div><div className="font-medium">{c.label}</div><div className="text-xs text-muted-foreground">{c.description}</div></div></button>); })}</motion.div>)}</AnimatePresence>
        </div>
      </div>
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden h-[300px]">
        {data.environmental.map((env) => { const n = data.nurseries.find((x) => x.region === env.region); if (!n) return null; const x = ((n.lon - 68) / (95 - 68)) * 100, y = ((24 - n.lat) / (24 - 6)) * 100, v = getMetricValue(env, selectedMetric), c = getMetricColor(v, selectedMetric); return (
          <motion.div key={env.region} className="absolute cursor-pointer" style={{ left: `${x}%`, top: `${y}%` }} initial={{ scale: 0 }} animate={{ scale: 1 }} whileHover={{ scale: 1.2 }} onClick={() => setSelectedNursery(n)}>
            <div className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse" style={{ background: `radial-gradient(circle, ${c}40 0%, transparent 70%)` }} />
            <div className="relative w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center border-2 border-white shadow-lg" style={{ backgroundColor: c }}><span className="text-xs font-bold text-white">{selectedMetric === "alert" ? env.alertLevel : v.toFixed(1)}</span></div>
            <div className="absolute top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-white bg-black/50 px-2 py-1 rounded">{env.region}</div>
          </motion.div>
        ); })}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-4"><span className="text-sm text-muted-foreground">Legend:</span><div className="flex items-center gap-2"><div className="w-24 h-3 rounded-full" style={{ background: `linear-gradient(90deg, ${config.gradient.join(", ")})` }} /><span className="text-xs text-muted-foreground">Low → High ({config.unit})</span></div></div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.environmental.map((env) => { const n = data.nurseries.find((x) => x.region === env.region), v = getMetricValue(env, selectedMetric), c = getMetricColor(v, selectedMetric); return (
          <motion.div key={env.region} whileHover={{ scale: 1.02 }} className="p-4 bg-background/50 rounded-xl border border-border/50 cursor-pointer" onClick={() => n && setSelectedNursery(n)}>
            <div className="flex items-start justify-between mb-3"><div><h4 className="font-bold">{env.region}</h4>{n && <p className="text-xs text-muted-foreground flex items-center gap-1"><Building className="w-3 h-3" />{n.name}</p>}</div><div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${c}30` }}><span className="font-bold" style={{ color: c }}>{selectedMetric === "alert" ? env.alertLevel : v.toFixed(1)}</span></div></div>
            <div className="grid grid-cols-2 gap-2 text-xs"><div className="flex items-center gap-1"><Thermometer className="w-3 h-3 text-cyan-400" /><span className="text-muted-foreground">SST:</span><span className="font-medium">{env.sst}°C</span></div><div className="flex items-center gap-1"><Activity className="w-3 h-3 text-orange-400" /><span className="text-muted-foreground">DHW:</span><span className="font-medium">{env.dhw}</span></div><div className="flex items-center gap-1"><Waves className="w-3 h-3 text-blue-400" /><span className="text-muted-foreground">Anomaly:</span><span className="font-medium">{env.anomaly > 0 ? "+" : ""}{env.anomaly}°C</span></div><div className="flex items-center gap-1"><AlertTriangle className="w-3 h-3 text-yellow-400" /><span className="text-muted-foreground">Alert:</span><span className="font-medium">{getAlertLabel(env.alertLevel)}</span></div></div>
          </motion.div>
        ); })}
      </div>
      <AnimatePresence>{selectedNursery && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedNursery(null)}><motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-background rounded-3xl p-6 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}><div className="flex items-start gap-4 mb-4"><div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center"><MapPin className="w-6 h-6 text-primary" /></div><div><h3 className="text-xl font-bold">{selectedNursery.name}</h3><p className="text-muted-foreground">{selectedNursery.region}</p></div></div><div className="space-y-3"><div className="flex items-center gap-3 p-3 bg-muted rounded-xl"><Building className="w-5 h-5 text-muted-foreground" /><div><div className="text-sm text-muted-foreground">Type</div><div className="font-medium capitalize">{selectedNursery.type}</div></div></div><div className="flex items-center gap-3 p-3 bg-muted rounded-xl"><MapPin className="w-5 h-5 text-muted-foreground" /><div><div className="text-sm text-muted-foreground">Coordinates</div><div className="font-medium">{selectedNursery.lat.toFixed(4)}°N, {selectedNursery.lon.toFixed(4)}°E</div></div></div><a href={`tel:${selectedNursery.phone}`} className="flex items-center gap-3 p-3 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors"><Phone className="w-5 h-5 text-primary" /><div><div className="text-sm text-muted-foreground">Contact</div><div className="font-medium text-primary">{selectedNursery.phone}</div></div></a></div><button onClick={() => setSelectedNursery(null)} className="w-full mt-4 py-3 bg-muted rounded-xl font-medium hover:bg-muted/80 transition-colors">Close</button></motion.div></motion.div>)}</AnimatePresence>
    </div>
  );
}
