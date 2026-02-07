module.exports = {

"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/.next-internal/server/app/api/chat/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/src/app/api/chat/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/coral_bleach_detector/orchids-coral-reef-ai-intelligence-main/node_modules/next/server.js [app-route] (ecmascript)");
;
const GEMINI_API_KEY = ("TURBOPACK compile-time value", "AIzaSyACLC--Wwx_VmwTL8ycfC2BIEvv7wwLDVE") || "";
const SYSTEM_PROMPT = `You are an expert multilingual coral reef conservation assistant called "CoralSense". You help users understand coral health, bleaching events, marine conservation, and related topics.

Key capabilities:
- Explain coral bleaching causes, effects, and prevention
- Provide facts about coral reef ecosystems
- Answer questions about marine conservation
- Discuss climate change impacts on coral reefs
- Share information about coral nurseries and restoration efforts
- Explain sea surface temperature (SST) and Degree Heating Weeks (DHW)

Always be helpful, accurate, and encouraging about conservation efforts. Keep responses concise but informative (2-4 sentences for simple questions, more for complex topics).

If the user writes in Hindi, Tamil, Malayalam, or Bengali, respond in that same language.`;
async function POST(request) {
    try {
        const { message, language } = await request.json();
        if (!message) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Message is required"
            }, {
                status: 400
            });
        }
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        const languageHint = language !== "en" ? `\n\nIMPORTANT: The user is communicating in ${language}. Please respond in the same language.` : "";
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        role: "user",
                        parts: [
                            {
                                text: `${SYSTEM_PROMPT}${languageHint}\n\nUser message: ${message}`
                            }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    }
                ]
            })
        });
        if (!response.ok) {
            const errorData = await response.json().catch(()=>({}));
            console.error("Gemini API error:", errorData);
            return __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Failed to get AI response"
            }, {
                status: response.status
            });
        }
        const data = await response.json();
        const textContent = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!textContent) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "No response generated"
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            response: textContent
        });
    } catch (error) {
        console.error("Chat API error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$coral_bleach_detector$2f$orchids$2d$coral$2d$reef$2d$ai$2d$intelligence$2d$main$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__298c8b86._.js.map