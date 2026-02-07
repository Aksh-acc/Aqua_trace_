(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CoralHeatMap)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const LAYER_CONFIG = {
    sst: {
        name: "Sea Surface Temp (°C)",
        title: "Sea Surface Temperature",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"],
        gradient: [
            "#00d4ff",
            "#92fe9d",
            "#ff6b35"
        ],
        labels: [
            "Cool (<26°C)",
            "Optimal (27-28°C)",
            "High (>30°C)"
        ],
        description: "Current sea surface temperature readings from NOAA"
    },
    dhw: {
        name: "Degree Heating Week",
        title: "Degree Heating Week (DHW)",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
        gradient: [
            "#0088ff",
            "#ffa500",
            "#ff4500"
        ],
        labels: [
            "No Stress (0)",
            "Watch (1-4)",
            "Bleaching (>4)"
        ],
        description: "Accumulated thermal stress - currently stable"
    },
    anomaly: {
        name: "SST Anomaly (°C)",
        title: "SST Anomaly",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"],
        gradient: [
            "#0000ff",
            "#00ffff",
            "#ffcc00",
            "#ff0000"
        ],
        labels: [
            "Below Avg (<0)",
            "Normal (0)",
            "Elevated (0.2-0.5)",
            "High (>0.5)"
        ],
        description: "Deviation from monthly mean temperature"
    },
    hotspot: {
        name: "Hotspots (°C)",
        title: "Coral Hotspots",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        gradient: [
            "#808080",
            "#ffd700"
        ],
        labels: [
            "Below Threshold",
            "Elevated"
        ],
        description: "Areas exceeding bleaching threshold (currently none)"
    },
    alert: {
        name: "Bleaching Alert Area",
        title: "Bleaching Alert Level",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
        gradient: [
            "#00ff00",
            "#ffd700",
            "#ff4500"
        ],
        labels: [
            "No Stress",
            "Watch",
            "Warning"
        ],
        description: "NOAA Coral Reef Watch alert levels"
    }
};
const NURSERY_DATA = [
    {
        id: 1,
        name: "Wildlife Trust of India",
        lat: 10.5651,
        lon: 72.6417,
        region: "Lakshadweep",
        phone: "+91 11 4606 4222",
        type: "nursery"
    },
    {
        id: 2,
        name: "ReefWatch Marine",
        lat: 11.9836,
        lon: 92.9845,
        region: "Andaman",
        phone: "+91 95318 97011",
        type: "nursery"
    },
    {
        id: 3,
        name: "SDMRI Research Institute",
        lat: 8.8105,
        lon: 78.1633,
        region: "Gulf of Mannar",
        phone: "+91 461 232 3441",
        type: "research"
    },
    {
        id: 4,
        name: "Marine National Park",
        lat: 22.4674,
        lon: 69.6083,
        region: "Gulf of Kutch",
        phone: "+91 288 267 9355",
        type: "protected"
    },
    {
        id: 5,
        name: "Coastal Impact",
        lat: 15.3524,
        lon: 73.7661,
        region: "Goa",
        phone: "+91 98191 54033",
        type: "nursery"
    }
];
// Default heatmap data based on NOAA JSON files (Feb 2026)
// Will be replaced with API data when available
const DEFAULT_HEATMAP_DATA = {
    sst: [
        // Lakshadweep region - SST ~28.4°C (normalized 0.73)
        [
            10.5,
            72.5,
            0.73
        ],
        [
            11.0,
            72.8,
            0.72
        ],
        [
            10.8,
            72.3,
            0.73
        ],
        [
            9.5,
            72.0,
            0.71
        ],
        [
            12.0,
            73.0,
            0.74
        ],
        [
            11.5,
            72.5,
            0.72
        ],
        [
            10.0,
            71.5,
            0.70
        ],
        // Gulf of Mannar - SST ~28.1°C
        [
            9.0,
            79.0,
            0.70
        ],
        [
            9.5,
            79.5,
            0.69
        ],
        [
            8.5,
            78.5,
            0.68
        ],
        [
            10.0,
            80.0,
            0.70
        ],
        // Andaman - SST ~28.9°C (elevated)
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
        // Nicobar - SST ~28.7°C
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
        // Gulf of Kutch - SST ~22.5°C (cooler)
        [
            22.5,
            69.0,
            0.35
        ],
        [
            23.0,
            69.5,
            0.33
        ],
        [
            22.8,
            68.5,
            0.34
        ],
        [
            23.5,
            70.0,
            0.32
        ]
    ],
    dhw: [
        // All regions showing DHW = 0 (no thermal stress per NOAA data)
        [
            10.5,
            72.5,
            0.02
        ],
        [
            12.0,
            93.0,
            0.02
        ],
        [
            9.0,
            79.0,
            0.02
        ],
        [
            7.5,
            93.0,
            0.02
        ],
        [
            22.5,
            69.0,
            0.01
        ],
        [
            11.0,
            72.8,
            0.02
        ],
        [
            11.5,
            92.5,
            0.02
        ],
        [
            9.5,
            79.5,
            0.02
        ]
    ],
    anomaly: [
        // Lakshadweep - anomaly +0.35°C (slightly elevated)
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
        [
            9.5,
            72.0,
            0.52
        ],
        // Gulf of Mannar - anomaly +0.22°C (near normal)
        [
            9.0,
            79.0,
            0.48
        ],
        [
            9.5,
            79.5,
            0.45
        ],
        [
            8.5,
            78.5,
            0.46
        ],
        // Andaman - anomaly +0.28°C (slightly elevated)
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
        // Nicobar - anomaly +0.31°C (slightly elevated)
        [
            7.5,
            93.0,
            0.53
        ],
        [
            8.0,
            93.5,
            0.51
        ],
        [
            7.0,
            92.5,
            0.52
        ],
        // Gulf of Kutch - anomaly -0.15°C (below normal)
        [
            22.5,
            69.0,
            0.35
        ],
        [
            23.0,
            69.5,
            0.33
        ],
        [
            22.8,
            68.5,
            0.34
        ]
    ],
    hotspot: [
        // All regions below bleaching threshold (negative hotspot values)
        [
            10.5,
            72.5,
            0.12
        ],
        [
            12.0,
            93.0,
            0.15
        ],
        [
            9.0,
            79.0,
            0.10
        ],
        [
            7.5,
            93.0,
            0.12
        ],
        [
            22.5,
            69.0,
            0.05
        ],
        [
            11.0,
            72.8,
            0.11
        ],
        [
            11.5,
            92.5,
            0.14
        ],
        [
            9.5,
            79.5,
            0.09
        ]
    ],
    alert: [
        // No active bleaching alerts (DHW < 1 throughout)
        [
            12.0,
            93.0,
            0.08
        ],
        [
            10.5,
            72.5,
            0.08
        ],
        [
            7.5,
            93.0,
            0.08
        ],
        [
            9.0,
            79.0,
            0.05
        ],
        [
            22.5,
            69.0,
            0.03
        ]
    ]
};
function CoralHeatMap() {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const heatLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const markersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [currentLayer, setCurrentLayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sst");
    const [selectedNursery, setSelectedNursery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isMapReady, setIsMapReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [heatmapData, setHeatmapData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_HEATMAP_DATA);
    const [dataInfo, setDataInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        source: "NOAA Coral Reef Watch",
        date: "2026-02-05"
    });
    const layers = [
        "sst",
        "dhw",
        "anomaly",
        "hotspot",
        "alert"
    ];
    const currentIndex = layers.indexOf(currentLayer);
    const nextLayer = ()=>{
        const next = (currentIndex + 1) % layers.length;
        setCurrentLayer(layers[next]);
    };
    const prevLayer = ()=>{
        const prev = (currentIndex - 1 + layers.length) % layers.length;
        setCurrentLayer(layers[prev]);
    };
    // Fetch heatmap data from NOAA API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoralHeatMap.useEffect": ()=>{
            const fetchData = {
                "CoralHeatMap.useEffect.fetchData": async ()=>{
                    try {
                        const response = await fetch("/api/noaa-data");
                        if (response.ok) {
                            const data = await response.json();
                            if (data.heatmap) {
                                setHeatmapData(data.heatmap);
                                setDataInfo({
                                    source: data.dataSource || "NOAA Coral Reef Watch",
                                    date: data.dataDate || "2026-02-05"
                                });
                            }
                        }
                    } catch (error) {
                        console.error("Failed to fetch NOAA heatmap data:", error);
                    // Keep using default data
                    }
                }
            }["CoralHeatMap.useEffect.fetchData"];
            fetchData();
        }
    }["CoralHeatMap.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoralHeatMap.useEffect": ()=>{
            if ("object" === "undefined" || !mapRef.current || mapInstanceRef.current) return;
            const initMap = {
                "CoralHeatMap.useEffect.initMap": async ()=>{
                    try {
                        const L = (await __turbopack_context__.r("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).default;
                        await __turbopack_context__.r("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/leaflet/dist/leaflet.css [app-client] (css, async loader)")(__turbopack_context__.i);
                        const heat = await __turbopack_context__.r("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/leaflet.heat/dist/leaflet-heat.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                        const map = L.map(mapRef.current, {
                            center: [
                                15,
                                80
                            ],
                            zoom: 4,
                            zoomControl: true,
                            attributionControl: true
                        });
                        L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
                            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
                            subdomains: "abcd",
                            maxZoom: 19
                        }).addTo(map);
                        mapInstanceRef.current = map;
                        setIsMapReady(true);
                        setIsLoading(false);
                    } catch (error) {
                        console.error("Error initializing map:", error);
                        setIsLoading(false);
                    }
                }
            }["CoralHeatMap.useEffect.initMap"];
            initMap();
            return ({
                "CoralHeatMap.useEffect": ()=>{
                    if (mapInstanceRef.current) {
                        mapInstanceRef.current.remove();
                        mapInstanceRef.current = null;
                    }
                }
            })["CoralHeatMap.useEffect"];
        }
    }["CoralHeatMap.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoralHeatMap.useEffect": ()=>{
            if (!isMapReady || !mapInstanceRef.current) return;
            const updateHeatmap = {
                "CoralHeatMap.useEffect.updateHeatmap": async ()=>{
                    try {
                        const L = (await __turbopack_context__.r("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).default;
                        const map = mapInstanceRef.current;
                        if (heatLayerRef.current) {
                            map.removeLayer(heatLayerRef.current);
                        }
                        const config = LAYER_CONFIG[currentLayer];
                        const data = heatmapData[currentLayer];
                        let gradient = {};
                        if (currentLayer === "sst") {
                            gradient = {
                                0.0: "#00d4ff",
                                0.3: "#00d4ff",
                                0.5: "#92fe9d",
                                0.7: "#ffcc00",
                                0.85: "#ff6b35",
                                1.0: "#ff4500"
                            };
                        } else if (currentLayer === "dhw") {
                            gradient = {
                                0.0: "#00cc00",
                                0.2: "#66ff66",
                                0.4: "#ffff00",
                                0.6: "#ff9900",
                                0.8: "#ff3300",
                                1.0: "#cc0000"
                            };
                        } else if (currentLayer === "anomaly") {
                            gradient = {
                                0.0: "#0066ff",
                                0.3: "#00ccff",
                                0.5: "#ffff66",
                                0.7: "#ff9900",
                                1.0: "#ff3300"
                            };
                        } else if (currentLayer === "hotspot") {
                            gradient = {
                                0.0: "#333333",
                                0.3: "#666666",
                                0.5: "#999900",
                                0.7: "#cccc00",
                                1.0: "#ffcc00"
                            };
                        } else if (currentLayer === "alert") {
                            gradient = {
                                0.0: "#00cc00",
                                0.3: "#66ff66",
                                0.5: "#ffff00",
                                0.7: "#ff9900",
                                1.0: "#ff3300"
                            };
                        }
                        const heatLayer = L.heatLayer(data, {
                            radius: 80,
                            blur: 60,
                            maxZoom: 10,
                            max: 1.0,
                            minOpacity: 0.6,
                            gradient
                        });
                        heatLayer.addTo(map);
                        heatLayerRef.current = heatLayer;
                    } catch (error) {
                        console.error("Error updating heatmap:", error);
                    }
                }
            }["CoralHeatMap.useEffect.updateHeatmap"];
            updateHeatmap();
        }
    }["CoralHeatMap.useEffect"], [
        currentLayer,
        isMapReady,
        heatmapData
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoralHeatMap.useEffect": ()=>{
            if (!isMapReady || !mapInstanceRef.current) return;
            const updateMarkers = {
                "CoralHeatMap.useEffect.updateMarkers": async ()=>{
                    try {
                        const L = (await __turbopack_context__.r("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).default;
                        const map = mapInstanceRef.current;
                        markersRef.current.forEach({
                            "CoralHeatMap.useEffect.updateMarkers": (marker)=>map.removeLayer(marker)
                        }["CoralHeatMap.useEffect.updateMarkers"]);
                        markersRef.current = [];
                        const createIcon = {
                            "CoralHeatMap.useEffect.updateMarkers.createIcon": ()=>{
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
                                    iconSize: [
                                        20,
                                        20
                                    ],
                                    iconAnchor: [
                                        10,
                                        10
                                    ]
                                });
                            }
                        }["CoralHeatMap.useEffect.updateMarkers.createIcon"];
                        NURSERY_DATA.forEach({
                            "CoralHeatMap.useEffect.updateMarkers": (nursery)=>{
                                const marker = L.marker([
                                    nursery.lat,
                                    nursery.lon
                                ], {
                                    icon: createIcon()
                                });
                                marker.on("click", {
                                    "CoralHeatMap.useEffect.updateMarkers": ()=>{
                                        setSelectedNursery(nursery);
                                    }
                                }["CoralHeatMap.useEffect.updateMarkers"]);
                                marker.addTo(map);
                                markersRef.current.push(marker);
                            }
                        }["CoralHeatMap.useEffect.updateMarkers"]);
                    } catch (error) {
                        console.error("Error updating markers:", error);
                    }
                }
            }["CoralHeatMap.useEffect.updateMarkers"];
            updateMarkers();
        }
    }["CoralHeatMap.useEffect"], [
        isMapReady
    ]);
    const config = LAYER_CONFIG[currentLayer];
    const Icon = config.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\CoralHeatMap.tsx:320:4",
        "data-orchids-name": "div",
        className: "relative w-full h-[600px] rounded-2xl overflow-hidden bg-slate-900",
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\CoralHeatMap.tsx:322:8",
                "data-orchids-name": "div",
                className: "absolute inset-0 flex items-center justify-center bg-slate-900 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                    "data-orchids-id": "src\\components\\CoralHeatMap.tsx:323:10",
                    "data-orchids-name": "RefreshCw",
                    className: "w-8 h-8 animate-spin text-cyan-400"
                }, void 0, false, {
                    fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                    lineNumber: 323,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                lineNumber: 322,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\CoralHeatMap.tsx:327:6@mapRef",
                "data-orchids-name": "div",
                ref: mapRef,
                className: "w-full h-full"
            }, void 0, false, {
                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\CoralHeatMap.tsx:329:6",
                "data-orchids-name": "div",
                className: "absolute top-4 left-4 z-[1000] flex flex-col gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-orchids-id": "src\\components\\CoralHeatMap.tsx:330:8",
                        "data-orchids-name": "button",
                        onClick: ()=>mapInstanceRef.current?.zoomIn(),
                        className: "w-8 h-8 bg-white text-black flex items-center justify-center text-xl font-bold hover:bg-gray-100",
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-orchids-id": "src\\components\\CoralHeatMap.tsx:336:8",
                        "data-orchids-name": "button",
                        onClick: ()=>mapInstanceRef.current?.zoomOut(),
                        className: "w-8 h-8 bg-white text-black flex items-center justify-center text-xl font-bold hover:bg-gray-100",
                        children: "−"
                    }, void 0, false, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                lineNumber: 329,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\CoralHeatMap.tsx:344:6",
                "data-orchids-name": "div",
                className: "absolute top-4 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-orchids-id": "src\\components\\CoralHeatMap.tsx:345:8@prevLayer",
                        "data-orchids-name": "button",
                        onClick: prevLayer,
                        className: "p-2 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            "data-orchids-id": "src\\components\\CoralHeatMap.tsx:349:10",
                            "data-orchids-name": "ChevronLeft",
                            className: "w-5 h-5 text-white"
                        }, void 0, false, {
                            fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                            lineNumber: 349,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\CoralHeatMap.tsx:351:8",
                        "data-orchids-name": "div",
                        className: "px-4 py-2 bg-black/60 backdrop-blur-sm rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "data-orchids-id": "src\\components\\CoralHeatMap.tsx:352:10",
                            "data-orchids-name": "span",
                            className: "text-white font-medium flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    "data-orchids-id": "src\\components\\CoralHeatMap.tsx:353:12",
                                    "data-orchids-name": "Icon",
                                    className: "w-4 h-4 text-cyan-400"
                                }, void 0, false, {
                                    fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                                    lineNumber: 353,
                                    columnNumber: 13
                                }, this),
                                config.title
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                            lineNumber: 352,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-orchids-id": "src\\components\\CoralHeatMap.tsx:357:8@nextLayer",
                        "data-orchids-name": "button",
                        onClick: nextLayer,
                        className: "p-2 bg-black/60 backdrop-blur-sm rounded-full hover:bg-black/80 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            "data-orchids-id": "src\\components\\CoralHeatMap.tsx:361:10",
                            "data-orchids-name": "ChevronRight",
                            className: "w-5 h-5 text-white"
                        }, void 0, false, {
                            fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                        lineNumber: 357,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\CoralHeatMap.tsx:365:6",
                "data-orchids-name": "div",
                className: "absolute top-16 left-1/2 -translate-x-1/2 z-[1000] flex items-center gap-2",
                children: layers.map((layer, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-map-index": i,
                        "data-orchids-id": "src\\components\\CoralHeatMap.tsx:367:10@layers",
                        "data-orchids-name": "button",
                        onClick: ()=>setCurrentLayer(layer),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-2 h-2 rounded-full transition-all", currentLayer === layer ? "bg-cyan-400 w-4" : "bg-white/40 hover:bg-white/60")
                    }, layer, false, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\CoralHeatMap.tsx:378:6",
                "data-orchids-name": "div",
                className: "absolute bottom-6 right-6 z-[1000] bg-black/70 backdrop-blur-sm rounded-xl p-4 min-w-[200px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        "data-orchids-id": "src\\components\\CoralHeatMap.tsx:379:8",
                        "data-orchids-name": "h4",
                        className: "text-cyan-400 font-bold mb-3",
                        children: config.name
                    }, void 0, false, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                        lineNumber: 379,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\CoralHeatMap.tsx:380:8",
                        "data-orchids-name": "div",
                        className: "space-y-2",
                        children: config.labels.map((label, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\components\\CoralHeatMap.tsx:382:12",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\components\\CoralHeatMap.tsx:383:14",
                                        "data-orchids-name": "div",
                                        className: "w-8 h-3 rounded",
                                        style: {
                                            background: config.gradient.length === 2 ? config.gradient[i] : config.gradient[Math.min(i, config.gradient.length - 1)]
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                                        lineNumber: 383,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src\\components\\CoralHeatMap.tsx:391:14",
                                        "data-orchids-name": "span",
                                        className: "text-white text-sm",
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                                        lineNumber: 391,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, label, true, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                        lineNumber: 380,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\CoralHeatMap.tsx:395:8",
                        "data-orchids-name": "div",
                        className: "mt-3 pt-3 border-t border-white/20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src\\components\\CoralHeatMap.tsx:396:10",
                                "data-orchids-name": "p",
                                className: "text-gray-400 text-xs",
                                children: dataInfo.source
                            }, void 0, false, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                                lineNumber: 396,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src\\components\\CoralHeatMap.tsx:397:10",
                                "data-orchids-name": "p",
                                className: "text-gray-500 text-xs",
                                children: [
                                    "Data: ",
                                    dataInfo.date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                                lineNumber: 397,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                        lineNumber: 395,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                lineNumber: 378,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                "data-orchids-id": "src\\components\\CoralHeatMap.tsx:401:6",
                "data-orchids-name": "AnimatePresence",
                children: selectedNursery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    "data-orchids-id": "src\\components\\CoralHeatMap.tsx:403:10",
                    "data-orchids-name": "motion.div",
                    initial: {
                        opacity: 0,
                        scale: 0.9
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.9
                    },
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001] bg-white rounded-xl p-4 shadow-2xl min-w-[280px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-orchids-id": "src\\components\\CoralHeatMap.tsx:409:12",
                            "data-orchids-name": "button",
                            onClick: ()=>setSelectedNursery(null),
                            className: "absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                "data-orchids-id": "src\\components\\CoralHeatMap.tsx:413:14",
                                "data-orchids-name": "X",
                                className: "w-4 h-4 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                                lineNumber: 413,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                            lineNumber: 409,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            "data-orchids-id": "src\\components\\CoralHeatMap.tsx:415:12",
                            "data-orchids-name": "h3",
                            className: "text-cyan-600 font-bold text-lg pr-6",
                            children: selectedNursery.name
                        }, void 0, false, {
                            fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                            lineNumber: 415,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\components\\CoralHeatMap.tsx:416:12",
                            "data-orchids-name": "div",
                            className: "mt-2 space-y-1 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src\\components\\CoralHeatMap.tsx:417:14",
                                    "data-orchids-name": "p",
                                    className: "text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-orchids-id": "src\\components\\CoralHeatMap.tsx:418:16",
                                            "data-orchids-name": "span",
                                            className: "font-semibold",
                                            children: "Region:"
                                        }, void 0, false, {
                                            fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                                            lineNumber: 418,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        selectedNursery.region
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                                    lineNumber: 417,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    "data-orchids-id": "src\\components\\CoralHeatMap.tsx:420:14",
                                    "data-orchids-name": "p",
                                    className: "text-gray-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-orchids-id": "src\\components\\CoralHeatMap.tsx:421:16",
                                            "data-orchids-name": "span",
                                            className: "font-semibold",
                                            children: "Contact:"
                                        }, void 0, false, {
                                            fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            "data-orchids-id": "src\\components\\CoralHeatMap.tsx:422:16",
                                            "data-orchids-name": "a",
                                            href: `tel:${selectedNursery.phone}`,
                                            className: "text-cyan-600 hover:underline",
                                            children: selectedNursery.phone
                                        }, void 0, false, {
                                            fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                                            lineNumber: 422,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                                    lineNumber: 420,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                            lineNumber: 416,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                    lineNumber: 403,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx",
        lineNumber: 320,
        columnNumber: 5
    }, this);
}
_s(CoralHeatMap, "JDtQPIsEsLk+Z9id/tIK1g3s3Hg=");
_c = CoralHeatMap;
var _c;
__turbopack_context__.k.register(_c, "CoralHeatMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx [app-client] (ecmascript)"));
}}),
"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useComposedRefs": (()=>useComposedRefs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
/**
 * Taken from https://github.com/radix-ui/primitives/blob/main/packages/react/compose-refs/src/compose-refs.tsx
 */ /**
 * Set a given ref to a given value
 * This utility takes care of different types of refs: callback refs and RefObject(s)
 */ function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== undefined) {
        ref.current = value;
    }
}
/**
 * A utility to compose multiple refs together
 * Accepts callback refs and RefObject(s)
 */ function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup === "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        // React <19 will log an error to the console if a callback ref returns a
        // value. We don't use ref cleanups internally so this will only happen if a
        // user's ref callback returns a value, which we only expect if they are
        // using the cleanup functionality added in React 19.
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup === "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
/**
 * A custom hook that composes multiple refs
 * Accepts callback refs and RefObject(s)
 */ function useComposedRefs(...refs) {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=use-composed-ref.mjs.map
}}),
"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PopChild": (()=>PopChild)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/motion-dom/dist/es/utils/is-html-element.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$composed$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
/**
 * Measurement functionality has to be within a separate component
 * to leverage snapshot lifecycle.
 */ class PopChildMeasure extends __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    getSnapshotBeforeUpdate(prevProps) {
        const element = this.props.childRef.current;
        if (element && prevProps.isPresent && !this.props.isPresent) {
            const parent = element.offsetParent;
            const parentWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(parent) ? parent.offsetWidth || 0 : 0;
            const parentHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$is$2d$html$2d$element$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHTMLElement"])(parent) ? parent.offsetHeight || 0 : 0;
            const size = this.props.sizeRef.current;
            size.height = element.offsetHeight || 0;
            size.width = element.offsetWidth || 0;
            size.top = element.offsetTop;
            size.left = element.offsetLeft;
            size.right = parentWidth - size.width - size.left;
            size.bottom = parentHeight - size.height - size.top;
        }
        return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */ componentDidUpdate() {}
    render() {
        return this.props.children;
    }
}
function PopChild({ children, isPresent, anchorX, anchorY, root }) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        width: 0,
        height: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    });
    const { nonce } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    /**
     * In React 19, refs are passed via props.ref instead of element.ref.
     * We check props.ref first (React 19) and fall back to element.ref (React 18).
     */ const childRef = children.props?.ref ?? children?.ref;
    const composedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$composed$2d$ref$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(ref, childRef);
    /**
     * We create and inject a style block so we can apply this explicit
     * sizing in a non-destructive manner by just deleting the style block.
     *
     * We can't apply size via render as the measurement happens
     * in getSnapshotBeforeUpdate (post-render), likewise if we apply the
     * styles directly on the DOM node, we might be overwriting
     * styles set via the style prop.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])({
        "PopChild.useInsertionEffect": ()=>{
            const { width, height, top, left, right, bottom } = size.current;
            if (isPresent || !ref.current || !width || !height) return;
            const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
            const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
            ref.current.dataset.motionPopId = id;
            const style = document.createElement("style");
            if (nonce) style.nonce = nonce;
            const parent = root ?? document.head;
            parent.appendChild(style);
            if (style.sheet) {
                style.sheet.insertRule(`
          [data-motion-pop-id="${id}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
            }
            return ({
                "PopChild.useInsertionEffect": ()=>{
                    if (parent.contains(style)) {
                        parent.removeChild(style);
                    }
                }
            })["PopChild.useInsertionEffect"];
        }
    }["PopChild.useInsertionEffect"], [
        isPresent
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PopChildMeasure, {
        isPresent: isPresent,
        childRef: ref,
        sizeRef: size,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"])(children, {
            ref: composedRef
        })
    });
}
;
 //# sourceMappingURL=PopChild.mjs.map
}}),
"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PresenceChild": (()=>PresenceChild)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/context/PresenceContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PopChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root })=>{
    const presenceChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])(newChildrenMap);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    let isReusedContext = true;
    let context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PresenceChild.useMemo[context]": ()=>{
            isReusedContext = false;
            return {
                id,
                initial,
                isPresent,
                custom,
                onExitComplete: ({
                    "PresenceChild.useMemo[context]": (childId)=>{
                        presenceChildren.set(childId, true);
                        for (const isComplete of presenceChildren.values()){
                            if (!isComplete) return; // can stop searching when any is incomplete
                        }
                        onExitComplete && onExitComplete();
                    }
                })["PresenceChild.useMemo[context]"],
                register: ({
                    "PresenceChild.useMemo[context]": (childId)=>{
                        presenceChildren.set(childId, false);
                        return ({
                            "PresenceChild.useMemo[context]": ()=>presenceChildren.delete(childId)
                        })["PresenceChild.useMemo[context]"];
                    }
                })["PresenceChild.useMemo[context]"]
            };
        }
    }["PresenceChild.useMemo[context]"], [
        isPresent,
        presenceChildren,
        onExitComplete
    ]);
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */ if (presenceAffectsLayout && isReusedContext) {
        context = {
            ...context
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PresenceChild.useMemo": ()=>{
            presenceChildren.forEach({
                "PresenceChild.useMemo": (_, key)=>presenceChildren.set(key, false)
            }["PresenceChild.useMemo"]);
        }
    }["PresenceChild.useMemo"], [
        isPresent
    ]);
    /**
     * If there's no `motion` components to fire exit animations, we want to remove this
     * component immediately.
     */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PresenceChild.useEffect": ()=>{
            !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
        }
    }["PresenceChild.useEffect"], [
        isPresent
    ]);
    if (mode === "popLayout") {
        children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PopChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopChild"], {
            isPresent: isPresent,
            anchorX: anchorX,
            anchorY: anchorY,
            root: root,
            children: children
        });
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$PresenceContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceContext"].Provider, {
        value: context,
        children: children
    });
};
function newChildrenMap() {
    return new Map();
}
;
 //# sourceMappingURL=PresenceChild.mjs.map
}}),
"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getChildKey": (()=>getChildKey),
    "onlyElements": (()=>onlyElements)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const getChildKey = (child)=>child.key || "";
