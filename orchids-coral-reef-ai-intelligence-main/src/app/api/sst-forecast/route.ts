import { NextResponse } from "next/server";

const CORAL_THRESHOLDS = {
  Lakshadweep: { normal: 27.5, watch: 28.0, alert: 28.5, bleaching: 29.0 },
  Andaman: { normal: 27.5, watch: 28.0, alert: 28.5, bleaching: 29.0 },
  "Gulf of Mannar": { normal: 27.0, watch: 27.5, alert: 28.0, bleaching: 28.5 },
  "Gulf of Kutch": { normal: 26.0, watch: 27.0, alert: 28.0, bleaching: 29.0 },
  Goa: { normal: 27.0, watch: 27.5, alert: 28.0, bleaching: 28.5 },
};

function classifyRisk(region: string, sst: number): string {
  const t = CORAL_THRESHOLDS[region as keyof typeof CORAL_THRESHOLDS];
  if (!t) return "Unknown";
  if (sst < t.normal) return "Normal";
  if (sst < t.watch) return "Watch";
  if (sst < t.alert) return "Alert";
  return "High Bleaching Stress";
}

function generateForecastData() {
  const now = new Date();
  const regions: Record<string, number[]> = {
    Lakshadweep: [28.5, 28.7, 28.9, 29.2, 29.5, 29.8, 30.1, 30.3, 30.5, 30.7, 31.0],
    Andaman: [29.0, 29.1, 29.3, 29.2, 29.5, 29.7, 29.9, 30.0, 30.2, 30.4, 30.6],
    "Gulf of Mannar": [27.8, 28.0, 28.2, 28.5, 28.7, 29.0, 29.2, 29.5, 29.8, 30.0, 30.2],
    "Gulf of Kutch": [25.5, 25.8, 26.1, 26.4, 26.8, 27.2, 27.5, 27.9, 28.2, 28.5, 28.8],
    Goa: [28.2, 28.4, 28.5, 28.7, 28.9, 29.1, 29.3, 29.5, 29.7, 29.9, 30.1],
  };
  const CORAL_REGIONS = {
    Lakshadweep: { lat: 10.5651, lon: 72.6417 },
    Andaman: { lat: 11.9836, lon: 92.9845 },
    "Gulf of Mannar": { lat: 8.8105, lon: 78.1633 },
    "Gulf of Kutch": { lat: 22.4674, lon: 69.6083 },
    Goa: { lat: 15.3524, lon: 73.7661 },
  };
  const dates = Array.from({ length: 11 }, (_, i) => {
    const date = new Date(now);
    date.setDate(date.getDate() + i);
    return date.toISOString().split("T")[0];
  });
  const forecasts = Object.entries(regions).map(([region, temps]) => ({
    region,
    coordinates: CORAL_REGIONS[region as keyof typeof CORAL_REGIONS],
    forecast: dates.map((date, i) => ({ date, sst: temps[i], risk: classifyRisk(region, temps[i]) })),
    currentSST: temps[0],
    maxSST: Math.max(...temps),
    trend: temps[temps.length - 1] > temps[0] ? "increasing" : "decreasing",
  }));
  return { dates, forecasts };
}

export async function GET() {
  try {
    const data = generateForecastData();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Failed to fetch forecast data" }, { status: 500 });
  }
}
