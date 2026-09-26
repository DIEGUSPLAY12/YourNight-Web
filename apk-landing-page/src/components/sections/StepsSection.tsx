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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            A night on YourNight
          </h2>
          <p className="text-purple-200/60 text-lg">Three simple steps to make your nights out legendary.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2e104f] to-transparent -translate-y-1/2 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center p-6"
            >
              <div className="w-20 h-20 rounded-full bg-[#12051f] border-2 border-[#2e104f] flex items-center justify-center mb-6 shadow-xl relative group">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <step.icon className="w-8 h-8 text-white relative z-10" />
                
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold text-white border-4 border-[#09030f]">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-purple-200/60">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
