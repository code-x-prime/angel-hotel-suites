"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle, Tag, Zap, MessageCircle, Clock } from "lucide-react";
import { useRef, useState } from "react";

const perks = [
  {
    icon: Tag,
    title: "Lowest Price Guaranteed",
    desc: "Cheaper than Agoda, Booking.com & MakeMyTrip",
    accent: "#22c98a",
    tag: "Save More",
  },
  {
    icon: CheckCircle,
    title: "No OTA Commission",
    desc: "Honest pricing, zero surprise charges",
    accent: "#4f8ef7",
    tag: "Transparent",
  },
  {
    icon: Clock,
    title: "Early Check-in Priority",
    desc: "First preference for direct bookers",
    accent: "#f59e42",
    tag: "Exclusive",
  },
  {
    icon: MessageCircle,
    title: "Direct WhatsApp Support",
    desc: "Talk directly to the hotel manager",
    accent: "#a78bfa",
    tag: "Instant Help",
  },
];

/* ── Tilt Card ── */
function PerkCard({ item, index }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 22 });
  const springY = useSpring(y, { stiffness: 180, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-7, 7]);

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
      initial={{ opacity: 0, y: 50, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.13)] transition-shadow duration-300 cursor-default overflow-hidden flex flex-col items-center text-center"
    >
      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl"
        style={{ background: item.accent }}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: index * 0.1 + 0.3, ease: "easeOut" }}
      />

      {/* Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35 }}
        style={{ background: `radial-gradient(circle at 50% 30%, ${item.accent}18 0%, transparent 70%)` }}
      />

      {/* Tag badge top-right */}
      <motion.span
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 + 0.45 }}
        className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full"
        style={{ backgroundColor: `${item.accent}18`, color: item.accent }}
      >
        {item.tag}
      </motion.span>

      {/* Icon */}
      <motion.div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mt-2 relative z-10"
        style={{ backgroundColor: `${item.accent}18` }}
        whileHover={{ scale: 1.12, rotate: [0, -6, 6, 0] }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <item.icon className="w-6 h-6" style={{ color: item.accent }} />
      </motion.div>

      <div className="relative z-10" style={{ transform: "translateZ(8px)" }}>
        <h3 className="font-bold text-slate-800 mb-2 text-base leading-snug">{item.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
      </div>

      {/* Corner number */}
      <div
        className="absolute bottom-3 right-4 text-4xl font-black opacity-[0.04] select-none pointer-events-none"
        style={{ color: item.accent }}
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

export default function DirectBooking() {
  return (
    <section className="relative py-24 bg-[#f8fafc] overflow-hidden">

      {/* Blobs */}
      <Blob className="w-72 h-72 bg-green-100/50 -top-10 -right-16" delay={0} />
      <Blob className="w-56 h-56 bg-violet-100/40 bottom-8 -left-12" delay={2} />
      <Blob className="w-48 h-48 bg-blue-100/35 top-1/2 left-1/3" delay={1.3} />

      <div className="container relative z-10 px-6">
        <div className="max-w-5xl mx-auto">

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
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-green-600 bg-green-50 border border-green-100 mb-5"
            >
              Best Price Guarantee
            </motion.span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight tracking-tight">
              Why Book{" "}
              <span className="relative inline-block">
                Directly With Us?
                <motion.svg
                  viewBox="0 0 300 12"
                  className="absolute -bottom-1 left-0 w-full"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                  <motion.path
                    d="M4 8 Q75 2 150 8 Q225 14 296 6"
                    stroke="#22c98a"
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
              className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto"
            >
              Skip the middleman fees. Get the lowest rates and best perks when you book through our official channels.
            </motion.p>
          </motion.div>

          {/* Perk Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {perks.map((item, i) => (
              <PerkCard key={i} item={item} index={i} />
            ))}
          </div>

          {/* CTA Strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white border border-slate-100 rounded-2xl shadow-sm px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5"
          >
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                <Zap className="w-4 h-4 text-green-500" />
                <span className="font-bold text-slate-800 text-sm">Ready to Book?</span>
              </div>
              <p className="text-slate-500 text-sm">Contact us directly and unlock exclusive direct-booking benefits.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="https://wa.me/919205601379"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold shadow-lg shadow-green-100 hover:shadow-green-200 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                >→</motion.span>
              </a>
              <a
                href="tel:+919205601379"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              >
                📞 Call Now
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}