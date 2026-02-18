"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Wifi, Tv, Wind, Users, Star } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const rooms = [
  {
    image: "/Deluxe Room-1.jpg",
    title: "Classic Patient Room",
    desc: "Designed for recovery. Peaceful, hygienic, and equipped with all medical-stay essentials.",
    icon: Wind,
    accent: "#4f8ef7",
    tag: "Most Popular",
  },
  {
    image: "/Deluxe Room-2.jpg",
    title: "Double Occupancy",
    desc: "Perfect for a patient and an attendant. Includes two comfortable beds and ample space.",
    icon: Users,
    accent: "#22c98a",
    tag: "Family Friendly",
  },
  {
    image: "/Family Suite-1.jpg",
    title: "Family Suite",
    desc: "Extra spacious for long-term stays. Features a small seating area and premium amenities.",
    icon: Star,
    accent: "#f59e42",
    tag: "Best Value",
  },
];

const amenities = [
  "Air Conditioned",
  "Free High-Speed WiFi",
  "LED TV",
  "Daily Housekeeping",
  "Fresh Linen",
  "Room Service",
  "GST Billing Available",
];

/* ── Tilt Room Card ── */
function RoomCard({ room, index }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 22 });
  const springY = useSpring(y, { stiffness: 180, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);

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
      initial={{ opacity: 0, y: 55, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white rounded-lg overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.14)] transition-shadow duration-400 cursor-default group"
    >
      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] z-20 rounded-t-lg"
        style={{ background: room.accent }}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.12 + 0.35, ease: "easeOut" }}
      />

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        <Image
          src={room.image}
          alt={room.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-108"
          style={{ transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)" }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Tag badge */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.5 }}
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold tracking-wide shadow-md"
          style={{ backgroundColor: room.accent }}
        >
          {room.tag}
        </motion.div>

        {/* Icon circle bottom-right of image */}
        <motion.div
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
          style={{ backgroundColor: `${room.accent}cc` }}
          whileHover={{ scale: 1.18, rotate: [0, -8, 8, 0] }}
          transition={{ duration: 0.5 }}
        >
          <room.icon className="w-4 h-4 text-white" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 relative" style={{ transform: "translateZ(8px)" }}>
        {/* Glow bg on hover */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-b-2xl"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ background: `radial-gradient(circle at 20% 80%, ${room.accent}14 0%, transparent 70%)` }}
        />

        <h3 className="text-xl font-bold text-slate-800 mb-2 leading-snug relative z-10">
          {room.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4 relative z-10">{room.desc}</p>

        {/* Divider */}
        <div className="border-t border-slate-100 pt-4 flex items-center justify-between relative z-10">
          <div className="flex gap-3 text-slate-400">
            <Wifi className="w-4 h-4" />
            <Tv className="w-4 h-4" />
            <Wind className="w-4 h-4" />
          </div>

        </div>
      </div>

      {/* Corner number */}
      <div
        className="absolute bottom-4 right-5 text-5xl font-black opacity-[0.035] select-none pointer-events-none"
        style={{ color: room.accent }}
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
      animate={{ y: [0, -20, 0], scale: [1, 1.07, 1] }}
      transition={{ duration: 7.5, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function RoomHighlights() {
  return (
    <section id="rooms" className="relative py-8 md:py-12 bg-[#f8fafc] overflow-hidden">

      {/* Blobs */}
      <Blob className="w-80 h-80 bg-blue-100/50 -top-16 -right-20" delay={0} />
      <Blob className="w-60 h-60 bg-amber-100/40 bottom-10 -left-12" delay={2} />
      <Blob className="w-48 h-48 bg-emerald-100/40 top-1/2 left-1/3" delay={1.5} />

      <div className="container px-6 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 border border-blue-100 mb-5"
          >
            Accommodation
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight tracking-tight">
            Clean, Cozy &{" "}
            <span className="relative inline-block">
              Fully Equipped
              <motion.svg
                viewBox="0 0 240 12"
                className="absolute -bottom-1 left-0 w-full"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              >
                <motion.path
                  d="M4 8 Q60 2 120 8 Q180 14 236 6"
                  stroke="#4f8ef7"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>{" "}
            Rooms
          </h2>

          {/* Amenities chips */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          >
            {amenities.map((item, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: "backOut" } },
                }}
                className="flex items-center gap-1.5 text-xs md:text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                {item}
              </motion.span>
            ))}
          </motion.div>

          {/* Perfect for pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-block bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm text-sm"
          >
            <span className="font-bold text-blue-600">Perfect for: </span>
            <span className="text-slate-500">Patient attendants · Small families · Corporate short stays · Long stay guests</span>
          </motion.div>
        </motion.div>

        {/* Room Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
}