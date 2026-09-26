"use client";

import { motion } from "framer-motion";
import { BookOpen, Trophy, MessageCircle, WifiOff } from "lucide-react";

const features = [
  {
    title: "Night-Out Journal",
    description: "Keep track of everything in one place. YourNight records who went, what everyone had, and generates an automatic summary when the event ends.",
    icon: BookOpen,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    title: "Gamify Your Night",
    description: "Every drink counts. Win awards for 'Most Drinks' or 'Most Shots', and vote for the MVP. See your group's monthly ranking in real-time.",
    icon: Trophy,
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10",
  },
  {
    title: "Private Group Chat",
    description: "Your group gets its own private chat room. Share event summaries, banter about the MVP vote, and organize the next meetup.",
    icon: MessageCircle,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    title: "Works Offline",
    description: "Club lost signal? No problem. Record your drinks offline and the app will automatically sync everything when your connection returns.",
    icon: WifiOff,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-32 relative bg-[#09030f]">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-[#2e104f] bg-[#12051f] text-purple-300"
          >
            Core Experience
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white"
          >
            Not just another social app.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
            className="text-purple-200/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            YourNight is a private space designed exclusively for you and your friends to turn your nights out into unforgettable memories.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.32, 0.72, 0, 1] }}
              className="p-1.5 rounded-[2rem] bg-white/[0.02] border border-white/5"
            >
              <div className="h-full p-8 rounded-[calc(2rem-0.375rem)] bg-[#12051f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className={`w-14 h-14 rounded-2xl ${feat.bg} flex items-center justify-center mb-6`}>
                  <feat.icon className={`w-7 h-7 ${feat.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feat.title}</h3>
                <p className="text-purple-200/60 leading-relaxed text-lg">
                  {feat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
