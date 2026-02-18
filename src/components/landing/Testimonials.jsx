"use client";

import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    initials: "RK",
    text: "Very comfortable stay during my father's treatment at Medanta. Staff was very supportive and understanding of our situation.",
    rating: 5,
    accent: "#4f8ef7",
    stay: "7 Night Stay",
    date: "Jan 2025",
  },
  {
    name: "Sarah Jenkins",
    initials: "SJ",
    text: "Clean rooms and very close to hospital. Highly recommended for medical visits. The location saved us so much time.",
    rating: 5,
    accent: "#22c98a",
    stay: "3 Night Stay",
    date: "Dec 2024",
  },
  {
    name: "Amit Singh",
    initials: "AS",
    text: "Affordable and peaceful compared to other hotels nearby. Felt like home during a very difficult time for our family.",
    rating: 5,
    accent: "#f59e42",
    stay: "14 Night Stay",
    date: "Feb 2025",
  },
];

/* ── Animated Count Up ── */
function CountUp({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const controls = animate(0, to, {
            duration: 1.6,
            ease: "easeOut",
            onUpdate: (v) => setVal(Math.round(v * 10) / 10),
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.5 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

/* ── Tilt Card ── */
function TestimonialCard({ review, index }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 22 });
  const springY = useSpring(y, { stiffness: 180, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);

  function onMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onMouseLeave() {
    x.set(0);
    y.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={() => setHovered(true)}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
      initial={{ opacity: 0, y: 50, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white rounded-2xl p-7 shadow-[0_2px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.13)] transition-shadow duration-400 cursor-default overflow-hidden flex flex-col"
    >
      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{ background: review.accent }}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.13 + 0.35, ease: "easeOut" }}
      />

      {/* Radial glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ background: `radial-gradient(circle at 15% 85%, ${review.accent}15 0%, transparent 65%)` }}
      />

      {/* Quote icon */}
      <motion.div
        className="absolute top-5 right-5"
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.13 + 0.4, type: "spring" }}
      >
        <Quote
          className="w-9 h-9"
          style={{ color: review.accent, opacity: 0.18 }}
          fill="currentColor"
        />
      </motion.div>

      {/* Stars */}
      <motion.div
        className="flex gap-1 mb-5 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: index * 0.13 + 0.2 } } }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0, rotate: -30 },
              visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 300 } },
            }}
          >
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </motion.div>
        ))}
      </motion.div>

      {/* Review text */}
      <p className="text-slate-600 leading-relaxed mb-6 flex-1 text-sm relative z-10 italic">
        &quot;{review.text}&quot;
      </p>

      {/* Author row */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100 relative z-10">
        {/* Avatar */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ backgroundColor: review.accent }}
        >
          {review.initials}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-slate-800 text-sm">{review.name}</h4>
          <span className="text-xs text-slate-400 font-medium">{review.stay} · {review.date}</span>
        </div>
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
          style={{ backgroundColor: `${review.accent}15`, color: review.accent }}
        >
          Verified
        </span>
      </div>

      {/* Corner number */}
      <div
        className="absolute bottom-4 right-5 text-5xl font-black opacity-[0.04] select-none pointer-events-none"
        style={{ color: review.accent }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

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

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 bg-white overflow-hidden">

      {/* Blobs */}
      <Blob className="w-72 h-72 bg-yellow-100/40 -top-10 -left-16" delay={0} />
      <Blob className="w-56 h-56 bg-blue-100/40 bottom-10 -right-10" delay={2} />
      <Blob className="w-48 h-48 bg-emerald-100/30 top-1/2 right-1/4" delay={1.2} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 mb-5"
          >
            Guest Reviews
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight tracking-tight">
            What Our{" "}
            <span className="relative inline-block">
              Guests Say
              <motion.svg
                viewBox="0 0 190 12"
                className="absolute -bottom-1 left-0 w-full"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <motion.path
                  d="M4 8 Q48 2 95 8 Q142 14 186 6"
                  stroke="#f59e42"
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
            className="text-base text-slate-500"
          >
            Real experiences from families who stayed with us during medical visits to Medanta.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {testimonials.map((review, index) => (
            <TestimonialCard key={index} review={review} index={index} />
          ))}
        </div>

        {/* Google Rating Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Rating pill */}
          <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl px-6 py-4 shadow-md">
            {/* Google color dots */}
            <div className="flex gap-1">
              {["#4285F4", "#EA4335", "#FBBC05", "#34A853"].map((c, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: c }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.4 + i * 0.07 }}
                />
              ))}
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-slate-900">
                <CountUp to={4.5} suffix="" />
              </span>
              <span className="text-slate-400 text-sm font-medium">/5</span>
            </div>

            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.06, type: "spring" }}
                >
                  <Star
                    className="w-4 h-4"
                    style={{ color: i < 4 ? "#FBBC05" : "#FBBC05", fill: i < 4 ? "#FBBC05" : "#FBBC0555" }}
                  />
                </motion.div>
              ))}
            </div>

            <div className="border-l border-slate-100 pl-4">
              <div className="font-bold text-slate-800 text-sm">
                <CountUp to={500} suffix="+" />
              </div>
              <div className="text-xs text-slate-400">Google Reviews</div>
            </div>
          </div>

    
        </motion.div>

      </div>
    </section>
  );
}