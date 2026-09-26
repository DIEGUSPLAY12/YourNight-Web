"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Pricing() {
  return (
    <section className="py-24 bg-[#09030f] border-t border-[#2e104f]">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Simple Pricing
          </h2>
          <p className="text-purple-200/60 text-lg">No ads, no tracking. Just pure fun.</p>
        </div>

        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[#12051f] border border-fuchsia-500/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <span className="bg-fuchsia-500/20 text-fuchsia-400 text-xs font-bold px-3 py-1 rounded-full border border-fuchsia-500/30">
                100% Free
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Early Adopter</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-bold text-white">$0</span>
              <span className="text-purple-300/50">/ forever</span>
            </div>
            
            <p className="text-purple-200/60 mb-8 pb-8 border-b border-[#2e104f]">
              Everything you need to turn your group's nights out into a competitive game.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Unlimited events and drinks tracking",
                "Private group chat",
                "MVP voting & Monthly Rankings",
                "Offline syncing",
                "Shared photo gallery (30-day retention)",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-purple-100">
                  <CheckCircle2 className="w-5 h-5 text-fuchsia-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-colors">
              Download the APK
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
