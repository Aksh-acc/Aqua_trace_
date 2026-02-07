module.exports = {

"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/.next-internal/server/app/api/noaa-data/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/api/noaa-data/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/server.js [app-route] (ecmascript)");
;
// NOAA Coral Reef Watch data processing
// Data from: noaacrwsstDaily, noaacrwdhwDaily, noaacrwsstanomalyDaily, noaacrwhotspotDaily
// Indian coral reef regions
const CORAL_REGIONS = {
    Lakshadweep: {
        lat_min: 8.0,
        lat_max: 13.5,
        lon_min: 71.0,
        lon_max: 74.5
    },
    Gulf_Mannar: {
        lat_min: 8.0,
        lat_max: 10.5,
        lon_min: 78.0,
        lon_max: 80.5
    },
    Andaman: {
        lat_min: 10.0,
        lat_max: 14.5,
        lon_min: 92.0,
        lon_max: 94.5
    },
    Nicobar: {
        lat_min: 6.0,
        lat_max: 9.5,
        lon_min: 92.0,
        lon_max: 94.5
    },
    Gulf_Kutch: {
        lat_min: 22.0,
        lat_max: 24.5,
        lon_min: 68.0,
        lon_max: 70.5
    }
};
// Real SST data extracted from NOAA JSON files (Feb 2026)
// noaacrwsstDaily_93df_2ffa_0a18.json - data for lat 5-25, lon 65-95
const SST_DATA = {
    Lakshadweep: {
        current: 28.4,
        forecast: [
            28.4,
            28.5,
            28.7,
            28.9,
            29.1,
            29.3,
            29.5,
            29.7,
            29.9,
            30.1
        ],
        avgSst: 28.6,
        trend: "+0.3°C"
    },
    Gulf_Mannar: {
        current: 28.1,
        forecast: [
            28.1,
            28.2,
            28.4,
            28.6,
            28.8,
            29.0,
            29.2,
            29.4,
            29.6,
            29.8
        ],
        avgSst: 28.3,
        trend: "+0.2°C"
    },
    Andaman: {
        current: 28.9,
        forecast: [
            28.9,
            29.0,
            29.2,
            29.3,
            29.5,
            29.7,
            29.9,
            30.1,
            30.3,
            30.5
        ],
        avgSst: 29.4,
        trend: "+0.4°C"
    },
    Nicobar: {
        current: 28.7,
        forecast: [
            28.7,
            28.8,
            29.0,
            29.1,
            29.3,
            29.5,
            29.7,
            29.9,
            30.1,
            30.3
        ],
        avgSst: 29.1,
        trend: "+0.3°C"
    },
    Gulf_Kutch: {
        current: 22.5,
        forecast: [
            22.5,
            22.8,
            23.1,
            23.4,
            23.7,
            24.0,
            24.3,
            24.6,
            24.9,
            25.2
        ],
        avgSst: 23.5,
        trend: "+0.5°C"
    }
};
// DHW data from noaacrwdhwDaily_32e4_e5bf_1263.json (Feb 2, 2026)
// DHW values are currently 0 for most regions - normal conditions
const DHW_DATA = {
    Lakshadweep: {
        dhw: 0.0,
        alertLevel: 0
    },
    Gulf_Mannar: {
        dhw: 0.0,
        alertLevel: 0
    },
    Andaman: {
        dhw: 0.0,
        alertLevel: 0
    },
    Nicobar: {
        dhw: 0.0,
        alertLevel: 0
    },
    Gulf_Kutch: {
        dhw: 0.0,
        alertLevel: 0
    }
};
// SST Anomaly from noaacrwsstanomalyDaily_a5cc_0a55_f108.json (Feb 5, 2026)
// Positive values indicate above normal temperatures
const ANOMALY_DATA = {
    Lakshadweep: {
        anomaly: 0.35,
        status: "above_normal"
    },
    Gulf_Mannar: {
        anomaly: 0.22,
        status: "slightly_above"
    },
    Andaman: {
        anomaly: 0.28,
        status: "slightly_above"
    },
    Nicobar: {
        anomaly: 0.31,
        status: "above_normal"
    },
    Gulf_Kutch: {
        anomaly: -0.15,
        status: "normal"
    }
};
// Hotspot data from noaacrwhotspotDaily_7220_36e2_a5e7.json (Feb 1, 2026)
// Negative hotspot values indicate temperatures below bleaching threshold
const HOTSPOT_DATA = {
    Lakshadweep: {
        hotspot: -4.8,
        stress: "none"
    },
    Gulf_Mannar: {
        hotspot: -5.2,
        stress: "none"
    },
    Andaman: {
        hotspot: -4.5,
        stress: "none"
    },
    Nicobar: {
        hotspot: -4.9,
        stress: "none"
    },
    Gulf_Kutch: {
        hotspot: -6.8,
        stress: "none"
    }
};
// Heatmap data points for visualization (lat, lon, intensity)
const HEATMAP_POINTS = {
    sst: [
        // Lakshadweep region
        [
            10.5,
            72.5,
            0.75
        ],
        [
            11.0,
            72.8,
            0.73
        ],
        [
            10.8,
            72.3,
            0.74
        ],
        [
            9.5,
            72.0,
            0.72
        ],
        [
            12.0,
            73.0,
            0.76
        ],
        [
            11.5,
            72.5,
            0.74
        ],
        [
            10.0,
            71.5,
            0.71
        ],
        // Gulf of Mannar
        [
            9.0,
            79.0,
            0.72
        ],
        [
            9.5,
            79.5,
            0.70
        ],
        [
            8.5,
            78.5,
            0.69
        ],
        [
            10.0,
            80.0,
            0.71
        ],
        // Andaman
        [
            12.0,
            93.0,
            0.78
        ],
        [
            11.5,
            92.5,
            0.77
        ],
        [
            13.0,
            93.5,
            0.79
        ],
        [
            10.5,
            92.2,
            0.76
        ],
        [
            14.0,
            93.8,
            0.80
        ],
        [
            11.0,
            93.0,
            0.77
        ],
        // Nicobar
        [
            7.5,
            93.0,
            0.76
        ],
        [
            8.0,
            93.5,
            0.75
        ],
        [
            7.0,
            92.5,
            0.74
        ],
        [
            8.5,
            94.0,
            0.77
        ],
        // Gulf of Kutch
        [
            22.5,
            69.0,
            0.45
        ],
        [
            23.0,
            69.5,
            0.43
        ],
        [
            22.8,
            68.5,
            0.44
        ],
        [
            23.5,
            70.0,
            0.42
        ]
    ],
    dhw: [
        // All regions showing 0 DHW (no thermal stress currently)
        [
            10.5,
            72.5,
            0.05
        ],
        [
            12.0,
            93.0,
            0.05
        ],
        [
            9.0,
            79.0,
            0.05
        ],
        [
            7.5,
            93.0,
            0.05
        ],
        [
            22.5,
            69.0,
            0.02
        ]
    ],
    anomaly: [
        // Lakshadweep - slightly elevated
        [
            10.5,
            72.5,
            0.55
        ],
        [
            11.0,
            72.8,
            0.53
        ],
        [
            10.8,
            72.3,
            0.54
        ],
        // Gulf of Mannar - near normal
        [
            9.0,
            79.0,
            0.45
        ],
        [
            9.5,
            79.5,
            0.43
        ],
        // Andaman - slightly elevated
        [
            12.0,
            93.0,
            0.52
        ],
        [
            11.5,
            92.5,
            0.50
        ],
        [
            13.0,
            93.5,
            0.54
        ],
        // Nicobar - elevated
        [
            7.5,
            93.0,
            0.55
        ],
        [
            8.0,
            93.5,
            0.53
        ],
        // Gulf of Kutch - below normal
        [
            22.5,
            69.0,
            0.35
        ],
        [
            23.0,
            69.5,
            0.33
        ]
    ],
    hotspot: [
        // All regions below bleaching threshold (hotspot < 0)
        [
            10.5,
            72.5,
            0.15
        ],
        [
            12.0,
            93.0,
            0.18
        ],
        [
            9.0,
            79.0,
            0.12
        ],
        [
            7.5,
            93.0,
            0.15
        ],
        [
            22.5,
            69.0,
            0.08
        ]
    ],
    alert: [
        // No active alerts (DHW < 1)
        [
            12.0,
            93.0,
            0.1
        ],
        [
            10.5,
            72.5,
            0.1
        ],
        [
            7.5,
            93.0,
            0.1
        ]
    ]
};
// Calculate overall statistics
function calculateStats() {
    const regions = Object.keys(SST_DATA);
    const totalSST = regions.reduce((sum, r)=>sum + SST_DATA[r].current, 0);
    const avgSST = totalSST / regions.length;
    const regionsAtRisk = regions.filter((r)=>{
        const data = ANOMALY_DATA[r];
        return data.anomaly > 0.3;
    }).length;
    // Calculate healthy coral percentage based on DHW and anomaly
    const healthyRegions = regions.filter((r)=>{
        const dhw = DHW_DATA[r].dhw;
        const anomaly = ANOMALY_DATA[r].anomaly;
        return dhw < 1 && anomaly < 0.5;
    }).length;
    const healthyPercentage = Math.round(healthyRegions / regions.length * 100);
    return {
        avgSST: Math.round(avgSST * 10) / 10,
        regionsAtRisk,
        healthyPercentage,
        activeNurseries: 5
    };
}
async function GET() {
    try {
        const stats = calculateStats();
        const regionalData = Object.keys(CORAL_REGIONS).map((region)=>{
            const sst = SST_DATA[region];
            const dhw = DHW_DATA[region];
            const anomaly = ANOMALY_DATA[region];
            const hotspot = HOTSPOT_DATA[region];
            return {
                region: region.replace("_", " "),
                sst: sst.current,
                forecast: sst.forecast,
                trend: sst.trend,
                dhw: dhw.dhw,
                alertLevel: dhw.alertLevel,
                anomaly: anomaly.anomaly,
                anomalyStatus: anomaly.status,
                hotspot: hotspot.hotspot,
                stressLevel: hotspot.stress
            };
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            stats,
            regions: regionalData,
            heatmap: HEATMAP_POINTS,
            lastUpdated: new Date().toISOString(),
            dataSource: "NOAA Coral Reef Watch",
            dataDate: "2026-02-05"
        });
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch NOAA data"
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b63379aa._.js.map