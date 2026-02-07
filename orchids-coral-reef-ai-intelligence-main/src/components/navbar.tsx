"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Waves, LayoutDashboard, Bot, Trophy, Menu, X, Scan } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Intelligence", href: "/", icon: Waves },
  { name: "AR View", href: "/ar-view", icon: Scan },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Agent", href: "/agent", icon: Bot },
  { name: "Impact", href: "/leaderboard", icon: Trophy },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="glass flex items-center gap-2 px-4 py-2 rounded-full shadow-lg border border-primary/10">
        <Link href="/" className="flex items-center gap-2 mr-4">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
            <Waves size={18} />
          </div>
          <span className="font-bold tracking-tight text-primary hidden sm:inline-block">CoralSense AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors",
                  isActive ? "text-primary-foreground" : "text-muted-foreground hover:text-primary"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
                <span className="flex items-center gap-2">
                  <item.icon size={16} />
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>

        <button 
          className="md:hidden p-2 text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-4 right-4 glass p-4 rounded-3xl md:hidden flex flex-col gap-2"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-medium transition-colors",
                pathname === item.href ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
              )}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
