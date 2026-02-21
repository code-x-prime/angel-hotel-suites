"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Wifi, Tv, Wind, Users, Star } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const rooms = [
  {
    image: "/Deluxe Room-1.jpg",
    title: "Deluxe Room",
    desc: "Experience luxury and comfort in our Deluxe Room. Thoughtfully designed with premium amenities to ensure your stay is nothing short of perfect. King Size Double Bed Sleeps Max Guests 3 Size 180 sq ft",
    icon: Wind,
    accent: "#4f8ef7",
    tag: "Most Popular",
    price: "₹2000",
  },
  {
    image: "/Suite-1.jpg",
    title: "Studio Suite",
    desc: "The Studio Suite Room offers a spacious 350 sq. ft. layout thoughtfully designed for comfort and convenience. It features a king-size double bed with 8' thick orthopedic mattress along with a separate seating area, perfect for relaxing or informal meetings.",
    icon: Users,
    accent: "#22c98a",
    tag: "Family Friendly",
    price: "₹3500",
  },
  {
    image: "/Family Suite-1.jpg",
    title: "Family Suite",
    desc: "The Family Suite Room spans an expansive 600 sq. ft., designed with two separate bedrooms, each with its own attached washroom for complete privacy and comfort. A dedicated seating area provides the perfect space for family bonding or relaxation. The suite also includes a fully furnished private kitchen, making it ideal for extended stays and a true home-away-from-home experience.",
    icon: Star,
    accent: "#f59e42",
    tag: "Best Value",
    price: "₹7000",
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
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative bg-white rounded-lg overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.07)] hover:shadow-[0_12px_48px_rgba(0,0,0,0.14)] transition-shadow duration-400 cursor-default group"
    >
      {/* Top Accent Line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px] z-20 rounded-t-lg"
        style={{ background: room.accent }}
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: index * 0.12 + 0.35 }}
      />

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
        <Image
          src={room.image}
          alt={room.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Tag */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold shadow-md"
          style={{ backgroundColor: room.accent }}
        >
          {room.tag}
        </div>

        {/* Icon */}
        <div
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
          style={{ backgroundColor: room.accent }}
        >
          <room.icon className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {room.title}
        </h3>

        <p className="text-sm text-slate-500 mb-4">
          {room.desc}
        </p>

        {/* Divider + Price */}
        <div className="border-t border-slate-100 pt-4 flex items-center justify-between ">
          <div className="flex gap-3 text-slate-400">
            <Wifi className="w-4 h-4" />
            <Tv className="w-4 h-4" />
            <Wind className="w-4 h-4" />
          </div>

          {/* Price */}
          <div className="text-right">
            <p className="text-xs text-slate-400">Starting from</p>
            <p className="text-lg font-bold" style={{ color: room.accent }}>
              {room.price}{" "}
              <span className="text-xs font-medium text-slate-400">
                onward
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Corner Number */}
      <div
        className="absolute bottom-4 right-5 text-5xl font-black opacity-[0.035]"
        style={{ color: room.accent }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

/* ── Main Section ── */
export default function RoomHighlights() {
  return (
    <section id="rooms" className="relative py-8 md:py-12 bg-[#f8fafc]">
      <div className="container px-6 mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase text-blue-600 bg-blue-50 border border-blue-100 mb-5">
            Accommodation
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-5">
            Clean, Cozy & Fully Equipped Rooms
          </h2>

          {/* Amenities */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {amenities.map((item, i) => (
              <span
                key={i}
                className="text-xs md:text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 shadow-sm"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="inline-block bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm text-sm">
            <span className="font-bold text-blue-600">Perfect for: </span>
            <span className="text-slate-500">
              Patient attendants · Small families · Corporate short stays · Long stay guests
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}