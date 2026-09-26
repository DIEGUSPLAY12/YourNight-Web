"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 flex items-center justify-between"
    >
      <div className="absolute inset-0 bg-[#09030f]/50 backdrop-blur-md border-b border-purple-500/10" />
      <div className="container mx-auto max-w-6xl relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-500/20">
            <span className="text-white font-bold text-xs">YN</span>
          </div>
          <span className="text-white font-semibold tracking-tight text-lg">YourNight</span>
        </div>

        <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-100 text-sm font-medium rounded-full transition-colors backdrop-blur-sm border border-purple-500/20">
          <Download className="w-4 h-4" />
          Download APK
        </button>
      </div>
    </motion.header>
  );
}
