"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Thermometer, AlertTriangle, Activity, Waves, RefreshCw, Phone, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Nursery {
  id: number;
  name: string;
  lat: number;
  lon: number;
  region: string;
  phone: string;
  type: string;
}

type MapLayer = "sst" | "dhw" | "anomaly" | "hotspot" | "alert";

interface LayerConfig {
  name: string;
  title: string;
  icon: typeof Thermometer;
  gradient: string[];
  labels: string[];
  description: string;
}

const LAYER_CONFIG: Record<MapLayer, LayerConfig> = {
  sst: {
    name: "Sea Surface Temp (°C)",
    title: "Sea Surface Temperature",
    icon: Thermometer,
    gradient: ["#00d4ff", "#92fe9d", "#ff6b35"],
    labels: ["Cool (<26°C)", "Optimal (27-28°C)", "High (>30°C)"],
    description: "Current sea surface temperature readings from NOAA",
  },
  dhw: {
    name: "Degree Heating Week",
    title: "Degree Heating Week (DHW)",
    icon: Activity,
    gradient: ["#0088ff", "#ffa500", "#ff4500"],
    labels: ["No Stress (0)", "Watch (1-4)", "Bleaching (>4)"],
    description: "Accumulated thermal stress - currently stable",
  },
  anomaly: {
    name: "SST Anomaly (°C)",
    title: "SST Anomaly",
    icon: Waves,
    gradient: ["#0000ff", "#00ffff", "#ffcc00", "#ff0000"],
    labels: ["Below Avg (<0)", "Normal (0)", "Elevated (0.2-0.5)", "High (>0.5)"],
    description: "Deviation from monthly mean temperature",
  },
  hotspot: {
    name: "Hotspots (°C)",
    title: "Coral Hotspots",
    icon: AlertTriangle,
    gradient: ["#808080", "#ffd700"],
    labels: ["Below Threshold", "Elevated"],
    description: "Areas exceeding bleaching threshold (currently none)",
  },
  alert: {
    name: "Bleaching Alert Area",
    title: "Bleaching Alert Level",
    icon: AlertTriangle,
    gradient: ["#00ff00", "#ffd700", "#ff4500"],
    labels: ["No Stress", "Watch", "Warning"],
    description: "NOAA Coral Reef Watch alert levels",
  },
};

const NURSERY_DATA: Nursery[] = [
  { id: 1, name: "Wildlife Trust of India", lat: 10.5651, lon: 72.6417, region: "Lakshadweep", phone: "+91 11 4606 4222", type: "nursery" },
  { id: 2, name: "ReefWatch Marine", lat: 11.9836, lon: 92.9845, region: "Andaman", phone: "+91 95318 97011", type: "nursery" },
  { id: 3, name: "SDMRI Research Institute", lat: 8.8105, lon: 78.1633, region: "Gulf of Mannar", phone: "+91 461 232 3441", type: "research" },
  { id: 4, name: "Marine National Park", lat: 22.4674, lon: 69.6083, region: "Gulf of Kutch", phone: "+91 288 267 9355", type: "protected" },
  { id: 5, name: "Coastal Impact", lat: 15.3524, lon: 73.7661, region: "Goa", phone: "+91 98191 54033", type: "nursery" },
];

