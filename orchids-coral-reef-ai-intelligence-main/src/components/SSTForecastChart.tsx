"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { TrendingUp, Thermometer, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

interface RegionData {
  region: string;
  color: string;
  data: number[];
  trend?: string;
}

// Default data (fallback) - will be replaced with NOAA API data
const DEFAULT_REGIONS: RegionData[] = [
  { region: "Lakshadweep", color: "#22d3ee", data: [28.4, 28.5, 28.7, 28.9, 29.1, 29.3, 29.5, 29.7, 29.9, 30.1], trend: "+0.3°C" },
  { region: "Andaman", color: "#34d399", data: [28.9, 29.0, 29.2, 29.3, 29.5, 29.7, 29.9, 30.1, 30.3, 30.5], trend: "+0.4°C" },
  { region: "Gulf Mannar", color: "#facc15", data: [28.1, 28.2, 28.4, 28.6, 28.8, 29.0, 29.2, 29.4, 29.6, 29.8], trend: "+0.2°C" },
  { region: "Gulf Kutch", color: "#fb923c", data: [22.5, 22.8, 23.1, 23.4, 23.7, 24.0, 24.3, 24.6, 24.9, 25.2], trend: "+0.5°C" },
  { region: "Nicobar", color: "#f472b6", data: [28.7, 28.8, 29.0, 29.1, 29.3, 29.5, 29.7, 29.9, 30.1, 30.3], trend: "+0.3°C" },
];

const REGION_COLORS: Record<string, string> = {
  "Lakshadweep": "#22d3ee",
  "Andaman": "#34d399",
  "Gulf Mannar": "#facc15",
  "Gulf Kutch": "#fb923c",
  "Nicobar": "#f472b6",
};

export default function SSTForecastChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [regions, setRegions] = useState<RegionData[]>(DEFAULT_REGIONS);
  const [dataDate, setDataDate] = useState<string>("2026-02-05");

  // Fetch real NOAA data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/noaa-data");
        if (response.ok) {
          const data = await response.json();
          if (data.regions) {
            const mappedRegions: RegionData[] = data.regions.map((r: { region: string; forecast: number[]; trend: string }) => ({
              region: r.region,
              color: REGION_COLORS[r.region] || "#22d3ee",
              data: r.forecast,
              trend: r.trend,
            }));
            setRegions(mappedRegions);
            setDataDate(data.dataDate || "2026-02-05");
          }
        }
      } catch (error) {
        console.error("Failed to fetch NOAA data:", error);
        // Keep using default data
      }
    };
    fetchData();
  }, []);

  // Draw chart function
  const drawChart = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const padding = { top: 20, right: 50, bottom: 50, left: 20 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Clear canvas
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, width, height);

    // Find min/max values dynamically based on data
    const allValues = regions.flatMap(r => r.data);
    const minVal = Math.floor(Math.min(...allValues) - 2);
    const maxVal = Math.ceil(Math.max(...allValues) + 1);
    const range = maxVal - minVal;

    // Draw grid lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.lineWidth = 1;
    for (let i = 0; i <= 8; i++) {
      const y = padding.top + (chartHeight / 8) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(width - padding.right, y);
      ctx.stroke();
    }

    // Y-axis labels
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "right";
    for (let i = 0; i <= 8; i++) {
      const value = maxVal - (range / 8) * i;
      const y = padding.top + (chartHeight / 8) * i;
      ctx.fillText(value.toFixed(0), width - padding.right + 30, y + 4);
    }

    // Draw lines for each region
    regions.forEach((region) => {
      const isHovered = hoveredRegion === region.region || hoveredRegion === null;
      const alpha = isHovered ? 1 : 0.2;

      ctx.strokeStyle = region.color;
      ctx.lineWidth = 2.5;
      ctx.globalAlpha = alpha;
      ctx.beginPath();

      region.data.forEach((value, i) => {
        const x = padding.left + (chartWidth / (region.data.length - 1)) * i;
        const y = padding.top + chartHeight - ((value - minVal) / range) * chartHeight;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });

      ctx.stroke();

      // Draw points
      ctx.fillStyle = region.color;
      region.data.forEach((value, i) => {
        const x = padding.left + (chartWidth / (region.data.length - 1)) * i;
        const y = padding.top + chartHeight - ((value - minVal) / range) * chartHeight;

        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();

        // White border
        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.strokeStyle = region.color;
        ctx.lineWidth = 2.5;
      });

      ctx.globalAlpha = 1;
    });

    // X-axis label with data date
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.font = "12px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`10-DAY FORECAST FROM ${dataDate}`, width / 2, height - 10);

    setIsLoading(false);
  }, [hoveredRegion, regions, dataDate]);

  useEffect(() => {
    drawChart();
  }, [drawChart]);

  return (
    <div className="bg-slate-900 rounded-2xl p-6 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Thermometer className="w-5 h-5 text-cyan-400" />
          SST 10-Day Forecast
        </h3>
        <TrendingUp className="w-5 h-5 text-red-400" />
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-4 justify-center">
        {regions.map((region) => (
          <button
            key={region.region}
            onMouseEnter={() => setHoveredRegion(region.region)}
            onMouseLeave={() => setHoveredRegion(null)}
            className={cn(
              "flex items-center gap-2 px-3 py-1 rounded-full transition-all text-sm",
              hoveredRegion === region.region ? "opacity-100" : "opacity-80 hover:opacity-100"
            )}
          >
            <span
              className="w-4 h-1 rounded-full"
              style={{ backgroundColor: region.color }}
            />
            <span
              className="w-2 h-2 rounded-full border-2 border-white"
              style={{ backgroundColor: region.color }}
            />
            <span className="text-white font-medium">{region.region}</span>
            {region.trend && (
              <span className="text-xs text-cyan-400">{region.trend}</span>
            )}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="relative w-full h-[300px]">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <RefreshCw className="w-8 h-8 animate-spin text-cyan-400" />
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ display: "block" }}
        />
      </div>

      {/* Y-axis title */}
      <div className="flex justify-end mt-2">
        <span className="text-gray-400 text-sm">SST (°C)</span>
      </div>
    </div>
  );
}
