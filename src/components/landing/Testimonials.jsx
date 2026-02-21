"use client";

import { motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "Kirti V",
    initials: "KV",
    text: "Excellent Medical facilities and services. Maintained cleanliness and is very hygienic. Good infrastructure with proper ventilation. Dr. Pooja Mittal & Dr. T J Antony are such good and caring doctors.",
    rating: 5,
    accent: "#4f8ef7",
    stay: "Patient Family",
    date: "1 week ago",
  },
  {
    name: "Richa Rashmi",
    initials: "RR",
    text: "I had the best of care and experience. The doctors and nurses are very friendly and absolutely loving. The surgery was complicated but experienced hands made sure I was treated well.",
    rating: 5,
    accent: "#22c98a",
    stay: "Medical Stay",
    date: "2 months ago",
  },
  {
    name: "Joseline Muteesi",
    initials: "JM",
    text: "Extending sincere gratitude to the outstanding care. Especially Mr. Suraj in the Pharmacy whose kindness and excellent communication made a significant difference. Truly impressed.",
    rating: 5,
    accent: "#f59e42",
    stay: "International Patient",
    date: "4 months ago",
  },
  {
    name: "Rahul Das",
    initials: "RD",
    text: "One of the best hospitals in India with advance technology. Located conveniently in Gurgaon Sector 38. Professional environment and smooth coordination across departments.",
    rating: 5,
    accent: "#9333ea",
    stay: "Local Guide",
    date: "2 weeks ago",
  },
  {
    name: "Disha Gupta",
    initials: "DG",
    text: "Doctors explained the RFA procedure clearly which gave us confidence. Extremely supportive nursing team. admission to post-procedure care was well-managed and organized.",
    rating: 5,
    accent: "#06b6d4",
    stay: "Family Stay",
    date: "4 weeks ago",
  },
  {
    name: "Sanjeev Dhawan",
    initials: "SD",
    text: "Knowledgeable doctors and attentive nursing staff. Cleanliness and hygiene were well maintained. High-quality medical care with a human touch. Highly recommend for any treatment.",
    rating: 5,
    accent: "#ec4899",
    stay: "Verified Guest",
    date: "1 month ago",
  },
  {
    name: "Dr. Darshan Parida",
    initials: "DP",
    text: "Modern infrastructure that puts you at ease. The ENT surgery went precisely as explained. The nursing staff were incredibly helpful and genuinely caring throughout our stay.",
    rating: 5,
    accent: "#f97316",
    stay: "Doctor Guest",
    date: "1 month ago",
  },
  {
    name: "Sangay Zam",
    initials: "SZ",
    text: "Kind and helpful staff. Excellent care from the robotic physiotherapy and speech therapy teams. My son felt much better and stronger. Friendly and supportive environment.",
    rating: 5,
    accent: "#14b8a6",
    stay: "Family Stay",
    date: "1 month ago",
  },
  {
    name: "Piyush Singh",
    initials: "PS",
    text: "Thorough professional doctors (Dr Preeti) for our child's delivery. Competent and attentive nursing staff. Clean facilities and helpful floor managers.",
    rating: 5,
    accent: "#6366f1",
    stay: "First Time Parent",
    date: "3 months ago",
  },
  {
    name: "Karn Singh",
    initials: "KS",
    text: "Getting treatment from the Cancer Institute for 6 months. Team and doctors are very cooperative and professional. Nursing staff (Anil & Dimple) is superb. Recovering well.",
    rating: 5,
    accent: "#ef4444",
    stay: "Long Term Patient",
    date: "1 month ago",
  },
  {
    name: "Pradeep Nath",
    initials: "PN",
    text: "Extraordinary patient care by outstanding doctors (Dr Adarsh Chaudhary). The inpatient care is personal and reassuring. Special thanks to the ever-smiling nursing team.",
    rating: 5,
    accent: "#3b82f6",
    stay: "Medical Stay",
    date: "1 month ago",
  },
  {
    name: "Choco Choczy",
    initials: "CC",
    text: "Great services after my C-section. Nursing staff (Kabool, Kirti, Sayani) and GDA team were always there for help. Floor incharge took regular updates. Grateful for the care.",
    rating: 5,
    accent: "#fbbf24",
    stay: "Patient Family",
    date: "3 months ago",
  }
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

function TestimonialCard({ review }) {
  return (
    <div className="flex-shrink-0 w-[350px] md:w-[450px] h-[220px] mx-4 transition-transform duration-300 hover:scale-[1.02]">
      <div 
        className="relative h-full rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border flex flex-col justify-between group transition-all duration-300 backdrop-blur-sm"
        style={{ 
          backgroundColor: `${review.accent}08`,
          borderColor: `${review.accent}15`,
        }}
      >
        {/* Decorative elements */}
        <div 
          className="absolute -top-px -left-px w-12 h-12 rounded-tl-3xl border-t-2 border-l-2 opacity-40 group-hover:opacity-100 transition-opacity"
          style={{ borderColor: review.accent }}
        />
        
        <div className="relative z-10">
          <div className="flex gap-0.5 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-slate-700 text-sm leading-relaxed font-medium italic line-clamp-3">
            &quot;{review.text}&quot;
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-3 pt-4 border-t mt-auto" style={{ borderTopColor: `${review.accent}10` }}>
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-md flex-shrink-0"
            style={{ backgroundColor: review.accent }}
          >
            {review.initials}
          </div>
          <div className="min-w-0">
            <h4 className="font-bold text-slate-900 text-sm truncate">{review.name}</h4>
            <span className="text-[10px] text-slate-500 font-semibold block truncate uppercase tracking-wider">{review.stay}</span>
          </div>
          <div className="ml-auto">
             <span 
              className="text-[10px] font-bold px-3 py-1 rounded-full border shadow-sm"
              style={{ 
                backgroundColor: `${review.accent}10`, 
                color: review.accent,
                borderColor: `${review.accent}20`
              }}
            >
              Verified Stay
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const MarqueeRow = ({ items, direction = 1, speed = 40 }) => {
  return (
    <div className="relative overflow-hidden flex py-4">
      <motion.div 
        className="flex"
        animate={{ 
          x: direction > 0 ? [0, -1800] : [-1800, 0] 
        }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear",
          repeatType: "loop"
        }}
        style={{ width: "max-content" }}
      >
        {[...items, ...items, ...items, ...items].map((review, i) => (
          <TestimonialCard key={i} review={review} />
        ))}
      </motion.div>
    </div>
  );
};

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
    <section id="reviews" className="relative py-8 md:py-12 bg-white overflow-hidden">

          {/* Google Rating Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
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
                <CountUp to={4.7} suffix="" />
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
                <CountUp to={600} suffix="+" />
              </div>
              <div className="text-xs text-slate-400">Google Reviews</div>
            </div>
          </div>

    
        </motion.div>

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

            {/* Infinite Carousel Rows */}
        <div className="relative">
          {/* Gradient Overlays for Fade Effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
          
          <MarqueeRow items={testimonials.slice(0, 6)} direction={1} />
          <MarqueeRow items={testimonials.slice(6, 12)} direction={-1} />
        </div>

    

      </div>
    </section>
  );
}