// Default heatmap data based on NOAA JSON files (Feb 2026)
// Will be replaced with API data when available
const DEFAULT_HEATMAP_DATA: Record<MapLayer, [number, number, number][]> = {
  sst: [
    // Lakshadweep region - SST ~28.4°C (normalized 0.73)
    [10.5, 72.5, 0.73], [11.0, 72.8, 0.72], [10.8, 72.3, 0.73], [9.5, 72.0, 0.71],
    [12.0, 73.0, 0.74], [11.5, 72.5, 0.72], [10.0, 71.5, 0.70],
    // Gulf of Mannar - SST ~28.1°C
    [9.0, 79.0, 0.70], [9.5, 79.5, 0.69], [8.5, 78.5, 0.68], [10.0, 80.0, 0.70],
    // Andaman - SST ~28.9°C (elevated)
    [12.0, 93.0, 0.78], [11.5, 92.5, 0.77], [13.0, 93.5, 0.79], [10.5, 92.2, 0.76],
    [14.0, 93.8, 0.80], [11.0, 93.0, 0.77],
    // Nicobar - SST ~28.7°C
    [7.5, 93.0, 0.76], [8.0, 93.5, 0.75], [7.0, 92.5, 0.74], [8.5, 94.0, 0.77],
    // Gulf of Kutch - SST ~22.5°C (cooler)
    [22.5, 69.0, 0.35], [23.0, 69.5, 0.33], [22.8, 68.5, 0.34], [23.5, 70.0, 0.32],
  ],
  dhw: [
    // All regions showing DHW = 0 (no thermal stress per NOAA data)
    [10.5, 72.5, 0.02], [12.0, 93.0, 0.02], [9.0, 79.0, 0.02],
    [7.5, 93.0, 0.02], [22.5, 69.0, 0.01],
    [11.0, 72.8, 0.02], [11.5, 92.5, 0.02], [9.5, 79.5, 0.02],
  ],
  anomaly: [
    // Lakshadweep - anomaly +0.35°C (slightly elevated)
    [10.5, 72.5, 0.55], [11.0, 72.8, 0.53], [10.8, 72.3, 0.54], [9.5, 72.0, 0.52],
    // Gulf of Mannar - anomaly +0.22°C (near normal)
    [9.0, 79.0, 0.48], [9.5, 79.5, 0.45], [8.5, 78.5, 0.46],
    // Andaman - anomaly +0.28°C (slightly elevated)
    [12.0, 93.0, 0.52], [11.5, 92.5, 0.50], [13.0, 93.5, 0.54],
    // Nicobar - anomaly +0.31°C (slightly elevated)
    [7.5, 93.0, 0.53], [8.0, 93.5, 0.51], [7.0, 92.5, 0.52],
    // Gulf of Kutch - anomaly -0.15°C (below normal)
    [22.5, 69.0, 0.35], [23.0, 69.5, 0.33], [22.8, 68.5, 0.34],
  ],
  hotspot: [
    // All regions below bleaching threshold (negative hotspot values)
    [10.5, 72.5, 0.12], [12.0, 93.0, 0.15], [9.0, 79.0, 0.10],
    [7.5, 93.0, 0.12], [22.5, 69.0, 0.05],
    [11.0, 72.8, 0.11], [11.5, 92.5, 0.14], [9.5, 79.5, 0.09],
  ],
  alert: [
    // No active bleaching alerts (DHW < 1 throughout)
    [12.0, 93.0, 0.08], [10.5, 72.5, 0.08], [7.5, 93.0, 0.08],
    [9.0, 79.0, 0.05], [22.5, 69.0, 0.03],
  ],
};

