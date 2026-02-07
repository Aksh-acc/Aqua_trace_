"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, Waves, ShieldAlert, Zap, Globe, 
  ThermometerSun, MessageCircle, Send, Users, 
  Heart, ExternalLink, QrCode, Mail, Phone,
  Trophy, Target, BarChart3, Activity, Camera
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import ARScannerSection from "@/components/ARScannerSection";
import MultilingualChatbot from "@/components/MultilingualChatbot";

const stats = [
  { label: "Ocean Warming", value: "+1.2°C", description: "Average increase since 1900", icon: ThermometerSun },
  { label: "Coral at Risk", value: "75%", description: "Global reefs facing thermal stress", icon: ShieldAlert },
  { label: "Oxygen Produced", value: "50%", description: "Coming from our living oceans", icon: Waves },
  { label: "Species Support", value: "25%", description: "Marine life depends on reefs", icon: Globe },
];

const milestones = [
  { title: "Great Barrier Recovery", status: "Active", progress: 65, goal: "Restore 500 hectares of primary reef matrix", icon: Target },
  { title: "Mesoamerican Monitoring", status: "Critical", progress: 32, goal: "Deploy 200 neural scanning buoys", icon: Activity },
  { title: "Coral Triangle Nursery", status: "On Track", progress: 88, goal: "Outplant 10,000 heat-resistant fragments", icon: Heart },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background z-10" />
          <img 
            src="https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&q=80&w=2000" 
            alt="Ocean Coral"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full glass text-primary-foreground text-sm font-medium mb-6">
              Living Climate Intelligence
            </span>
            <h1 className="text-5xl md:text-8xl text-white mb-8 leading-[1.1] text-glow font-bold">
              Observing the pulse <br /> of our oceans.
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 mb-10 font-light leading-relaxed">
              CoralSense AI monitors thermal stress across global reefs in real-time, 
              translating complex climate data into actionable insights for conservation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/dashboard"
                className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105"
              >
                View Reef Intelligence
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/agent"
                className="flex items-center gap-2 px-8 py-4 glass text-white rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
              >
                Talk to the Agent
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

        {/* Intelligence & Social Section */}
        <section className="w-full py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* WhatsApp/Telegram QR Div */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="lg:col-span-2 bg-primary/5 rounded-[2.5rem] p-10 border border-primary/10 flex flex-col md:flex-row items-center gap-10"
              >
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-600 text-[10px] font-bold uppercase tracking-widest">
                    Live Updates
                  </div>
                  <h3 className="text-3xl font-bold">Join the Intelligence Feed</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Get real-time bleaching alerts and climate insights directly on your preferred messenger. Scan to connect with our automated monitoring bot.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="https://wa.me/14155238886?text=join%20plenty-brought"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary font-bold text-sm hover:text-green-500 transition-colors cursor-pointer"
                    >
                      <MessageCircle size={18} /> WhatsApp
                    </a>
                    <div className="flex items-center gap-2 text-primary font-bold text-sm">
                      <Send size={18} /> Telegram
                    </div>
                  </div>
                </div>
                <a 
                  href="https://wa.me/14155238886?text=join%20plenty-brought"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-48 h-48 bg-white p-2 rounded-3xl shadow-xl shadow-primary/5 relative group cursor-pointer hover:scale-105 transition-transform"
                >
                  <img 
                    src="/whatsapp-qr.png" 
                    alt="Scan QR to join WhatsApp Coral Bot"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-3xl">
                    <span className="text-sm font-bold text-green-600">📱 Open WhatsApp</span>
                  </div>
                </a>
              </motion.div>

              {/* Adopt a Reef Div */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-accent text-white rounded-[2.5rem] p-10 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <Heart className="text-white group-hover:scale-110 transition-transform" size={40} fill="currentColor" />
                  <h3 className="text-3xl font-bold">Adopt a <br /> Living Reef</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Sponsor a specific nursery site and receive monthly AI-generated health reports and visual growth updates.
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-white/20 pt-6">
                  <span className="font-bold">Explore Nurseries</span>
                  <ArrowRight size={20} />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ARScannerSection />

        {/* Impact Section - Full Width Immersive */}

      <section className="w-full py-24 bg-muted/30">
        <div className="w-full px-6 md:px-12 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Global Impact</span>
              <h2 className="text-4xl md:text-6xl font-bold">Collective Conservation Effort</h2>
            </div>
            <p className="max-w-md text-muted-foreground text-lg">
              Every scan and contribution feeds into the global neural model, improving our ability to predict and prevent mass bleaching events.
            </p>
          </div>

          {/* Active Milestones - Full Width Across Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-[2.5rem] p-10 border border-primary/5 shadow-sm space-y-8"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <m.icon size={28} />
                  </div>
                  <span className={cn(
                    "px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider",
                    m.status === "Active" ? "bg-green-500/10 text-green-600" : 
                    m.status === "Critical" ? "bg-red-500/10 text-red-600" : "bg-blue-500/10 text-blue-600"
                  )}>
                    {m.status}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-2xl mb-2">{m.title}</h4>
                  <p className="text-muted-foreground">{m.goal}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold">
                    <span>Progress</span>
                    <span>{m.progress}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${m.progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Global Contributions - Full Width Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full bg-foreground text-background rounded-[3.5rem] p-12 md:p-20 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] rounded-full translate-x-1/2" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
              <div className="lg:col-span-3 space-y-8">
                <h3 className="text-5xl md:text-6xl font-bold leading-tight">Global Contributions Registry</h3>
                <p className="text-background/70 text-lg leading-relaxed max-w-2xl">
                  A transparent record of every image uploaded, every reef verified, and every dollar donated to the Living Planet Network. Together, we build the world's most comprehensive dataset for coral resilience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                    Explore Global Registry
                  </button>
                  <button className="px-10 py-4 border-2 border-white/20 text-white rounded-full text-lg font-bold hover:bg-white/10 transition-all">
                    Download Data
                  </button>
                </div>
              </div>
              
              <div className="lg:col-span-2 grid grid-cols-2 gap-x-12 gap-y-16">
                <div className="space-y-2 border-l-2 border-primary/40 pl-8">
                  <span className="block text-xs uppercase font-bold text-primary tracking-widest">Reefs Monitored</span>
                  <span className="text-4xl md:text-5xl font-bold tracking-tight">12,482</span>
                </div>
                <div className="space-y-2 border-l-2 border-primary/40 pl-8">
                  <span className="block text-xs uppercase font-bold text-primary tracking-widest">Neural Scans</span>
                  <span className="text-4xl md:text-5xl font-bold tracking-tight">850K+</span>
                </div>
                <div className="space-y-2 border-l-2 border-primary/40 pl-8">
                  <span className="block text-xs uppercase font-bold text-primary tracking-widest">Contributors</span>
                  <span className="text-4xl md:text-5xl font-bold tracking-tight">45,102</span>
                </div>
                <div className="space-y-2 border-l-2 border-primary/40 pl-8">
                  <span className="block text-xs uppercase font-bold text-primary tracking-widest">Hectares Saved</span>
                  <span className="text-4xl md:text-5xl font-bold tracking-tight">1,240</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Experts / Support Section */}
      <section className="w-full py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold tracking-widest uppercase text-xs">Direct Support</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">Consult with Marine Scientists</h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                  Need professional intervention for a local reef? Connect directly with our network of coral doctors, oceanographers, and policy experts.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-card border border-primary/10 flex items-start gap-4 hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">Emergency Hotline</h5>
                    <p className="text-xs text-muted-foreground">response@coralsense.ai</p>
                  </div>
                </div>
                <div className="p-6 rounded-3xl bg-card border border-primary/10 flex items-start gap-4 hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm">24/7 Response</h5>
                    <p className="text-xs text-muted-foreground">+1 (800) CORAL-AI</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-primary/5 rounded-[3rem] p-12 border border-primary/10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/5 outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Organization</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/5 outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Oceanic Trust" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Topic</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/5 outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                    <option>Consult with Coral Doctor</option>
                    <option>Request Nursery Setup</option>
                    <option>Media Inquiry</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Message</label>
                  <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-white border border-primary/5 outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none" placeholder="Describe the environmental situation..."></textarea>
                </div>
                <button className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.01] transition-transform">
                  Send Consultation Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (Original) */}
      <section className="w-full py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl border border-primary/10 bg-card hover:border-primary/30 transition-colors shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-4xl font-bold text-primary mb-2 tracking-tight">{stat.value}</h3>
                <p className="text-lg font-semibold text-foreground mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Intro Section (Original) */}
      <section className="w-full py-32 ocean-gradient">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <span className="text-primary font-bold tracking-widest uppercase text-xs">Meet the Guardian</span>
              <h2 className="text-4xl md:text-6xl leading-tight font-bold">
                An intelligence that <br /> 
                <span className="text-primary">sees beyond</span> the surface.
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Camera size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Live Scan Technology</h4>
                    <p className="text-muted-foreground">Directly upload from your camera or provide high-resolution imagery for instant neural assessment of coral health.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Zap size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Neural Analysis</h4>
                    <p className="text-muted-foreground">The agent identifies early signs of bleaching through multi-spectral imagery and thermal modeling.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Waves size={14} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Predictive Reasoning</h4>
                    <p className="text-muted-foreground">Not just observing today, but calculating Degree Heating Weeks (DHW) to forecast risk for the next 90 days.</p>
                  </div>
                </div>
              </div>
              <Link 
                href="/agent"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-full font-bold hover:bg-primary hover:text-white transition-all"
              >
                Learn How It Works
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=1000" 
                  alt="AI Agent Visual"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                
                {/* Simulated UI Elements */}
                <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-white text-xs font-bold uppercase tracking-wider">High Risk Alert</span>
                    </div>
                    <span className="text-white/60 text-xs">Great Barrier Reef</span>
                  </div>
                  <p className="text-white text-sm font-medium">
                    "Thermal stress detected at Sector 4. Bleaching probability increased to 64% due to rising Sea Surface Temperatures."
                  </p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/30 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full py-32 border-t border-primary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">The ocean is speaking. <br /> Are you listening?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/dashboard"
              className="px-8 py-3 bg-foreground text-background rounded-full font-bold hover:bg-foreground/90 transition-all"
            >
              Explore the Map
            </Link>
            <Link 
              href="/leaderboard"
              className="px-8 py-3 bg-muted text-foreground rounded-full font-bold hover:bg-muted/80 transition-all"
            >
              Join the Movement
            </Link>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 border-t border-primary/5 text-center text-muted-foreground text-sm">
        <p>© 2026 CoralSense AI. Part of the Living Planet Network.</p>
      </footer>
      
      <MultilingualChatbot />
    </div>
  );
}
