"use client";

import { motion } from "framer-motion";
import { Download, ShieldCheck, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Version 2.4.0 is now available</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
            >
              Unleash the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Full Power</span> of Your Device.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto lg:mx-0"
            >
              Bypass store restrictions and get instant access to our premium features. Direct, secure, and blazing fast APK download.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 group-hover:opacity-10 transition-opacity" />
                <Download className="w-6 h-6 animate-bounce group-hover:animate-none" />
                Download APK Now
              </button>
              <p className="text-sm text-neutral-500 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                100% Virus Free
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative w-full max-w-md mx-auto"
          >
            {/* Abstract App Mockup or Shape */}
            <div className="relative aspect-[9/16] w-full rounded-[2.5rem] bg-gradient-to-br from-neutral-800 to-black border-[8px] border-neutral-900 shadow-2xl shadow-blue-500/10 overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700 ease-out">
              {/* Inner UI mock */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
              
              <div className="absolute bottom-8 left-6 right-6 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/20 backdrop-blur-md border border-blue-500/30 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Premium App</h3>
                <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, delay: 1, repeat: Infinity }}
                    className="h-full bg-gradient-to-r from-blue-500 to-emerald-500"
                  />
                </div>
                <p className="text-xs text-neutral-400 font-mono">Downloading: 45MB / 45MB</p>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-8 top-20 bg-neutral-900/80 backdrop-blur-md border border-neutral-800 p-4 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Verified</p>
                <p className="text-xs text-neutral-400">Play Protect Safe</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
