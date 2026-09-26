"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Why is it only available as an APK?",
    a: "Because YourNight involves drinking games and tracking consumption, standard app stores have strict policies that often misinterpret our gamification. Direct download ensures you get the uncompromised experience.",
  },
  {
    q: "Do I need a constant internet connection?",
    a: "Not at all. We know clubs often have terrible reception. You can track everything offline. The moment your phone regains signal, the app automatically syncs your drinks and votes to the server.",
  },
  {
    q: "Is it a public social network?",
    a: "No, YourNight is entirely private. You can only join a group via a direct invite link/code from the administrator. No strangers, no public feeds.",
  },
  {
    q: "Why do photos disappear after 30 days?",
    a: "To keep the app free and lightning fast, we don't hoard data. Photos expire after 30 days to save server space, but don't worry—the app warns you 3 days before so you can save the best ones to your phone. Plus, event cover photos are kept forever.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-[#09030f]">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#2e104f] rounded-2xl overflow-hidden bg-[#12051f]/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-lg font-bold text-white">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-purple-400 transition-transform ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 text-purple-200/60 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
