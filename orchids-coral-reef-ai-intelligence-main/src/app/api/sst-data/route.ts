import { NextRequest, NextResponse } from "next/server";

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY || "";

export async function POST(request: NextRequest) {
  try {
    const { latitude, longitude } = await request.json();

    if (latitude === undefined || longitude === undefined) {
      return NextResponse.json(
        { error: "Latitude and longitude are required" },
        { status: 400 }
      );
    }

    // Try to fetch real SST data from RapidAPI
    if (RAPIDAPI_KEY) {
      try {
        const response = await fetch(
          `https://sea-surface-temperature.p.rapidapi.com/current?lat=${latitude}&lon=${longitude}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": RAPIDAPI_KEY,
              "X-RapidAPI-Host": "sea-surface-temperature.p.rapidapi.com",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          return NextResponse.json({
            location: { lat: latitude, lon: longitude },
            sst_celsius: data.sst || data.temperature || data.sst_celsius,
            dhw: data.dhw || data.degree_heating_weeks || null,
            anomaly: data.anomaly || data.sst_anomaly || null,
            status: data.status || determineStatus(data.sst || data.temperature, data.dhw),
            source: "rapidapi",
          });
        }
      } catch (apiError) {
        console.error("RapidAPI SST fetch error:", apiError);
      }
    }

    // Fallback: Generate realistic simulated SST data based on location
    const simulatedData = generateSimulatedSSTData(latitude, longitude);
    
    return NextResponse.json({
      ...simulatedData,
      source: "simulated",
    });
  } catch (error) {
    console.error("SST API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch SST data" },
      { status: 500 }
    );
  }
}

function determineStatus(sst: number | null, dhw: number | null): string {
  if (!sst) return "Unknown";
  
  if (dhw !== null) {
    if (dhw >= 8) return "Alert Level 2: Severe bleaching likely";
    if (dhw >= 4) return "Alert Level 1: Significant bleaching likely";
    if (dhw >= 1) return "Watch: Bleaching possible";
  }
  
  if (sst >= 30) return "Critical: Extreme thermal stress";
  if (sst >= 29) return "Warning: Thermal stress detected";
  if (sst >= 28) return "Caution: Elevated temperatures";
  return "Normal: Temperature within safe range";
}

function generateSimulatedSSTData(latitude: number, longitude: number) {
  // Generate realistic SST based on latitude (tropical regions are warmer)
  const absLat = Math.abs(latitude);
  
  // Base temperature varies by latitude
  let baseSst = 28;
  if (absLat < 10) baseSst = 29; // Equatorial
  else if (absLat < 20) baseSst = 28; // Tropical
  else if (absLat < 30) baseSst = 26; // Subtropical
  else baseSst = 24; // Temperate
  
  // Add some randomness
  const sst = baseSst + (Math.random() * 2 - 0.5);
  
  // Calculate DHW (Degree Heating Weeks) based on SST anomaly
  const climatology = baseSst - 1; // Assume climatology is 1°C below current
  const anomaly = sst - climatology;
  const hotspot = Math.max(0, sst - climatology);
  
  // DHW accumulates when hotspot > 1°C
  const dhw = hotspot > 1 ? (hotspot - 1) * 4 + Math.random() * 2 : Math.random() * 1;
  
  return {
    location: { lat: latitude, lon: longitude },
    sst_celsius: Math.round(sst * 10) / 10,
    dhw: Math.round(dhw * 10) / 10,
    anomaly: Math.round(anomaly * 10) / 10,
    hotspot: Math.round(hotspot * 10) / 10,
    status: determineStatus(sst, dhw),
  };
}
