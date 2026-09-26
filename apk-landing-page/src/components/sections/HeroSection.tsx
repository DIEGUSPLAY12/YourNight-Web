"use client";

import { motion } from "framer-motion";
import { Download, ShieldCheck, Trophy, PartyPopper } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-32 pb-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <div className="flex-1 text-center lg:text-left space-y-10">
            <motion.div
              initial={{ opacity: 0, transform: "translateY(16px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm font-medium backdrop-blur-md"
            >
              <PartyPopper className="w-4 h-4 text-fuchsia-400" />
              <span>Version 1.2 is now available</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, transform: "translateY(16px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
              The ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">night-out journal</span> for your crew.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, transform: "translateY(16px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
              className="text-lg md:text-xl text-purple-100/60 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              What used to be scattered across group messages and lost photos is now a game. Track your drinks, vote for the MVP, and compete in monthly rankings. Private, automatic, and incredibly fun.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, transform: "translateY(16px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4"
            >
              <button className="group relative w-full sm:w-auto pl-8 pr-2 py-2 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-6 shadow-[0_0_40px_-10px_rgba(168,85,247,0.4)]">
                <span className="relative z-10">Download APK</span>
                <div className="w-12 h-12 rounded-full bg-black/5 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:bg-black/10">
                  <Download className="w-5 h-5 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-[2px]" />
                </div>
              </button>
              
              <p className="text-sm text-purple-300/50 flex items-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-fuchsia-500" />
                For Android &middot; Free
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, transform: "translateY(32px) scale(0.95)" }}
            animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
            transition={{ type: "spring", duration: 0.8, bounce: 0.2, delay: 0.3 }}
            className="flex-1 relative w-full max-w-md mx-auto"
          >
            <div className="p-2 rounded-[2.5rem] bg-white/[0.02] border border-white/5 shadow-2xl shadow-purple-500/10 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
              <div className="relative aspect-[9/16] w-full rounded-[calc(2.5rem-0.5rem)] bg-gradient-to-br from-[#12051f] to-[#09030f] border border-[#2e104f] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#09030f] via-[#09030f]/90 to-transparent" />
                
                <div className="absolute bottom-8 left-6 right-6 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 backdrop-blur-md border border-fuchsia-500/30 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
                    <Trophy className="w-6 h-6 text-fuchsia-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Laura is the MVP!</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-purple-300/60 font-medium">Total Points</span>
                      <span className="text-white font-bold">8 pts</span>
                    </div>
                    <div className="w-full h-2 bg-[#1c0a2e] rounded-full overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)]">
                      <motion.div 
                        initial={{ transform: "scaleX(0)" }}
                        animate={{ transform: "scaleX(1)" }}
                        style={{ transformOrigin: "left" }}
                        transition={{ duration: 1, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
                        className="h-full w-[80%] bg-gradient-to-r from-purple-500 to-fuchsia-500"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-purple-300/60 font-mono tracking-wide uppercase">Most Drinks + 3 Votes Received</p>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ transform: ["translateY(-8px)", "translateY(8px)", "translateY(-8px)"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-20 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-fuchsia-500 flex items-center justify-center">
                <PartyPopper className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-white tracking-tight">Event Live</p>
                <p className="text-xs text-purple-200/60 font-medium">Marc's Birthday</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
