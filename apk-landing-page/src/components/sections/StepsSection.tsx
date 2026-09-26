"use client";

import { motion } from "framer-motion";
import { Download, Settings, Smartphone } from "lucide-react";

export function StepsSection() {
  const steps = [
    {
      num: "01",
      title: "Download",
      desc: "Tap the download button to grab the latest APK file.",
      icon: Download,
    },
    {
      num: "02",
      title: "Enable Unknown Sources",
      desc: "Go to Settings > Security and allow installation from unknown sources.",
      icon: Settings,
    },
    {
      num: "03",
      title: "Install & Launch",
      desc: "Open the downloaded file, tap install, and you're ready to go.",
      icon: Smartphone,
    },
  ];

  return (
    <section className="py-24 bg-neutral-950">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            How to Install
          </h2>
          <p className="text-neutral-400 text-lg">Three simple steps to unlock your new experience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center p-6"
            >
              <div className="w-20 h-20 rounded-full bg-neutral-900 border-2 border-neutral-800 flex items-center justify-center mb-6 shadow-xl relative group">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <step.icon className="w-8 h-8 text-white relative z-10" />
                
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white border-4 border-neutral-950">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-neutral-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
