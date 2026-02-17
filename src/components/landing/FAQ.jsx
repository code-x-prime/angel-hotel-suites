"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How close is the hotel to Medanta Hospital?",
    answer: "We are extremely close — just 600 meters away. It takes about 3 minutes to walk, or you can take a quick rickshaw ride."
  },
  {
    question: "Do you provide special rates for long stays?",
    answer: "Yes, we understand medical treatments often require extended stays. We offer discounted packages for weekly and monthly bookings."
  },
  {
    question: "Is the hotel wheelchair accessible?",
    answer: "Yes, we have elevator access to all floors and our staff is trained to assist patients with mobility needs."
  },
  {
    question: "Is it safe for families?",
    answer: "Absolutely. We are a family-oriented hotel in a safe neighborhood (Sector 38). We have 24/7 front desk presence and CCTV surveillance."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container max-w-3xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-medical-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need to know about your stay.
          </p>
        </div>
        
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
      >
        <span className={cn(
            "text-lg font-semibold transition-colors",
            isOpen ? "text-medical-primary" : "text-slate-800 group-hover:text-medical-primary"
        )}>
            {faq.question}
        </span>
        <ChevronDown 
            className={cn(
                "w-5 h-5 text-slate-400 transition-transform duration-300",
                isOpen && "rotate-180 text-medical-primary"
            )} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-slate-600 leading-relaxed font-light text-lg">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
