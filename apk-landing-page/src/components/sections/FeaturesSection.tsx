"use client";

import { motion } from "framer-motion";
import { Unlock, Smartphone, Gauge, Box } from "lucide-react";

const features = [
  {
    title: "No Store Restrictions",
    description: "Install directly to your device without regional locks or store policies holding you back.",
    icon: Unlock,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Instant Updates",
    description: "Get the latest features and bug fixes before they hit the official store rollouts.",
    icon: Zap,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Lightweight Package",
    description: "Optimized binary size saves bandwidth and installs in seconds on any connection.",
    icon: Box,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Maximum Performance",
    description: "Compiled directly for Android architectures to squeeze out every drop of performance.",
    icon: Gauge,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
];

import { Zap } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            Why download the APK?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-neutral-400 text-lg"
          >
            Sideloading isn't just for developers. It's the best way to experience our app exactly as intended, without the middleman.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`w-14 h-14 rounded-2xl ${feat.bg} flex items-center justify-center mb-6`}>
                <feat.icon className={`w-7 h-7 ${feat.color}`} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-neutral-400 leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