function onlyElements(children) {
    const filtered = [];
    // We use forEach here instead of map as map mutates the component key by preprending `.$`
    __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].forEach(children, (child)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(child)) filtered.push(child);
    });
    return filtered;
}
;
 //# sourceMappingURL=utils.mjs.map
}}),
"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AnimatePresence": (()=>AnimatePresence)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/utils/use-constant.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PresenceChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
/**
 * `AnimatePresence` enables the animation of components that have been removed from the tree.
 *
 * When adding/removing more than a single child, every child **must** be given a unique `key` prop.
 *
 * Any `motion` components that have an `exit` property defined will animate out when removed from
 * the tree.
 *
 * ```jsx
 * import { motion, AnimatePresence } from 'framer-motion'
 *
 * export const Items = ({ items }) => (
 *   <AnimatePresence>
 *     {items.map(item => (
 *       <motion.div
 *         key={item.id}
 *         initial={{ opacity: 0 }}
 *         animate={{ opacity: 1 }}
 *         exit={{ opacity: 0 }}
 *       />
 *     ))}
 *   </AnimatePresence>
 * )
 * ```
 *
 * You can sequence exit animations throughout a tree using variants.
 *
 * If a child contains multiple `motion` components with `exit` props, it will only unmount the child
 * once all `motion` components have finished animating out. Likewise, any components using
 * `usePresence` all need to call `safeToRemove`.
 *
 * @public
 */ const AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root })=>{
    const [isParentPresent, safeToRemove] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$use$2d$presence$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePresence"])(propagate);
    /**
     * Filter any children that aren't ReactElements. We can only track components
     * between renders with a props.key.
     */ const presentChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AnimatePresence.useMemo[presentChildren]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlyElements"])(children)
    }["AnimatePresence.useMemo[presentChildren]"], [
        children
    ]);
    /**
     * Track the keys of the currently rendered children. This is used to
     * determine which children are exiting.
     */ const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChildKey"]);
    /**
     * If `initial={false}` we only want to pass this to components in the first render.
     */ const isInitialRender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    /**
     * A ref containing the currently present children. When all exit animations
     * are complete, we use this to re-render the component with the latest children
     * *committed* rather than the latest children *rendered*.
     */ const pendingPresentChildren = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(presentChildren);
    /**
     * Track which exiting children have finished animating out.
     */ const exitComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$constant$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useConstant"])({
        "AnimatePresence.useConstant[exitComplete]": ()=>new Map()
    }["AnimatePresence.useConstant[exitComplete]"]);
    /**
     * Track which components are currently processing exit to prevent duplicate processing.
     */ const exitingComponents = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    /**
     * Save children to render as React state. To ensure this component is concurrent-safe,
     * we check for exiting children via an effect.
     */ const [diffedChildren, setDiffedChildren] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(presentChildren);
    const [renderedChildren, setRenderedChildren] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(presentChildren);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "AnimatePresence.useIsomorphicLayoutEffect": ()=>{
            isInitialRender.current = false;
            pendingPresentChildren.current = presentChildren;
            /**
         * Update complete status of exiting children.
         */ for(let i = 0; i < renderedChildren.length; i++){
                const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChildKey"])(renderedChildren[i]);
                if (!presentKeys.includes(key)) {
                    if (exitComplete.get(key) !== true) {
                        exitComplete.set(key, false);
                    }
                } else {
                    exitComplete.delete(key);
                    exitingComponents.current.delete(key);
                }
            }
        }
    }["AnimatePresence.useIsomorphicLayoutEffect"], [
        renderedChildren,
        presentKeys.length,
        presentKeys.join("-")
    ]);
    const exitingChildren = [];
    if (presentChildren !== diffedChildren) {
        let nextChildren = [
            ...presentChildren
        ];
        /**
         * Loop through all the currently rendered components and decide which
         * are exiting.
         */ for(let i = 0; i < renderedChildren.length; i++){
            const child = renderedChildren[i];
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChildKey"])(child);
            if (!presentKeys.includes(key)) {
                nextChildren.splice(i, 0, child);
                exitingChildren.push(child);
            }
        }
        /**
         * If we're in "wait" mode, and we have exiting children, we want to
         * only render these until they've all exited.
         */ if (mode === "wait" && exitingChildren.length) {
            nextChildren = exitingChildren;
        }
        setRenderedChildren((0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onlyElements"])(nextChildren));
        setDiffedChildren(presentChildren);
        /**
         * Early return to ensure once we've set state with the latest diffed
         * children, we can immediately re-render.
         */ return null;
    }
    if (("TURBOPACK compile-time value", "development") !== "production" && mode === "wait" && renderedChildren.length > 1) {
        console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
    }
    /**
     * If we've been provided a forceRender function by the LayoutGroupContext,
     * we can use it to force a re-render amongst all surrounding components once
     * all components have finished animating out.
     */ const { forceRender } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$LayoutGroupContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LayoutGroupContext"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: renderedChildren.map((child)=>{
            const key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$utils$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChildKey"])(child);
            const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
            const onExit = ()=>{
                if (exitingComponents.current.has(key)) {
                    return;
                }
                exitingComponents.current.add(key);
                if (exitComplete.has(key)) {
                    exitComplete.set(key, true);
                } else {
                    return;
                }
                let isEveryExitComplete = true;
                exitComplete.forEach((isExitComplete)=>{
                    if (!isExitComplete) isEveryExitComplete = false;
                });
                if (isEveryExitComplete) {
                    forceRender?.();
                    setRenderedChildren(pendingPresentChildren.current);
                    propagate && safeToRemove?.();
                    onExitComplete && onExitComplete();
                }
            };
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$PresenceChild$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresenceChild"], {
                isPresent: isPresent,
                initial: !isInitialRender.current || initial ? undefined : false,
                custom: custom,
                presenceAffectsLayout: presenceAffectsLayout,
                mode: mode,
                root: root,
                onExitComplete: isPresent ? undefined : onExit,
                anchorX: anchorX,
                anchorY: anchorY,
                children: child
            }, key);
        })
    });
};
;
 //# sourceMappingURL=index.mjs.map
}}),
"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ChevronLeft)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-left", __iconNode);
;
 //# sourceMappingURL=chevron-left.js.map
}}),
"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChevronLeft": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)");
}}),
"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.552.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>ChevronRight)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-right", __iconNode);
;
 //# sourceMappingURL=chevron-right.js.map
}}),
"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChevronRight": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=coral_bleach_detector_orchids-coral-reef-ai-intelligence-main_ff38e9e6._.js.map