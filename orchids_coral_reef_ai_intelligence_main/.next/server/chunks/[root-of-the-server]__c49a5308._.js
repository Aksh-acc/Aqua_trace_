module.exports = {

"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/.next-internal/server/app/api/sst-data/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/api/sst-data/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/server.js [app-route] (ecmascript)");
;
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY || "";
async function POST(request) {
    try {
        const { latitude, longitude } = await request.json();
        if (latitude === undefined || longitude === undefined) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Latitude and longitude are required"
            }, {
                status: 400
            });
        }
        // Try to fetch real SST data from RapidAPI
        if (RAPIDAPI_KEY) {
            try {
                const response = await fetch(`https://sea-surface-temperature.p.rapidapi.com/current?lat=${latitude}&lon=${longitude}`, {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key": RAPIDAPI_KEY,
                        "X-RapidAPI-Host": "sea-surface-temperature.p.rapidapi.com"
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    return __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        location: {
                            lat: latitude,
                            lon: longitude
                        },
                        sst_celsius: data.sst || data.temperature || data.sst_celsius,
                        dhw: data.dhw || data.degree_heating_weeks || null,
                        anomaly: data.anomaly || data.sst_anomaly || null,
                        status: data.status || determineStatus(data.sst || data.temperature, data.dhw),
                        source: "rapidapi"
                    });
                }
            } catch (apiError) {
                console.error("RapidAPI SST fetch error:", apiError);
            }
        }
        // Fallback: Generate realistic simulated SST data based on location
        const simulatedData = generateSimulatedSSTData(latitude, longitude);
        return __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ...simulatedData,
            source: "simulated"
        });
    } catch (error) {
        console.error("SST API error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch SST data"
        }, {
            status: 500
        });
    }
}
function determineStatus(sst, dhw) {
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
function generateSimulatedSSTData(latitude, longitude) {
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
        location: {
            lat: latitude,
            lon: longitude
        },
        sst_celsius: Math.round(sst * 10) / 10,
        dhw: Math.round(dhw * 10) / 10,
        anomaly: Math.round(anomaly * 10) / 10,
        hotspot: Math.round(hotspot * 10) / 10,
        status: determineStatus(sst, dhw)
    };
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c49a5308._.js.map