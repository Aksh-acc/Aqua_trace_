(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SSTForecastChart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Default data (fallback) - will be replaced with NOAA API data
const DEFAULT_REGIONS = [
    {
        region: "Lakshadweep",
        color: "#22d3ee",
        data: [
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
        trend: "+0.3°C"
    },
    {
        region: "Andaman",
        color: "#34d399",
        data: [
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
        trend: "+0.4°C"
    },
    {
        region: "Gulf Mannar",
        color: "#facc15",
        data: [
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
        trend: "+0.2°C"
    },
    {
        region: "Gulf Kutch",
        color: "#fb923c",
        data: [
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
        trend: "+0.5°C"
    },
    {
        region: "Nicobar",
        color: "#f472b6",
        data: [
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
        trend: "+0.3°C"
    }
];
const REGION_COLORS = {
    "Lakshadweep": "#22d3ee",
    "Andaman": "#34d399",
    "Gulf Mannar": "#facc15",
    "Gulf Kutch": "#fb923c",
    "Nicobar": "#f472b6"
};
function SSTForecastChart() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hoveredRegion, setHoveredRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [regions, setRegions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(DEFAULT_REGIONS);
    const [dataDate, setDataDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("2026-02-05");
    // Fetch real NOAA data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SSTForecastChart.useEffect": ()=>{
            const fetchData = {
                "SSTForecastChart.useEffect.fetchData": async ()=>{
                    try {
                        const response = await fetch("/api/noaa-data");
                        if (response.ok) {
                            const data = await response.json();
                            if (data.regions) {
                                const mappedRegions = data.regions.map({
                                    "SSTForecastChart.useEffect.fetchData.mappedRegions": (r)=>({
                                            region: r.region,
                                            color: REGION_COLORS[r.region] || "#22d3ee",
                                            data: r.forecast,
                                            trend: r.trend
                                        })
                                }["SSTForecastChart.useEffect.fetchData.mappedRegions"]);
                                setRegions(mappedRegions);
                                setDataDate(data.dataDate || "2026-02-05");
                            }
                        }
                    } catch (error) {
                        console.error("Failed to fetch NOAA data:", error);
                    // Keep using default data
                    }
                }
            }["SSTForecastChart.useEffect.fetchData"];
            fetchData();
        }
    }["SSTForecastChart.useEffect"], []);
    // Draw chart function
    const drawChart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SSTForecastChart.useCallback[drawChart]": ()=>{
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
            const padding = {
                top: 20,
                right: 50,
                bottom: 50,
                left: 20
            };
            const chartWidth = width - padding.left - padding.right;
            const chartHeight = height - padding.top - padding.bottom;
            // Clear canvas
            ctx.fillStyle = "#0f172a";
            ctx.fillRect(0, 0, width, height);
            // Find min/max values dynamically based on data
            const allValues = regions.flatMap({
                "SSTForecastChart.useCallback[drawChart].allValues": (r)=>r.data
            }["SSTForecastChart.useCallback[drawChart].allValues"]);
            const minVal = Math.floor(Math.min(...allValues) - 2);
            const maxVal = Math.ceil(Math.max(...allValues) + 1);
            const range = maxVal - minVal;
            // Draw grid lines
            ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
            ctx.lineWidth = 1;
            for(let i = 0; i <= 8; i++){
                const y = padding.top + chartHeight / 8 * i;
                ctx.beginPath();
                ctx.moveTo(padding.left, y);
                ctx.lineTo(width - padding.right, y);
                ctx.stroke();
            }
            // Y-axis labels
            ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
            ctx.font = "12px sans-serif";
            ctx.textAlign = "right";
            for(let i = 0; i <= 8; i++){
                const value = maxVal - range / 8 * i;
                const y = padding.top + chartHeight / 8 * i;
                ctx.fillText(value.toFixed(0), width - padding.right + 30, y + 4);
            }
            // Draw lines for each region
            regions.forEach({
                "SSTForecastChart.useCallback[drawChart]": (region)=>{
                    const isHovered = hoveredRegion === region.region || hoveredRegion === null;
                    const alpha = isHovered ? 1 : 0.2;
                    ctx.strokeStyle = region.color;
                    ctx.lineWidth = 2.5;
                    ctx.globalAlpha = alpha;
                    ctx.beginPath();
                    region.data.forEach({
                        "SSTForecastChart.useCallback[drawChart]": (value, i)=>{
                            const x = padding.left + chartWidth / (region.data.length - 1) * i;
                            const y = padding.top + chartHeight - (value - minVal) / range * chartHeight;
                            if (i === 0) {
                                ctx.moveTo(x, y);
                            } else {
                                ctx.lineTo(x, y);
                            }
                        }
                    }["SSTForecastChart.useCallback[drawChart]"]);
                    ctx.stroke();
                    // Draw points
                    ctx.fillStyle = region.color;
                    region.data.forEach({
                        "SSTForecastChart.useCallback[drawChart]": (value, i)=>{
                            const x = padding.left + chartWidth / (region.data.length - 1) * i;
                            const y = padding.top + chartHeight - (value - minVal) / range * chartHeight;
                            ctx.beginPath();
                            ctx.arc(x, y, 5, 0, Math.PI * 2);
                            ctx.fill();
                            // White border
                            ctx.strokeStyle = "white";
                            ctx.lineWidth = 2;
                            ctx.stroke();
                            ctx.strokeStyle = region.color;
                            ctx.lineWidth = 2.5;
                        }
                    }["SSTForecastChart.useCallback[drawChart]"]);
                    ctx.globalAlpha = 1;
                }
            }["SSTForecastChart.useCallback[drawChart]"]);
            // X-axis label with data date
            ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
            ctx.font = "12px sans-serif";
            ctx.textAlign = "center";
            ctx.fillText(`10-DAY FORECAST FROM ${dataDate}`, width / 2, height - 10);
            setIsLoading(false);
        }
    }["SSTForecastChart.useCallback[drawChart]"], [
        hoveredRegion,
        regions,
        dataDate
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SSTForecastChart.useEffect": ()=>{
            drawChart();
        }
    }["SSTForecastChart.useEffect"], [
        drawChart
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\components\\SSTForecastChart.tsx:174:4",
        "data-orchids-name": "div",
        className: "bg-slate-900 rounded-2xl p-6 h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\SSTForecastChart.tsx:176:6",
                "data-orchids-name": "div",
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        "data-orchids-id": "src\\components\\SSTForecastChart.tsx:177:8",
                        "data-orchids-name": "h3",
                        className: "text-xl font-bold text-white flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                "data-orchids-id": "src\\components\\SSTForecastChart.tsx:178:10",
                                "data-orchids-name": "Thermometer",
                                className: "w-5 h-5 text-cyan-400"
                            }, void 0, false, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            "SST 10-Day Forecast"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                        "data-orchids-id": "src\\components\\SSTForecastChart.tsx:181:8",
                        "data-orchids-name": "TrendingUp",
                        className: "w-5 h-5 text-red-400"
                    }, void 0, false, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                lineNumber: 176,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\SSTForecastChart.tsx:185:6",
                "data-orchids-name": "div",
                className: "flex flex-wrap gap-4 mb-4 justify-center",
                children: regions.map((region)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-orchids-id": "src\\components\\SSTForecastChart.tsx:187:10@regions",
                        "data-orchids-name": "button",
                        onMouseEnter: ()=>setHoveredRegion(region.region),
                        onMouseLeave: ()=>setHoveredRegion(null),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 px-3 py-1 rounded-full transition-all text-sm", hoveredRegion === region.region ? "opacity-100" : "opacity-80 hover:opacity-100"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src\\components\\SSTForecastChart.tsx:196:12@regions",
                                "data-orchids-name": "span",
                                className: "w-4 h-1 rounded-full",
                                style: {
                                    backgroundColor: region.color
                                }
                            }, void 0, false, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src\\components\\SSTForecastChart.tsx:200:12@regions",
                                "data-orchids-name": "span",
                                className: "w-2 h-2 rounded-full border-2 border-white",
                                style: {
                                    backgroundColor: region.color
                                }
                            }, void 0, false, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                                lineNumber: 200,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src\\components\\SSTForecastChart.tsx:204:12@regions",
                                "data-orchids-name": "span",
                                className: "text-white font-medium",
                                children: region.region
                            }, void 0, false, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            region.trend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src\\components\\SSTForecastChart.tsx:206:14@regions",
                                "data-orchids-name": "span",
                                className: "text-xs text-cyan-400",
                                children: region.trend
                            }, void 0, false, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                                lineNumber: 206,
                                columnNumber: 15
                            }, this)
                        ]
                    }, region.region, true, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                        lineNumber: 187,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\SSTForecastChart.tsx:213:6",
                "data-orchids-name": "div",
                className: "relative w-full h-[300px]",
                children: [
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\components\\SSTForecastChart.tsx:215:10",
                        "data-orchids-name": "div",
                        className: "absolute inset-0 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            "data-orchids-id": "src\\components\\SSTForecastChart.tsx:216:12",
                            "data-orchids-name": "RefreshCw",
                            className: "w-8 h-8 animate-spin text-cyan-400"
                        }, void 0, false, {
                            fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        "data-orchids-id": "src\\components\\SSTForecastChart.tsx:219:8@canvasRef",
                        "data-orchids-name": "canvas",
                        ref: canvasRef,
                        className: "w-full h-full",
                        style: {
                            display: "block"
                        }
                    }, void 0, false, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src\\components\\SSTForecastChart.tsx:227:6",
                "data-orchids-name": "div",
                className: "flex justify-end mt-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "data-orchids-id": "src\\components\\SSTForecastChart.tsx:228:8",
                    "data-orchids-name": "span",
                    className: "text-gray-400 text-sm",
                    children: "SST (°C)"
                }, void 0, false, {
                    fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx",
        lineNumber: 174,
        columnNumber: 5
    }, this);
}
_s(SSTForecastChart, "YY30D9Pwyr0Ztx3YU2QXqxRW6sI=");
_c = SSTForecastChart;
var _c;
__turbopack_context__.k.register(_c, "SSTForecastChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DashboardPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/camera.js [app-client] (ecmascript) <export default as Camera>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-client] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fish$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fish$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/fish.js [app-client] (ecmascript) <export default as Fish>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/waves.js [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$src$2f$components$2f$SSTForecastChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/SSTForecastChart.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/lib/utils.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Dynamically import the map component to avoid SSR issues
const CoralHeatMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/components/CoralHeatMap.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src\\app\\dashboard\\page.tsx:27:17",
            "data-orchids-name": "div",
            className: "w-full h-[600px] bg-slate-900 rounded-2xl animate-pulse"
        }, void 0, false, {
            fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
            lineNumber: 27,
            columnNumber: 18
        }, this)
});
_c = CoralHeatMap;
function DashboardPage() {
    _s();
    const [lastUpdated, setLastUpdated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const [isRefreshing, setIsRefreshing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        avgSST: 27.3,
        regionsAtRisk: 2,
        healthyPercentage: 100,
        activeNurseries: 5
    });
    // Fetch NOAA stats data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            const fetchStats = {
                "DashboardPage.useEffect.fetchStats": async ()=>{
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
                }
            }["DashboardPage.useEffect.fetchStats"];
            fetchStats();
        }
    }["DashboardPage.useEffect"], []);
    const quickStats = [
        {
            label: "Avg SST",
            value: `${stats.avgSST}°C`,
            change: "+0.3°C",
            trend: "up",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"],
            color: "text-cyan-400"
        },
        {
            label: "Regions at Risk",
            value: stats.regionsAtRisk,
            change: stats.regionsAtRisk > 0 ? "Watch" : "Clear",
            trend: stats.regionsAtRisk > 0 ? "neutral" : "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
            color: stats.regionsAtRisk > 0 ? "text-yellow-400" : "text-green-400"
        },
        {
            label: "Healthy Corals",
            value: `${stats.healthyPercentage}%`,
            change: stats.healthyPercentage >= 80 ? "Good" : "-5%",
            trend: stats.healthyPercentage >= 80 ? "up" : "down",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
            color: stats.healthyPercentage >= 80 ? "text-green-400" : "text-yellow-400"
        },
        {
            label: "Active Nurseries",
            value: stats.activeNurseries,
            change: "Online",
            trend: "neutral",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
            color: "text-primary"
        }
    ];
    const handleRefresh = async ()=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src\\app\\dashboard\\page.tsx:119:4",
        "data-orchids-name": "div",
        className: "min-h-screen bg-gradient-to-b from-background via-background to-primary/5 pt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                "data-orchids-id": "src\\app\\dashboard\\page.tsx:121:6",
                "data-orchids-name": "header",
                className: "fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src\\app\\dashboard\\page.tsx:122:8",
                    "data-orchids-name": "div",
                    className: "container mx-auto px-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:123:10",
                        "data-orchids-name": "div",
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:124:12",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:125:14",
                                        "data-orchids-name": "Link",
                                        href: "/",
                                        className: "flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:129:16",
                                                "data-orchids-name": "ArrowLeft",
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:130:16",
                                                "data-orchids-name": "span",
                                                className: "hidden sm:inline",
                                                children: "Back"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:132:14",
                                        "data-orchids-name": "div",
                                        className: "h-6 w-px bg-border"
                                    }, void 0, false, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:133:14",
                                        "data-orchids-name": "h1",
                                        className: "text-xl font-bold flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:134:16",
                                                "data-orchids-name": "Activity",
                                                className: "w-5 h-5 text-primary"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:135:16",
                                                "data-orchids-name": "span",
                                                className: "hidden sm:inline",
                                                children: "Coral Reef"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this),
                                            " Dashboard"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:139:12",
                                "data-orchids-name": "div",
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:140:14",
                                        "data-orchids-name": "div",
                                        className: "hidden sm:flex items-center gap-2 text-sm text-muted-foreground",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:141:16",
                                                "data-orchids-name": "Clock",
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:142:16",
                                                "data-orchids-name": "span",
                                                children: [
                                                    "Updated:",
                                                    " ",
                                                    lastUpdated.toLocaleTimeString("en-US", {
                                                        hour: "2-digit",
                                                        minute: "2-digit"
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 142,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:150:14@handleRefresh",
                                        "data-orchids-name": "button",
                                        onClick: handleRefresh,
                                        disabled: isRefreshing,
                                        className: "p-2 hover:bg-primary/10 rounded-full transition-colors disabled:opacity-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                            "data-orchids-id": "src\\app\\dashboard\\page.tsx:155:16",
                                            "data-orchids-name": "RefreshCw",
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5", isRefreshing && "animate-spin")
                                        }, void 0, false, {
                                            fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:159:14",
                                        "data-orchids-name": "Link",
                                        href: "/ar-view",
                                        className: "flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:163:16",
                                                "data-orchids-name": "Camera",
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:164:16",
                                                "data-orchids-name": "span",
                                                className: "hidden sm:inline",
                                                children: "AR Scan"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                "data-orchids-id": "src\\app\\dashboard\\page.tsx:171:6",
                "data-orchids-name": "main",
                className: "container mx-auto px-4 py-6 space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:173:8",
                        "data-orchids-name": "section",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\app\\dashboard\\page.tsx:174:10",
                            "data-orchids-name": "div",
                            className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
                            children: quickStats.map((stat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    "data-map-index": index,
                                    "data-orchids-id": "src\\app\\dashboard\\page.tsx:176:14@quickStats",
                                    "data-orchids-name": "motion.div",
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: index * 0.1
                                    },
                                    className: "glass rounded-2xl p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": index,
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:183:16@quickStats",
                                        "data-orchids-name": "div",
                                        className: "flex items-start justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:184:18@quickStats",
                                                "data-orchids-name": "div",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:185:20@quickStats",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground",
                                                        children: stat.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:186:20@quickStats",
                                                        "data-orchids-name": "p",
                                                        className: "text-2xl font-bold mt-1",
                                                        children: stat.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 21
                                                    }, this),
                                                    stat.change && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-map-index": index,
                                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:188:22@quickStats",
                                                        "data-orchids-name": "p",
                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm mt-1 flex items-center gap-1", stat.trend === "up" && "text-red-400", stat.trend === "down" && "text-green-400", stat.trend === "neutral" && "text-muted-foreground"),
                                                        children: [
                                                            stat.trend === "up" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:197:26",
                                                                "data-orchids-name": "TrendingUp",
                                                                className: "w-3 h-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                                lineNumber: 197,
                                                                columnNumber: 27
                                                            }, this),
                                                            stat.change
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:203:18@quickStats",
                                                "data-orchids-name": "div",
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-3 rounded-xl bg-background/50", stat.color),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "src\\app\\dashboard\\page.tsx:209:20@quickStats",
                                                    "data-orchids-name": "stat.icon",
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this)
                                }, stat.label, false, {
                                    fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:218:8",
                        "data-orchids-name": "motion.section",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.2
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:223:10",
                                "data-orchids-name": "div",
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:224:12",
                                        "data-orchids-name": "h2",
                                        className: "text-2xl font-bold flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:225:14",
                                                "data-orchids-name": "MapPin",
                                                className: "w-6 h-6 text-cyan-400"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 15
                                            }, this),
                                            "Coral Reef Monitoring Map"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 224,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:228:12",
                                        "data-orchids-name": "p",
                                        className: "text-muted-foreground mt-1",
                                        children: "Interactive heatmap visualization of sea surface temperature, thermal stress, and bleaching alerts"
                                    }, void 0, false, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CoralHeatMap, {
                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:232:10",
                                "data-orchids-name": "CoralHeatMap"
                            }, void 0, false, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:236:8",
                        "data-orchids-name": "motion.section",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.3
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:241:10",
                                "data-orchids-name": "div",
                                className: "mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:242:12",
                                        "data-orchids-name": "h2",
                                        className: "text-2xl font-bold flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"], {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:243:14",
                                                "data-orchids-name": "Thermometer",
                                                className: "w-6 h-6 text-cyan-400"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 243,
                                                columnNumber: 15
                                            }, this),
                                            "10-Day SST Forecast"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 242,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:246:12",
                                        "data-orchids-name": "p",
                                        className: "text-muted-foreground mt-1",
                                        children: "Sea surface temperature predictions for major Indian coral regions"
                                    }, void 0, false, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 246,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                lineNumber: 241,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$src$2f$components$2f$SSTForecastChart$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:250:10",
                                "data-orchids-name": "SSTForecastChart"
                            }, void 0, false, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                lineNumber: 250,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:253:8",
                        "data-orchids-name": "motion.section",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:258:10",
                                "data-orchids-name": "h2",
                                className: "text-lg font-bold mb-4 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fish$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fish$3e$__["Fish"], {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:259:12",
                                        "data-orchids-name": "Fish",
                                        className: "w-5 h-5 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this),
                                    "Quick Actions"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                lineNumber: 258,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:262:10",
                                "data-orchids-name": "div",
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:263:12",
                                        "data-orchids-name": "Link",
                                        href: "/ar-view",
                                        className: "glass rounded-2xl p-6 hover:bg-primary/5 transition-colors group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$camera$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Camera$3e$__["Camera"], {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:267:14",
                                                "data-orchids-name": "Camera",
                                                className: "w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 267,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:268:14",
                                                "data-orchids-name": "h3",
                                                className: "font-bold mb-1",
                                                children: "AR Detection"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 268,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:269:14",
                                                "data-orchids-name": "p",
                                                className: "text-sm text-muted-foreground",
                                                children: "Scan corals with your camera for real-time health analysis"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 269,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:274:12",
                                        "data-orchids-name": "Link",
                                        href: "/leaderboard",
                                        className: "glass rounded-2xl p-6 hover:bg-primary/5 transition-colors group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:278:14",
                                                "data-orchids-name": "TrendingUp",
                                                className: "w-8 h-8 text-green-400 mb-3 group-hover:scale-110 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:279:14",
                                                "data-orchids-name": "h3",
                                                className: "font-bold mb-1",
                                                children: "Leaderboard"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 279,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:280:14",
                                                "data-orchids-name": "p",
                                                className: "text-sm text-muted-foreground",
                                                children: "View top contributors and conservation efforts"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 280,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 274,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:285:12",
                                        "data-orchids-name": "Link",
                                        href: "/agent",
                                        className: "glass rounded-2xl p-6 hover:bg-primary/5 transition-colors group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:289:14",
                                                "data-orchids-name": "Waves",
                                                className: "w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:290:14",
                                                "data-orchids-name": "h3",
                                                className: "font-bold mb-1",
                                                children: "AI Assistant"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:291:14",
                                                "data-orchids-name": "p",
                                                className: "text-sm text-muted-foreground",
                                                children: "Ask questions about coral health and conservation"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 291,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:296:12",
                                        "data-orchids-name": "div",
                                        className: "glass rounded-2xl p-6 opacity-60 cursor-not-allowed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:297:14",
                                                "data-orchids-name": "AlertTriangle",
                                                className: "w-8 h-8 text-yellow-400 mb-3"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:298:14",
                                                "data-orchids-name": "h3",
                                                className: "font-bold mb-1",
                                                children: "Report Issue"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 298,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:299:14",
                                                "data-orchids-name": "p",
                                                className: "text-sm text-muted-foreground",
                                                children: "Report bleaching events or environmental concerns"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:302:14",
                                                "data-orchids-name": "span",
                                                className: "text-xs text-primary mt-2 inline-block",
                                                children: "Coming Soon"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:310:8",
                        "data-orchids-name": "motion.section",
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: 0.5
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src\\app\\dashboard\\page.tsx:315:10",
                            "data-orchids-name": "div",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("glass rounded-2xl p-4 border-l-4", stats.regionsAtRisk > 0 ? "border-yellow-400 bg-yellow-400/5" : "border-green-400 bg-green-400/5"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:321:12",
                                "data-orchids-name": "div",
                                className: "flex items-start gap-4",
                                children: [
                                    stats.regionsAtRisk > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:323:16",
                                        "data-orchids-name": "AlertTriangle",
                                        className: "w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 323,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:325:16",
                                        "data-orchids-name": "Heart",
                                        className: "w-6 h-6 text-green-400 flex-shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:327:14",
                                        "data-orchids-name": "div",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:328:16",
                                                "data-orchids-name": "h3",
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-bold", stats.regionsAtRisk > 0 ? "text-yellow-400" : "text-green-400"),
                                                children: stats.regionsAtRisk > 0 ? "Watch Advisory" : "Current Status: Stable"
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:334:16",
                                                "data-orchids-name": "p",
                                                className: "text-sm text-muted-foreground mt-1",
                                                children: stats.regionsAtRisk > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: "Slightly elevated SST anomalies detected in Lakshadweep (+0.35°C) and Nicobar (+0.31°C) regions. DHW remains at 0 - no thermal stress currently. SST forecast shows gradual warming trend over the next 10 days."
                                                }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: "All coral reef regions are showing healthy conditions. Degree Heating Week (DHW) values are at 0 across all monitored regions. SST anomalies are within normal range. Data sourced from NOAA Coral Reef Watch (Feb 2026)."
                                                }, void 0, false)
                                            }, void 0, false, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 334,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src\\app\\dashboard\\page.tsx:349:16",
                                                "data-orchids-name": "div",
                                                className: "flex items-center gap-4 mt-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:350:18",
                                                        "data-orchids-name": "Link",
                                                        href: "/ar-view",
                                                        className: "text-sm text-primary hover:underline",
                                                        children: "Start monitoring →"
                                                    }, void 0, false, {
                                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src\\app\\dashboard\\page.tsx:356:18",
                                                        "data-orchids-name": "span",
                                                        className: "text-xs text-muted-foreground",
                                                        children: [
                                                            "Last updated: ",
                                                            lastUpdated.toLocaleDateString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                        lineNumber: 356,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                        lineNumber: 327,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                                lineNumber: 321,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                        lineNumber: 310,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/dashboard/page.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "chTwBP3VdHCMVyP6OkhH6Ua435Y=");
_c1 = DashboardPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "CoralHeatMap");
__turbopack_context__.k.register(_c1, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=coral_bleach_detector_orchids-coral-reef-ai-intelligence-main_src_d8a56d7b._.js.map