"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How close is the hotel to Medanta Hospital?",
    answer: "We are extremely close — just 600 meters away. It takes about 3 minutes to walk, or you can take a quick rickshaw ride.",
    accent: "#4f8ef7",
  },
  {
    question: "Do you provide special rates for long stays?",
    answer: "Yes, we understand medical treatments often require extended stays. We offer discounted packages for weekly and monthly bookings.",
    accent: "#22c98a",
  },
  {
    question: "Is the hotel wheelchair accessible?",
    answer: "Yes, we have elevator access to all floors and our staff is trained to assist patients with mobility needs.",
    accent: "#f59e42",
  },
  {
    question: "Is the hotel safe for families?",
    answer: "Absolutely. We are a family-oriented hotel in a safe neighborhood (Sector 38). We have 24/7 front desk presence and CCTV surveillance.",
    accent: "#a78bfa",
  },
];

/* ── Floating blobs ── */
function Blob({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{ y: [0, -18, 0], scale: [1, 1.06, 1] }}
      transition={{ duration: 7.5, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative rounded-2xl overflow-hidden transition-shadow duration-300",
        isOpen
          ? "bg-white shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
          : "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_6px_28px_rgba(0,0,0,0.1)]"
      )}
    >
      {/* Left accent bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
        style={{ background: faq.accent }}
        animate={{ scaleY: isOpen ? 1 : 0.4, opacity: isOpen ? 1 : 0.3 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      />

      {/* Glow when open */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ background: `radial-gradient(circle at 0% 50%, ${faq.accent}10 0%, transparent 60%)` }}
      />

      {/* Question Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-5 px-6 text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0 pr-4">
          {/* Number badge */}
          <motion.div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-colors duration-300"
            style={{
              backgroundColor: isOpen ? `${faq.accent}20` : "#f1f5f9",
              color: isOpen ? faq.accent : "#94a3b8",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.div>
          <span
            className={cn(
              "text-base font-semibold transition-colors duration-300 leading-snug",
              isOpen ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
            )}
          >
            {faq.question}
          </span>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
          style={{
            backgroundColor: isOpen ? `${faq.accent}18` : "#f8fafc",
          }}
        >
          <ChevronDown
            className="w-4 h-4 transition-colors duration-300"
            style={{ color: isOpen ? faq.accent : "#94a3b8" }}
          />
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: -8 }}
              animate={{ y: 0 }}
              exit={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="pb-5 px-6 pl-16 text-slate-500 leading-relaxed text-sm"
            >
              {faq.answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden">

      {/* Blobs */}
      <Blob className="w-72 h-72 bg-blue-100/40 -top-10 -left-16" delay={0} />
      <Blob className="w-52 h-52 bg-violet-100/35 bottom-10 -right-10" delay={1.8} />

      <div className="container max-w-3xl px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 mb-5"
          >
            Got Questions?
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight tracking-tight">
            Frequently{" "}
            <span className="relative inline-block">
              Asked Questions
              <motion.svg
                viewBox="0 0 310 12"
                className="absolute -bottom-1 left-0 w-full"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <motion.path
                  d="M4 8 Q78 2 155 8 Q232 14 306 6"
                  stroke="#a78bfa"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-500 text-base max-w-xl mx-auto"
          >
            Everything you need to know before your stay with us.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3 mb-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Still have questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-2xl border border-slate-100 shadow-sm px-7 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm">Still have a question?</p>
              <p className="text-slate-400 text-xs">Our team is available 24x7 to help you.</p>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="https://wa.me/919205601379"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-green-500 hover:bg-green-600 text-white text-xs font-semibold shadow-md shadow-green-100 transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href="tel:+919205601379"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5"
            >
              📞 Call Us
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}