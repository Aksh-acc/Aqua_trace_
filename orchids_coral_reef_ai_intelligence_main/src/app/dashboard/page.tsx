"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  Camera,
  MapPin,
  Thermometer,
  AlertTriangle,
  TrendingUp,
  Fish,
  Waves,
  ArrowLeft,
  RefreshCw,
  Heart,
  Clock,
} from "lucide-react";
import SSTForecastChart from "@/components/SSTForecastChart";
import { cn } from "@/lib/utils";

// Dynamically import the map component to avoid SSR issues
const CoralHeatMap = dynamic(() => import("@/components/CoralHeatMap"), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-slate-900 rounded-2xl animate-pulse" />,
});

interface NOAAStats {
  avgSST: number;
  regionsAtRisk: number;
  healthyPercentage: number;
  activeNurseries: number;
}

export default function DashboardPage() {
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [stats, setStats] = useState<NOAAStats>({
    avgSST: 27.3,
    regionsAtRisk: 2,
    healthyPercentage: 100,
    activeNurseries: 5,
  });

  // Fetch NOAA stats data
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/api/noaa-data");
        if (response.ok) {
          const data = await response.json();
          if (data.stats) {
            setStats(data.stats);
            setLastUpdated(new Date(data.lastUpdated || Date.now()));
          }
        }
      } catch (error) {
        console.error("Failed to fetch NOAA stats:", error);
      }
    };
    fetchStats();
  }, []);

  const quickStats = [
    {
      label: "Avg SST",
      value: `${stats.avgSST}°C`,
      change: "+0.3°C",
      trend: "up" as const,
      icon: Thermometer,
      color: "text-cyan-400",
    },
    {
      label: "Regions at Risk",
      value: stats.regionsAtRisk,
      change: stats.regionsAtRisk > 0 ? "Watch" : "Clear",
      trend: stats.regionsAtRisk > 0 ? "neutral" as const : "down" as const,
      icon: AlertTriangle,
      color: stats.regionsAtRisk > 0 ? "text-yellow-400" : "text-green-400",
    },
    {
      label: "Healthy Corals",
      value: `${stats.healthyPercentage}%`,
      change: stats.healthyPercentage >= 80 ? "Good" : "-5%",
      trend: stats.healthyPercentage >= 80 ? "up" as const : "down" as const,
      icon: Heart,
      color: stats.healthyPercentage >= 80 ? "text-green-400" : "text-yellow-400",
    },
    {
      label: "Active Nurseries",
      value: stats.activeNurseries,
      change: "Online",
      trend: "neutral" as const,
      icon: MapPin,
      color: "text-primary",
    },
  ];

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const response = await fetch("/api/noaa-data");
      if (response.ok) {
        const data = await response.json();
        if (data.stats) {
          setStats(data.stats);
          setLastUpdated(new Date());
        }
      }
    } catch (error) {
      console.error("Failed to refresh data:", error);
    }
    setIsRefreshing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 pt-20">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="hidden sm:inline">Back</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <h1 className="text-xl font-bold flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                <span className="hidden sm:inline">Coral Reef</span> Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>
                  Updated:{" "}
                  {lastUpdated.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <button
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="p-2 hover:bg-primary/10 rounded-full transition-colors disabled:opacity-50"
              >
                <RefreshCw
                  className={cn("w-5 h-5", isRefreshing && "animate-spin")}
                />
              </button>
              <Link
                href="/ar-view"
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                <Camera className="w-4 h-4" />
                <span className="hidden sm:inline">AR Scan</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 space-y-8">
        {/* Quick Stats */}
        <section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold mt-1">{stat.value}</p>
                    {stat.change && (
                      <p
                        className={cn(
                          "text-sm mt-1 flex items-center gap-1",
                          stat.trend === "up" && "text-red-400",
                          stat.trend === "down" && "text-green-400",
                          stat.trend === "neutral" && "text-muted-foreground"
                        )}
                      >
                        {stat.trend === "up" && (
                          <TrendingUp className="w-3 h-3" />
                        )}
                        {stat.change}
                      </p>
                    )}
                  </div>
                  <div
                    className={cn(
                      "p-3 rounded-xl bg-background/50",
                      stat.color
                    )}
                  >
                    <stat.icon className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Coral Heatmap */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <MapPin className="w-6 h-6 text-cyan-400" />
              Coral Reef Monitoring Map
            </h2>
            <p className="text-muted-foreground mt-1">
              Interactive heatmap visualization of sea surface temperature, thermal stress, and bleaching alerts
            </p>
          </div>
          <CoralHeatMap />
        </motion.section>

        {/* SST Forecast Chart */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Thermometer className="w-6 h-6 text-cyan-400" />
              10-Day SST Forecast
            </h2>
            <p className="text-muted-foreground mt-1">
              Sea surface temperature predictions for major Indian coral regions
            </p>
          </div>
          <SSTForecastChart />
        </motion.section>
        {/* Quick Actions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Fish className="w-5 h-5 text-primary" />
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/ar-view"
              className="glass rounded-2xl p-6 hover:bg-primary/5 transition-colors group"
            >
              <Camera className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-1">AR Detection</h3>
              <p className="text-sm text-muted-foreground">
                Scan corals with your camera for real-time health analysis
              </p>
            </Link>

            <Link
              href="/leaderboard"
              className="glass rounded-2xl p-6 hover:bg-primary/5 transition-colors group"
            >
              <TrendingUp className="w-8 h-8 text-green-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-1">Leaderboard</h3>
              <p className="text-sm text-muted-foreground">
                View top contributors and conservation efforts
              </p>
            </Link>

            <Link
              href="/agent"
              className="glass rounded-2xl p-6 hover:bg-primary/5 transition-colors group"
            >
              <Waves className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-1">AI Assistant</h3>
              <p className="text-sm text-muted-foreground">
                Ask questions about coral health and conservation
              </p>
            </Link>

            <div className="glass rounded-2xl p-6 opacity-60 cursor-not-allowed">
              <AlertTriangle className="w-8 h-8 text-yellow-400 mb-3" />
              <h3 className="font-bold mb-1">Report Issue</h3>
              <p className="text-sm text-muted-foreground">
                Report bleaching events or environmental concerns
              </p>
              <span className="text-xs text-primary mt-2 inline-block">
                Coming Soon
              </span>
            </div>
          </div>
        </motion.section>

        {/* Alert Banner */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className={cn(
            "glass rounded-2xl p-4 border-l-4",
            stats.regionsAtRisk > 0 
              ? "border-yellow-400 bg-yellow-400/5" 
              : "border-green-400 bg-green-400/5"
          )}>
            <div className="flex items-start gap-4">
              {stats.regionsAtRisk > 0 ? (
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
              ) : (
                <Heart className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              )}
              <div>
                <h3 className={cn(
                  "font-bold",
                  stats.regionsAtRisk > 0 ? "text-yellow-400" : "text-green-400"
                )}>
                  {stats.regionsAtRisk > 0 ? "Watch Advisory" : "Current Status: Stable"}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {stats.regionsAtRisk > 0 ? (
                    <>
                      Slightly elevated SST anomalies detected in Lakshadweep (+0.35°C) and
                      Nicobar (+0.31°C) regions. DHW remains at 0 - no thermal stress currently.
                      SST forecast shows gradual warming trend over the next 10 days.
                    </>
                  ) : (
                    <>
                      All coral reef regions are showing healthy conditions. Degree Heating Week (DHW)
                      values are at 0 across all monitored regions. SST anomalies are within normal
                      range. Data sourced from NOAA Coral Reef Watch (Feb 2026).
                    </>
                  )}
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <Link
                    href="/ar-view"
                    className="text-sm text-primary hover:underline"
                  >
                    Start monitoring →
                  </Link>
                  <span className="text-xs text-muted-foreground">
                    Last updated: {lastUpdated.toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
