"use client";

import { motion } from "framer-motion";
import { CalendarClock, Wine, BarChart3 } from "lucide-react";

export function StepsSection() {
  const steps = [
    {
      num: "01",
      title: "Schedule the Event",
      desc: "Create an event with a start and end time. Everyone in your group decides whether they're going.",
      icon: CalendarClock,
    },
    {
      num: "02",
      title: "Track Your Drinks",
      desc: "When the event starts, track what you drink with a single tap. Upload photos directly to the event.",
      icon: Wine,
    },
    {
      num: "03",
      title: "Vote and Summarize",
      desc: "When the event ends, everyone votes for the MVP. An automatic summary is published to the chat.",
      icon: BarChart3,
    },
  ];

  return (
    <section className="py-24 bg-[#09030f]">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center mb-20 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, transform: "translateY(16px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4"
          >
            A night on YourNight
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, transform: "translateY(16px)" }}
            whileInView={{ opacity: 1, transform: "translateY(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="text-purple-200/60 text-lg md:text-xl"
          >
            Three simple steps to make your nights out legendary.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2e104f] to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, transform: "translateY(24px) scale(0.97)" }}
              whileInView={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: "spring", duration: 0.6, bounce: 0.15, delay: idx * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center p-6"
            >
              <div className="w-20 h-20 rounded-full bg-[#12051f] border border-[#2e104f] flex items-center justify-center mb-6 shadow-xl relative group overflow-hidden">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                <step.icon className="w-8 h-8 text-white relative z-10" />
                
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white border-4 border-[#09030f]">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 tracking-tight">{step.title}</h3>
              <p className="text-purple-200/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
