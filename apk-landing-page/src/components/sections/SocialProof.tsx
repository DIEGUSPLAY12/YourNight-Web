"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Finally, we don't have to argue about who drank the most. The monthly ranking is basically our fantasy football now.",
    author: "Marc T.",
    role: "Weekend Crew Admin"
  },
  {
    quote: "I love that it works even when the club is in a basement with zero signal. It just syncs when I get outside.",
    author: "Laura G.",
    role: "Back-to-back MVP"
  },
  {
    quote: "The auto-summaries the next morning are legendary. It's like having a sports recap for our Saturday nights.",
    author: "Sergio P.",
    role: "Occasional MVP"
  }
];

export function SocialProof() {
  return (
    <section className="py-24 bg-[#09030f] relative">
      <div className="absolute inset-0 bg-purple-500/5 blur-[100px] pointer-events-none" />
      <div className="container px-4 md:px-6 mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Loved by friend groups
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-purple-200/60 text-lg"
          >
            Don't just take our word for it. See what early adopters are saying.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#12051f]/50 border border-[#2e104f] flex flex-col"
            >
              <div className="text-purple-400 text-4xl font-serif mb-4">"</div>
              <p className="text-purple-100/80 text-lg leading-relaxed flex-1 mb-6">
                {t.quote}
              </p>
              <div>
                <p className="text-white font-bold">{t.author}</p>
                <p className="text-sm text-purple-400/60">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
