"use client";

import { motion } from "framer-motion";
import { 
  Trophy, Medal, Star, Heart, 
  Users, Globe, ArrowRight, Award, 
  CheckCircle2, Milestone
} from "lucide-react";
import { cn } from "@/lib/utils";

const contributors = [
  { id: 1, name: "Dr. Elena Marine", impact: "12,402 분석", role: "Oceanographer", rank: 1, points: 15420, avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" },
  { id: 2, name: "ReefWatch Initiative", impact: "8,210 분석", role: "NGO", rank: 2, points: 12100, avatar: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=100" },
  { id: 3, name: "Coral Lab Tokyo", impact: "5,190 분석", role: "Research Institute", rank: 3, points: 9840, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" },
  { id: 4, name: "Marine Guardian AI", impact: "4,302 분석", role: "AI Ethicist", rank: 4, points: 7200, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" },
  { id: 5, name: "Global Ocean Data", impact: "3,821 분석", role: "Data Scientist", rank: 5, points: 6500, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" },
];

const milestones = [
  { title: "Global Guardian", description: "Monitor reefs in 5 different continents.", icon: Globe, completed: true },
  { title: "Deep Insight", description: "Successfully identify 100+ bleached colonies.", icon: Star, completed: true },
  { title: "Rapid Response", description: "Issue 10+ early warning alerts for heat stress.", icon: Milestone, completed: false },
  { title: "Community Pillar", description: "Help 50 new contributors start monitoring.", icon: Users, completed: false },
];

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-background p-6 lg:p-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto shadow-sm"
          >
            <Trophy size={32} />
          </motion.div>
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight italic">Collective Impact</h1>
            <p className="text-lg text-muted-foreground font-light">
              Celebrating the scientists, explorers, and AI ethicists dedicated to preserving the heartbeat of our oceans.
            </p>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end pt-12">
          {/* 2nd Place */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card p-8 rounded-[3rem] border border-primary/10 shadow-sm relative text-center space-y-4 order-2 md:order-1"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-slate-300 flex items-center justify-center text-white border-4 border-background font-bold text-xl">2</div>
            <img src={contributors[1].avatar} className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-primary/5" alt={contributors[1].name} />
            <div>
              <h3 className="font-bold text-lg">{contributors[1].name}</h3>
              <p className="text-xs text-primary font-bold uppercase tracking-widest">{contributors[1].role}</p>
            </div>
            <div className="pt-2 border-t border-primary/5">
              <p className="text-2xl font-bold">{contributors[1].points.toLocaleString()}</p>
              <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest">Scientific Points</p>
            </div>
          </motion.div>

          {/* 1st Place */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary p-10 rounded-[4rem] shadow-2xl relative text-center space-y-6 order-1 md:order-2 md:-translate-y-8"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-accent flex items-center justify-center text-white border-8 border-background shadow-xl">
              <Medal size={40} />
            </div>
            <img src={contributors[0].avatar} className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white/20" alt={contributors[0].name} />
            <div className="text-primary-foreground">
              <h3 className="font-bold text-2xl">{contributors[0].name}</h3>
              <p className="text-xs opacity-80 font-bold uppercase tracking-widest">{contributors[0].role}</p>
            </div>
            <div className="pt-4 border-t border-white/10 text-primary-foreground">
              <p className="text-4xl font-black">{contributors[0].points.toLocaleString()}</p>
              <p className="text-[10px] uppercase opacity-60 font-bold tracking-widest">Global Impact Score</p>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card p-8 rounded-[3rem] border border-primary/10 shadow-sm relative text-center space-y-4 order-3"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center text-white border-4 border-background font-bold text-xl">3</div>
            <img src={contributors[2].avatar} className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-primary/5" alt={contributors[2].name} />
            <div>
              <h3 className="font-bold text-lg">{contributors[2].name}</h3>
              <p className="text-xs text-primary font-bold uppercase tracking-widest">{contributors[2].role}</p>
            </div>
            <div className="pt-2 border-t border-primary/5">
              <p className="text-2xl font-bold">{contributors[2].points.toLocaleString()}</p>
              <p className="text-[10px] uppercase text-muted-foreground font-bold tracking-widest">Contribution Units</p>
            </div>
          </motion.div>
        </div>

        {/* Rest of Contributors & Milestones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* List */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Users size={20} className="text-primary" />
              <h3 className="text-sm font-bold uppercase tracking-widest">Global Contributors</h3>
            </div>
            <div className="space-y-4">
              {contributors.slice(3).map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 bg-card rounded-2xl border border-primary/5 hover:border-primary/20 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground font-bold italic w-4">{c.rank}</span>
                    <img src={c.avatar} className="w-10 h-10 rounded-full object-cover" alt={c.name} />
                    <div>
                      <h4 className="font-bold text-sm">{c.name}</h4>
                      <p className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase">{c.role}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-primary">{c.points.toLocaleString()}</p>
                    <p className="text-[10px] text-muted-foreground font-bold uppercase">{c.impact}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <button className="w-full py-4 border-2 border-dashed border-primary/20 rounded-2xl text-sm font-bold text-primary hover:bg-primary/5 transition-all">
              Load More Contributors
            </button>
          </div>

          {/* Milestones */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Award size={20} className="text-primary" />
              <h3 className="text-sm font-bold uppercase tracking-widest">Active Milestones</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={cn(
                    "p-6 rounded-[2rem] border transition-all space-y-4 relative overflow-hidden",
                    m.completed ? "bg-primary/5 border-primary/20" : "bg-card border-primary/5"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-2xl flex items-center justify-center",
                    m.completed ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  )}>
                    <m.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1">{m.title}</h4>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">{m.description}</p>
                  </div>
                  {m.completed && (
                    <div className="absolute top-4 right-4 text-primary">
                      <CheckCircle2 size={16} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            {/* Join Section */}
            <div className="bg-accent/10 p-8 rounded-[3rem] border border-accent/20 space-y-4">
              <div className="flex items-center gap-2">
                <Heart size={20} className="text-accent" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-accent">Join the Mission</h3>
              </div>
              <p className="text-sm leading-relaxed italic">
                "Small contributions lead to vast awareness. Your analysis helps train the Guardian for faster, more accurate detection."
              </p>
              <button className="flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all">
                Become a Contributor <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
