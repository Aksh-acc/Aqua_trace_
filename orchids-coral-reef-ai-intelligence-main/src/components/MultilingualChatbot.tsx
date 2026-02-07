"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageSquare, X, Send, Languages, CheckCircle2, 
  AlertCircle, Info, HelpCircle, Search, Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

const LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
  { code: "ml", name: "മലയാളം", flag: "🇮🇳" },
  { code: "bn", name: "বাংলা", flag: "🇮🇳" },
];

const UI_TEXT = {
  en: { placeholder: "Ask about coral reefs...", title: "Coral Assistant", initial: "Hello! I am your multilingual coral intelligence assistant. Ask me anything about reef health, coral bleaching, or marine conservation." },
  hi: { placeholder: "प्रवाल भित्तियों के बारे में पूछें...", title: "प्रवाल सहायक", initial: "नमस्ते! मैं आपका बहुभाषी प्रवाल खुफिया सहायक हूँ। मुझसे रीफ स्वास्थ्य, प्रवाल विरंजन या समुद्री संरक्षण के बारे में कुछ भी पूछें।" },
  ta: { placeholder: "பவளப்பாறைகள் பற்றி கேளுங்கள்...", title: "பவள உதவியாளர்", initial: "வணக்கம்! நான் உங்கள் பன்மொழி பவள நுண்ணறிவு உதவியாளர். பாறை ஆரோக்கியம், பவள வெளுத்தல் அல்லது கடல் பாதுகாப்பு பற்றி என்னிடம் எதையும் கேளுங்கள்." },
  ml: { placeholder: "പവിഴപ്പുറ്റുകളെ കുറിച്ച് ചോദിക്കൂ...", title: "പവിഴ അസിസ്റ്റന്റ്", initial: "ഹലോ! ഞാൻ നിങ്ങളുടെ ബഹുഭാഷാ പവിഴ ഇന്റലിജൻസ് അസിസ്റ്റന്റാണ്. റീഫ് ആരോഗ്യം, പവിഴ ബ്ലീച്ചിംഗ്, അല്ലെങ്കിൽ സമുദ്ര സംരക്ഷണം എന്നിവയെക്കുറിച്ച് എന്നോട് എന്തും ചോദിക്കൂ." },
  bn: { placeholder: "প্রবাল প্রাচীর সম্পর্কে জিজ্ঞাসা করুন...", title: "প্রবাল সহকারী", initial: "হ্যালো! আমি আপনার বহুভাষিক প্রবাল বুদ্ধিমত্তা সহকারী। প্রাচীর স্বাস্থ্য, প্রবাল ব্লিচিং বা সামুদ্রিক সংরক্ষণ সম্পর্কে আমাকে কিছু জিজ্ঞাসা করুন।" }
};

// Unique ID generator to prevent React key collisions
let chatMessageIdCounter = 1;
const generateChatMessageId = () => {
  return `chat-${chatMessageIdCounter++}-${Math.random().toString(36).substring(2, 9)}`;
};

export default function MultilingualChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [messages, setMessages] = useState<{ id: string; role: "user" | "bot"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ id: generateChatMessageId(), role: "bot", content: UI_TEXT[lang as keyof typeof UI_TEXT].initial }]);
    }
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { id: generateChatMessageId(), role: "user" as const, content: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
          language: lang,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        id: generateChatMessageId(), 
        role: "bot", 
        content: data.response || "I apologize, but I couldn't process your request. Please try again." 
      }]);
    } catch (error) {
      console.error("Chat error:", error);
      // Fallback message in case of API failure
      const fallbackMessages: Record<string, string> = {
        en: "I'm having trouble connecting right now. Please try again in a moment.",
        hi: "मुझे अभी कनेक्ट करने में परेशानी हो रही है। कृपया कुछ देर बाद पुनः प्रयास करें।",
        ta: "இப்போது இணைப்பதில் சிக்கல் உள்ளது. சிறிது நேரம் கழித்து மீண்டும் முயற்சிக்கவும்.",
        ml: "ഇപ്പോൾ കണക്റ്റ് ചെയ്യുന്നതിൽ എനിക്ക് പ്രശ്നമുണ്ട്. ദയവായി കുറച്ച് സമയത്തിന് ശേഷം വീണ്ടും ശ്രമിക്കുക.",
        bn: "আমি এই মুহূর্তে সংযোগ করতে সমস্যা হচ্ছে। অনুগ্রহ করে কিছুক্ষণ পরে আবার চেষ্টা করুন।"
      };
      setMessages(prev => [...prev, { 
        id: generateChatMessageId(), 
        role: "bot", 
        content: fallbackMessages[lang] || fallbackMessages.en 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[380px] h-[550px] bg-card border border-primary/20 rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-6 bg-primary text-primary-foreground flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/20">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight">{UI_TEXT[lang as keyof typeof UI_TEXT].title}</h3>
                  <p className="text-[10px] opacity-70 font-bold uppercase tracking-widest">Active Neural Link</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-2 p-3 bg-primary/5 border-b border-primary/10 overflow-x-auto no-scrollbar">
              <Languages size={14} className="text-primary ml-2 flex-shrink-0" />
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold whitespace-nowrap transition-all",
                    lang === l.code ? "bg-primary text-primary-foreground" : "bg-card border border-primary/10 hover:bg-primary/5"
                  )}
                >
                  {l.flag} {l.name}
                </button>
              ))}
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-gradient-to-b from-transparent to-primary/5"
            >
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: m.role === "user" ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={cn(
                    "max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed",
                    m.role === "user" 
                      ? "ml-auto bg-primary text-primary-foreground rounded-tr-none shadow-md shadow-primary/20" 
                      : "bg-white border border-primary/10 rounded-tl-none shadow-sm"
                  )}
                >
                  {m.content}
                </motion.div>
              ))}
              {isTyping && (
                <div className="bg-white border border-primary/10 rounded-3xl rounded-tl-none p-4 flex gap-1 items-center w-16">
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-card border-t border-primary/10">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  placeholder={UI_TEXT[lang as keyof typeof UI_TEXT].placeholder}
                  className="flex-1 bg-primary/5 border border-primary/10 rounded-2xl py-3 px-4 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all pr-12"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                />
                <button 
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="absolute right-2 p-2 bg-primary text-primary-foreground rounded-xl disabled:opacity-50 transition-all active:scale-95"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 relative group",
          isOpen ? "bg-red-500 text-white rotate-90" : "bg-primary text-primary-foreground"
        )}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 border-2 border-background rounded-full animate-pulse" />
        )}
        <div className="absolute -inset-1 rounded-full border border-primary/20 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>
    </div>
  );
}
