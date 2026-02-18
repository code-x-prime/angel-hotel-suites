"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const features = [
  {
    icon: "/families/three-Minutes.svg",
    title: "Only 3 Minutes from Medanta",
    desc: "No long travel after hospital visits. Walking distance.",
    accent: "#4f8ef7"
  },
  {
    icon: "/families/ideal-medical.svg",
    title: "Ideal for Medical & Long Stays",
    desc: "Special discounted packages available for weekly/monthly stays.",
    accent: "#22c98a"
  },
  {
    icon: "/families/quiet-comfortable-rooms.svg",
    title: "Quiet & Comfortable Rooms",
    desc: "Designed for rest and recovery. Soundproofed and peaceful.",
    accent: "#f59e42"
  },
  {
    icon: "/families/front-desk-support.svg",
    title: "24x7 Front Desk Support",
    desc: "We understand medical emergencies. Always available to help.",
    accent: "#a78bfa"
  },
  {
    icon: "/families/affordable-pricing.svg",
    title: "Affordable Pricing",
    desc: "Premium comfort without premium pricing.",
    accent: "#f472b6"
  },
  {
    icon: "/families/lift-wheelchair-access.svg",
    title: "Lift & Wheelchair Access",
    desc: "Easy access to all floors. No stairs struggle for patients.",
    accent: "#34d399"
  }
];

/* ── Tilt Card ── */
function TiltCard({ feature, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  function onMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white rounded-2xl p-7 shadow-[0_2px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.13)] transition-shadow duration-300 cursor-default overflow-hidden group"
    >
      {/* Accent glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 30%, ${feature.accent}18 0%, transparent 70%)` }}
      />

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-6 right-6 h-[2px] rounded-full"
        style={{ background: feature.accent }}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.09 + 0.3, ease: "easeOut" }}
      />

      {/* Icon */}
      <motion.div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative z-10"
        style={{ backgroundColor: `${feature.accent}18` }}
        whileHover={{ scale: 1.12, rotate: [0, -6, 6, 0] }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={feature.icon}
          alt={feature.title}
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
        />
      </motion.div>

      {/* Text */}
      <div className="relative z-10" style={{ transform: "translateZ(10px)" }}>
        <h3 className="text-lg font-bold text-slate-800 mb-2 leading-snug">{feature.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
      </div>

      {/* Corner number */}
      <div
        className="absolute bottom-4 right-5 text-5xl font-black opacity-[0.04] select-none pointer-events-none"
        style={{ color: feature.accent }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

/* ── Floating bg blobs ── */
function Blob({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{ y: [0, -18, 0], scale: [1, 1.06, 1] }}
      transition={{ duration: 7, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 bg-[#f8fafc] border-t border-slate-100 overflow-hidden">

      {/* Background decoration */}
      <Blob className="w-72 h-72 bg-blue-100/60 -top-10 -left-16" delay={0} />
      <Blob className="w-56 h-56 bg-emerald-100/50 top-1/3 -right-10" delay={2.5} />
      <Blob className="w-48 h-48 bg-violet-100/40 bottom-10 left-1/4" delay={1.2} />

      <div className="container px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 mb-5"
          >
            Why Choose Us
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight tracking-tight">
            Why Families Choose{" "}
            <span className="relative inline-block">
              Angel Hotel
              <motion.svg
                viewBox="0 0 220 12"
                className="absolute -bottom-1 left-0 w-full"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <motion.path
                  d="M4 8 Q55 2 110 8 Q165 14 216 6"
                  stroke="#4f8ef7"
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
            className="text-base md:text-lg text-slate-500"
          >
            Designed for medical travelers. Everything you need for a comfortable healing journey.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <TiltCard key={index} feature={feature} index={index} />
          ))}
        </div>

      

      </div>
    </section>
  );
}