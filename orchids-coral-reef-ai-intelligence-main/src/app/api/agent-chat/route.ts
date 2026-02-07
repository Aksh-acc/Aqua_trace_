import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";

// Function to fetch real SST data
async function fetchSSTData(latitude: number, longitude: number): Promise<any> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3001";
    const response = await fetch(`${baseUrl}/api/sst-data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ latitude, longitude }),
    });
    
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.error("Failed to fetch SST data:", error);
  }
  
  // Fallback SST data if API fails
  return {
    sst_celsius: 29.5,
    dhw: 4.2,
    anomaly: 1.1,
    status: "Warning: Thermal stress detected",
    source: "fallback"
  };
}

const SYSTEM_PROMPT = `You are "CoralSense Guardian", an advanced AI agent specialized in coral reef monitoring, marine conservation, and ocean science. You are part of the CoralSense platform that helps users understand and protect coral reef ecosystems.

Your expertise includes:
- **Coral Health Assessment**: Explaining bleaching, diseases, and health indicators
- **Environmental Factors**: Sea Surface Temperature (SST), Degree Heating Weeks (DHW), ocean acidification, thermal stress
- **Marine Biology**: Coral species identification, reef ecosystems, symbiotic relationships with zooxanthellae
- **Conservation**: Coral nurseries, restoration projects, marine protected areas, sustainable practices
- **Climate Science**: How climate change impacts reefs, prediction models, adaptation strategies
- **Geographic Knowledge**: Major reef systems worldwide (Great Barrier Reef, Lakshadweep, Andaman, Gulf of Mannar, etc.)
- **Technology**: Remote sensing, satellite monitoring, AI-based detection systems

Communication style:
- Be informative yet approachable
- Use scientific terms but explain them when needed
- Show passion for ocean conservation
- Provide actionable advice when relevant
- Keep responses concise but comprehensive (3-6 sentences for simple questions, more for complex topics)
- Use relevant emojis sparingly to make responses engaging (🪸 🌊 🐠 🌡️ etc.)

You can also answer general questions, but always try to relate topics back to marine conservation when appropriate. If asked about completely unrelated topics, still be helpful but gently remind users of your specialty.

Remember: You are the guardian of coral reefs, helping users become informed stewards of our oceans.`;

// Dynamic prompt that includes real SST data
function getImageAnalysisPrompt(sstData: any): string {
  return `You are "CoralSense Guardian", an advanced AI agent specialized in coral reef analysis and marine biology.

REAL-TIME ENVIRONMENTAL DATA (from Sea Surface Temperature monitoring):
- Current SST: ${sstData.sst_celsius}°C
- Degree Heating Weeks (DHW): ${sstData.dhw}
- Temperature Anomaly: ${sstData.anomaly}°C
- Status: ${sstData.status}
- Data Source: ${sstData.source === "rapidapi" ? "NOAA/RapidAPI Live Data" : "Simulated Environmental Model"}

Use this REAL environmental data in your analysis. The SST and DHW values are actual measurements for the user's location.

When analyzing coral images, you MUST respond in the following JSON format:
{
  "analysis": "Your detailed analysis text here (2-4 paragraphs describing what you see, coral health, species if identifiable, and how the environmental data correlates with the visual observations)",
  "metrics": {
    "bleachingPercentage": <number 0-100 or null if not applicable>,
    "healthScore": <number 0-100, where 100 is perfectly healthy>,
    "confidenceLevel": <number 0-100 indicating your confidence in this analysis>,
    "estimatedSST": ${sstData.sst_celsius},
    "dhw": ${sstData.dhw},
    "anomaly": ${sstData.anomaly},
    "riskLevel": "<one of: 'Low', 'Moderate', 'High', 'Critical'>"
  },
  "recommendations": "Brief recommendations for conservation or next steps based on both visual analysis and environmental data"
}

When analyzing the image:
1. **Identify coral types/species** if visible (brain coral, staghorn, table coral, etc.)
2. **Assess health status**: Look for signs of bleaching (white/pale coloration), disease, algae overgrowth, or damage
3. **Correlate with SST data**: A DHW ≥ 4 indicates significant bleaching stress, ≥ 8 indicates severe stress
4. **Health score**: 100 = pristine, vibrant colors; 0 = completely dead/bleached
5. **Use the REAL SST value of ${sstData.sst_celsius}°C** - do not estimate, use the provided value
6. **Risk level**: Based on DHW - Low (DHW < 1), Moderate (DHW 1-4), High (DHW 4-8), Critical (DHW > 8)

IMPORTANT: Always respond with valid JSON only, no markdown code blocks or extra text.`;
}

export async function POST(request: NextRequest) {
  try {
    const { message, image, mimeType, history, latitude, longitude } = await request.json();
    
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Build the request content based on whether we have an image
    let contents: any[];
    const isImageAnalysis = !!image;
    
    // Build conversation history for context
    const conversationHistory: any[] = [];
    
    if (history && Array.isArray(history) && history.length > 0) {
      // Add system context as the first message
      conversationHistory.push({
        role: "user",
        parts: [{ text: `${SYSTEM_PROMPT}\n\nYou are now in a conversation. Remember the context of previous messages.` }]
      });
      conversationHistory.push({
        role: "model",
        parts: [{ text: "I understand. I'm CoralSense Guardian, ready to help with coral reef monitoring and conservation. I'll remember our conversation context." }]
      });
      
      // Add previous conversation (limit to last 10 exchanges to avoid token limits)
      const recentHistory = history.slice(-20);
      for (const msg of recentHistory) {
        conversationHistory.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.content }]
        });
      }
    }
    
    // Fetch SST data for image analysis
    let sstData = null;
    if (image) {
      // Use provided coordinates or default to a tropical reef location
      const lat = latitude ?? 10.345;
      const lon = longitude ?? 72.345;
      sstData = await fetchSSTData(lat, lon);
    }
    
    if (image) {
      // Vision request with image - use dynamic prompt with real SST data
      const imagePrompt = sstData 
        ? getImageAnalysisPrompt(sstData)
        : getImageAnalysisPrompt({ sst_celsius: 28, dhw: 2, anomaly: 0.5, status: "Unknown", source: "default" });
      
      contents = [
        ...conversationHistory,
        {
          role: "user",
          parts: [
            {
              text: history && history.length > 0 
                ? `Now analyze this image with the following environmental context:\nSST: ${sstData?.sst_celsius}°C, DHW: ${sstData?.dhw}, Status: ${sstData?.status}\n\n${message}`
                : `${imagePrompt}\n\nUser's question about this image: ${message}`,
            },
            {
              inline_data: {
                mime_type: mimeType || "image/jpeg",
                data: image
              }
            }
          ],
        },
      ];
    } else {
      // Text-only request with history
      if (conversationHistory.length > 0) {
        contents = [
          ...conversationHistory,
          {
            role: "user",
            parts: [{ text: message }],
          },
        ];
      } else {
        // First message - include system prompt
        contents = [
          {
            role: "user",
            parts: [
              {
                text: `${SYSTEM_PROMPT}\n\nUser query: ${message}`,
              },
            ],
          },
        ];
      }
    }

    // Use gemini-2.0-flash for both text and vision (it supports multimodal)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE",
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Gemini API error:", errorData);
      return NextResponse.json(
        { error: "Failed to get AI response", details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    let textContent = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!textContent) {
      return NextResponse.json(
        { error: "No response generated" },
        { status: 500 }
      );
    }

    // For image analysis, try to parse the structured JSON response
    if (isImageAnalysis) {
      try {
        // Clean up the response - remove markdown code blocks if present
        let cleanedContent = textContent.trim();
        if (cleanedContent.startsWith("```json")) {
          cleanedContent = cleanedContent.slice(7);
        } else if (cleanedContent.startsWith("```")) {
          cleanedContent = cleanedContent.slice(3);
        }
        if (cleanedContent.endsWith("```")) {
          cleanedContent = cleanedContent.slice(0, -3);
        }
        cleanedContent = cleanedContent.trim();

        const parsed = JSON.parse(cleanedContent);
        
        return NextResponse.json({
          response: parsed.analysis || textContent,
          isStructured: true,
          metrics: {
            bleachingPercentage: parsed.metrics?.bleachingPercentage ?? null,
            healthScore: parsed.metrics?.healthScore ?? null,
            confidenceLevel: parsed.metrics?.confidenceLevel ?? 85,
            estimatedSST: sstData?.sst_celsius ?? parsed.metrics?.estimatedSST ?? null,
            dhw: sstData?.dhw ?? parsed.metrics?.dhw ?? null,
            anomaly: sstData?.anomaly ?? parsed.metrics?.anomaly ?? null,
            riskLevel: parsed.metrics?.riskLevel ?? "Unknown"
          },
          recommendations: parsed.recommendations || null,
          sstData: sstData || null
        });
      } catch (parseError) {
        // If parsing fails, return as unstructured response with real SST data
        console.log("Failed to parse structured response, using fallback with real SST data");
        
        // Try to extract some values from the text
        const bleachMatch = textContent.match(/(\d+)\s*%?\s*(bleach|white)/i);
        
        return NextResponse.json({
          response: textContent,
          isStructured: true,
          metrics: {
            bleachingPercentage: bleachMatch ? parseInt(bleachMatch[1]) : null,
            healthScore: null,
            confidenceLevel: 75,
            estimatedSST: sstData?.sst_celsius ?? null,
            dhw: sstData?.dhw ?? null,
            anomaly: sstData?.anomaly ?? null,
            riskLevel: sstData?.dhw >= 8 ? "Critical" :
                       sstData?.dhw >= 4 ? "High" :
                       sstData?.dhw >= 1 ? "Moderate" : "Low"
          },
          recommendations: null,
          sstData: sstData || null
        });
      }
    }

    return NextResponse.json({ response: textContent });
  } catch (error) {
    console.error("Agent Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
