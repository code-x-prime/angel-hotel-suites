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
    question: "Is the hotel safe for families?",
    answer: "Absolutely. We are a family-oriented hotel in a safe neighborhood (Sector 38). We have 24/7 front desk presence and CCTV surveillance."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container max-w-3xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-medical-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need to know about your stay.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group rounded-lg px-2 -mx-2 transition-colors duration-300 hover:bg-slate-50/50"
        aria-expanded={isOpen}
      >
        <span className={cn(
            "text-lg font-semibold transition-colors duration-300",
            isOpen ? "text-medical-primary" : "text-slate-800 group-hover:text-medical-primary"
        )}>
            {faq.question}
        </span>
        <motion.div
           animate={{ rotate: isOpen ? 180 : 0 }}
           transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <ChevronDown 
                className={cn(
                    "w-5 h-5 text-slate-400 transition-colors duration-300",
                    isOpen && "text-medical-primary"
                )} 
            />
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -10 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-2 text-slate-600 leading-relaxed font-light text-lg">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
