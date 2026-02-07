import { NextResponse } from "next/server";

const NURSERY_DATA = [
  { id: 1, name: "Wildlife Trust of India", lat: 10.5651, lon: 72.6417, region: "Lakshadweep", phone: "+91 11 4606 4222", type: "nursery", status: "active" },
  { id: 2, name: "ReefWatch Marine Conservation", lat: 11.9836, lon: 92.9845, region: "Andaman", phone: "+91 95318 97011", type: "nursery", status: "active" },
  { id: 3, name: "SDMRI Research Institute", lat: 8.8105, lon: 78.1633, region: "Gulf of Mannar", phone: "+91 461 232 3441", type: "research", status: "active" },
  { id: 4, name: "Marine National Park", lat: 22.4674, lon: 69.6083, region: "Gulf of Kutch", phone: "+91 288 267 9355", type: "protected", status: "active" },
  { id: 5, name: "Coastal Impact", lat: 15.3524, lon: 73.7661, region: "Goa", phone: "+91 98191 54033", type: "nursery", status: "active" },
];

function generateEnvironmentalData() {
  const regions = ["Lakshadweep", "Andaman", "Gulf of Mannar", "Gulf of Kutch", "Goa"];
  return regions.map((region) => {
    const baseSST = 27 + Math.random() * 3;
    const dhw = Math.random() * 8;
    const anomaly = -1 + Math.random() * 3;
    const hotspot = Math.max(0, baseSST - 27);
    let alertLevel = 0;
    if (dhw >= 4) alertLevel = 2;
    else if (dhw >= 1) alertLevel = 1;
    return { region, sst: Math.round(baseSST * 10) / 10, dhw: Math.round(dhw * 10) / 10, anomaly: Math.round(anomaly * 10) / 10, hotspot: Math.round(hotspot * 10) / 10, alertLevel, lastUpdated: new Date().toISOString() };
  });
}

export async function GET() {
  try {
    return NextResponse.json({ nurseries: NURSERY_DATA, environmental: generateEnvironmentalData(), lastUpdated: new Date().toISOString() });
  } catch {
    return NextResponse.json({ error: "Failed to fetch coral data" }, { status: 500 });
  }
}