export default function CoralHeatMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const heatLayerRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  
  const [currentLayer, setCurrentLayer] = useState<MapLayer>("sst");
  const [selectedNursery, setSelectedNursery] = useState<Nursery | null>(null);
  const [isMapReady, setIsMapReady] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [heatmapData, setHeatmapData] = useState<Record<MapLayer, [number, number, number][]>>(DEFAULT_HEATMAP_DATA);
  const [dataInfo, setDataInfo] = useState({ source: "NOAA Coral Reef Watch", date: "2026-02-05" });

  const layers: MapLayer[] = ["sst", "dhw", "anomaly", "hotspot", "alert"];
  const currentIndex = layers.indexOf(currentLayer);

  const nextLayer = () => {
    const next = (currentIndex + 1) % layers.length;
    setCurrentLayer(layers[next]);
  };

  const prevLayer = () => {
    const prev = (currentIndex - 1 + layers.length) % layers.length;
    setCurrentLayer(layers[prev]);
  };

  // Fetch heatmap data from NOAA API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/noaa-data");
        if (response.ok) {
          const data = await response.json();
          if (data.heatmap) {
            setHeatmapData(data.heatmap as Record<MapLayer, [number, number, number][]>);
            setDataInfo({
              source: data.dataSource || "NOAA Coral Reef Watch",
              date: data.dataDate || "2026-02-05",
            });
          }
        }
      } catch (error) {
        console.error("Failed to fetch NOAA heatmap data:", error);
        // Keep using default data
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current || mapInstanceRef.current) return;

    const initMap = async () => {
      try {
        const L = (await import("leaflet")).default;
        await import("leaflet/dist/leaflet.css");
        
        const heat = await import("leaflet.heat");

        const map = L.map(mapRef.current!, {
          center: [15, 80],
          zoom: 4,
          zoomControl: true,
          attributionControl: true,
        });

        L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
          subdomains: "abcd",
          maxZoom: 19,
        }).addTo(map);

        mapInstanceRef.current = map;
        setIsMapReady(true);
        setIsLoading(false);
      } catch (error) {
        console.error("Error initializing map:", error);
        setIsLoading(false);
      }
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!isMapReady || !mapInstanceRef.current) return;

    const updateHeatmap = async () => {
      try {
        const L = (await import("leaflet")).default;
        const map = mapInstanceRef.current;

        if (heatLayerRef.current) {
          map.removeLayer(heatLayerRef.current);
        }

        const config = LAYER_CONFIG[currentLayer];
        const data = heatmapData[currentLayer];

        let gradient: Record<number, string> = {};
        
        if (currentLayer === "sst") {
          gradient = { 0.0: "#00d4ff", 0.3: "#00d4ff", 0.5: "#92fe9d", 0.7: "#ffcc00", 0.85: "#ff6b35", 1.0: "#ff4500" };
        } else if (currentLayer === "dhw") {
          gradient = { 0.0: "#00cc00", 0.2: "#66ff66", 0.4: "#ffff00", 0.6: "#ff9900", 0.8: "#ff3300", 1.0: "#cc0000" };
        } else if (currentLayer === "anomaly") {
          gradient = { 0.0: "#0066ff", 0.3: "#00ccff", 0.5: "#ffff66", 0.7: "#ff9900", 1.0: "#ff3300" };
        } else if (currentLayer === "hotspot") {
          gradient = { 0.0: "#333333", 0.3: "#666666", 0.5: "#999900", 0.7: "#cccc00", 1.0: "#ffcc00" };
        } else if (currentLayer === "alert") {
          gradient = { 0.0: "#00cc00", 0.3: "#66ff66", 0.5: "#ffff00", 0.7: "#ff9900", 1.0: "#ff3300" };
        }

        const heatLayer = (L as any).heatLayer(data, {
          radius: 80,
          blur: 60,
          maxZoom: 10,
          max: 1.0,
          minOpacity: 0.6,
          gradient,
        });

        heatLayer.addTo(map);
        heatLayerRef.current = heatLayer;
      } catch (error) {
        console.error("Error updating heatmap:", error);
      }
    };

    updateHeatmap();
  }, [currentLayer, isMapReady, heatmapData]);

  useEffect(() => {
    if (!isMapReady || !mapInstanceRef.current) return;

    const updateMarkers = async () => {
      try {
        const L = (await import("leaflet")).default;
        const map = mapInstanceRef.current;

        markersRef.current.forEach((marker) => map.removeLayer(marker));
        markersRef.current = [];

        const createIcon = () => {
          return L.divIcon({
            className: "custom-marker",
            html: `
              <div style="
                width: 20px;
                height: 20px;
                background: #00ffff;
                border: 3px solid white;
                border-radius: 50%;
                box-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
              "></div>
            `,
            iconSize: [20, 20],
            iconAnchor: [10, 10],
          });
        };

        NURSERY_DATA.forEach((nursery) => {
          const marker = L.marker([nursery.lat, nursery.lon], {
            icon: createIcon(),
          });

          marker.on("click", () => {
            setSelectedNursery(nursery);
          });

          marker.addTo(map);
          markersRef.current.push(marker);
        });
      } catch (error) {
        console.error("Error updating markers:", error);
      }
    };

    updateMarkers();
  }, [isMapReady]);

  const config = LAYER_CONFIG[currentLayer];
  const Icon = config.icon;

  return (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-slate-900">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-50">
          <RefreshCw className="w-8 h-8 animate-spin text-cyan-400" />
        </div>
      )}

      <div ref={mapRef} className="w-full h-full" />

      <div className="absolute top-4 left-4 z-[1000] flex flex-col gap-1">
        <button
          onClick={() => mapInstanceRef.current?.zoomIn()}
          className="w-8 h-8 bg-white text-black flex items-center justify-center text-xl font-bold hover:bg-gray-100"
        >
          +
        </button>
        <button
          onClick={() => mapInstanceRef.current?.zoomOut()}
          className="w-8 h-8 bg-white text-black flex items-center justify-center text-xl font-bold hover:bg-gray-100"
        >
          −
        </button>
      </div>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-2">
        <button
          onClick={prevLayer}
          className="p-2 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <div className="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full">
          <span className="text-white font-medium flex items-center gap-2">
            <Icon className="w-4 h-4 text-cyan-400" />
            {config.title}
          </span>
        </div>
        <button
          onClick={nextLayer}
          className="p-2 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-2">
        {layers.map((layer, i) => (
          <button
            key={layer}
            onClick={() => setCurrentLayer(layer)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentLayer === layer ? "bg-cyan-400 w-4" : "bg-white/40 hover:bg-white/60"
            )}
          />
        ))}
      </div>

      <div className="absolute bottom-6 right-6 z-[1000] bg-black/70 backdrop-blur-sm rounded-xl p-4 min-w-[200px]">
        <h4 className="text-cyan-400 font-bold mb-3">{config.name}</h4>
        <div className="space-y-2">
          {config.labels.map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className="w-8 h-3 rounded"
                style={{
                  background: config.gradient.length === 2
                    ? config.gradient[i]
                    : config.gradient[Math.min(i, config.gradient.length - 1)],
                }}
              />
              <span className="text-white text-sm">{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-white/20">
          <p className="text-gray-400 text-xs">{dataInfo.source}</p>
          <p className="text-gray-500 text-xs">Data: {dataInfo.date}</p>
        </div>
      </div>

      <AnimatePresence>
        {selectedNursery && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001] bg-white rounded-xl p-4 shadow-2xl min-w-[280px]"
          >
            <button
              onClick={() => setSelectedNursery(null)}
              className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
            <h3 className="text-cyan-600 font-bold text-lg pr-6">{selectedNursery.name}</h3>
            <div className="mt-2 space-y-1 text-sm">
              <p className="text-gray-700">
                <span className="font-semibold">Region:</span> {selectedNursery.region}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Contact:</span>{" "}
                <a href={`tel:${selectedNursery.phone}`} className="text-cyan-600 hover:underline">
                  {selectedNursery.phone}
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
