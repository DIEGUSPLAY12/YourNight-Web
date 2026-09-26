"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function BottomCTA() {
  return (
    <section className="py-40 bg-[#09030f] relative overflow-hidden">
      <div className="absolute inset-0 bg-fuchsia-600/5 blur-[200px] rounded-full pointer-events-none transform -translate-y-1/2" />
      
      <div className="container px-4 md:px-6 mx-auto max-w-4xl relative z-10 text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(16px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300"
        >
          Get Started
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, transform: "translateY(16px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Ready to make your next night out legendary?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, transform: "translateY(16px)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.23, 1, 0.32, 1] }}
          className="text-xl md:text-2xl text-purple-200/60 max-w-2xl mx-auto font-medium"
        >
          Stop losing memories in chaotic group chats. Start tracking, start voting, and crown the MVP.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, transform: "translateY(16px) scale(0.97)" }}
          whileInView={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", duration: 0.6, bounce: 0.15, delay: 0.24 }}
          className="pt-8"
        >
          {/* Button-in-Button Architecture */}
          <button className="group relative mx-auto pl-8 pr-2 py-2 bg-white text-black rounded-full font-bold text-xl overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-6 shadow-[0_0_60px_-15px_rgba(217,70,239,0.5)]">
            <span className="relative z-10">Download APK Now</span>
            <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:bg-black/10">
              <Download className="w-6 h-6 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-[2px]" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
