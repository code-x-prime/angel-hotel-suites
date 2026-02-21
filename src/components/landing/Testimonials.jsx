"use client";

import { motion, animate } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

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
    <div className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[450px] transition-all duration-300 hover:scale-[1.01]">
      <div 
        className="relative h-full rounded-3xl p-6 md:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border flex flex-col justify-between group transition-all duration-300 backdrop-blur-sm bg-white/50"
        style={{ 
          backgroundColor: `${review.accent}08`,
          borderColor: `${review.accent}20`,
        }}
      >
        <div 
          className="absolute -top-px -left-px w-14 h-14 rounded-tl-3xl border-t-2 border-l-2 opacity-40 group-hover:opacity-100 transition-opacity"
          style={{ borderColor: review.accent }}
        />
        
        <div className="relative z-10">
          <Quote 
            className="w-10 h-10 mb-4 opacity-[0.05] absolute -top-2 -left-2 rotate-180" 
            style={{ color: review.accent }}
          />
          <div className="flex gap-0.5 mb-5 relative z-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium italic relative z-10">
            &quot;{review.text}&quot;
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-4 pt-6 border-t mt-8" style={{ borderTopColor: `${review.accent}15` }}>
          <div 
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-sm font-bold shadow-lg flex-shrink-0"
            style={{ backgroundColor: review.accent }}
          >
            {review.initials}
          </div>
          <div className="min-w-0">
            <h4 className="font-extrabold text-slate-900 text-sm md:text-base truncate">{review.name}</h4>
            <span className="text-[10px] md:text-xs text-slate-500 font-bold block truncate uppercase tracking-widest">{review.stay}</span>
          </div>
          <div className="ml-auto hidden sm:block">
             <span 
              className="text-[10px] font-black px-3 py-1.5 rounded-full border shadow-sm uppercase tracking-tighter"
              style={{ 
                backgroundColor: `${review.accent}10`, 
                color: review.accent,
                borderColor: `${review.accent}25`
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

/* ── Floating blobs ── */
function Blob({ className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
      animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 20);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      checkScroll();
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -450 : 450;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section id="reviews" className=" py-8 md:py-12 bg-white overflow-hidden">

          {/* Google Rating Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10"
        >
          {/* Rating pill */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-white border border-slate-200 rounded-2xl px-4 sm:px-8 py-3 sm:py-5 shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
            {/* Google color dots */}
            <div className="flex gap-1">
              {["#4285F4", "#EA4335", "#FBBC05", "#34A853"].map((c, i) => (
                <motion.div
                  key={i}
                  className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full"
                  style={{ backgroundColor: c }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.4 + i * 0.07 }}
                />
              ))}
            </div>

            <div className="flex items-baseline gap-1 border-l border-slate-100 pl-3 sm:pl-6">
              <span className="text-xl sm:text-3xl font-black text-slate-900 tracking-tighter">
                <CountUp to={4.7} suffix="" />
              </span>
              <span className="text-slate-400 text-[10px] sm:text-sm font-bold uppercase tracking-widest">/5</span>
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
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500"
                  />
                </motion.div>
              ))}
            </div>

            <div className="border-l border-slate-100 pl-4 sm:pl-8">
              <div className="font-black text-slate-900 text-lg sm:text-xl leading-none">
                <CountUp to={600} suffix="+" />
              </div>
              <div className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">Verified Reviews</div>
            </div>
          </div>

        </motion.div>

     

      <div className="max-w-[1440px] mx-auto relative z-10 px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-10 max-w-3xl mx-auto"
        >
          <motion.span
            className="inline-block px-6 py-2.5 rounded-full text-[11px] font-black tracking-[0.3em] uppercase text-blue-600 bg-blue-50 border border-blue-100 mb-8 shadow-sm"
          >
            The Angel Hospitality
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight tracking-tight">
            What Our{" "}
            <span className="relative inline-block">
              Guests Say
              <motion.svg
                viewBox="0 0 190 12"
                className="absolute -bottom-3 left-0 w-full"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              >
                <motion.path
                  d="M4 8 Q48 2 95 8 Q142 14 186 6"
                  stroke="#f59e42"
                  strokeWidth="5"
                  fill="none"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Explore authentic experiences from families who found comfort and healing at The Angel Hotel & Suites.
          </p>
        </motion.div>

        {/* Slider Section */}
        <div className="group relative pt-6">
          {/* Nav Buttons */}
          <div className="absolute -left-2 sm:-left-6 top-[50%] -translate-y-1/2 z-40 opacity-100 transition-all duration-500 pointer-events-none">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={cn(
                "w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white shadow-[0_10px_35px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center justify-center text-slate-900 transition-all pointer-events-auto",
                !canScrollLeft ? "opacity-20 cursor-not-allowed" : "hover:bg-slate-50 hover:scale-110 active:scale-95 shadow-blue-100"
              )}
            >
              <ChevronLeft className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>
          </div>
          <div className="absolute -right-2 sm:-right-6 top-[50%] -translate-y-1/2 z-40 opacity-100 transition-all duration-500 pointer-events-none">
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={cn(
                "w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white shadow-[0_10px_35px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center justify-center text-slate-900 transition-all pointer-events-auto",
                !canScrollRight ? "opacity-20 cursor-not-allowed" : "hover:bg-slate-50 hover:scale-110 active:scale-95 shadow-blue-100"
              )}
            >
              <ChevronRight className="w-5 h-5 sm:w-7 sm:h-7" />
            </button>
          </div>

          {/* Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/40 to-transparent z-20 pointer-events-none hidden lg:block" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/40 to-transparent z-20 pointer-events-none hidden lg:block" />

          {/* Scroll Area */}
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-10 pt-4 px-8 no-scrollbar snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollPadding: '2rem'
            }}
          >
            {testimonials.map((review, i) => (
              <div key={review.name} className="snap-center py-2 flex items-stretch">
                <TestimonialCard review={review} />
              </div>
            ))}
          </div>

          {/* Custom Scroll Indicator */}
          <div className="flex justify-center items-center gap-6 mt-2">
            <div className="w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
               <motion.div 
                 className="h-full bg-blue-600 rounded-full absolute left-0"
                 style={{ 
                    width: scrollRef.current ? `${((scrollRef.current.scrollLeft + scrollRef.current.clientWidth) / scrollRef.current.scrollWidth) * 100}%` : "25%" 
                 }}
               />
            </div>
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Scroll Experience</p>
          </div>
        </div>

        {/* View All CTA */}
        <div className="mt-20 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-4 text-slate-400"
          >
            <span className="w-12 h-px bg-slate-200" />
            <p className="text-xs font-black uppercase tracking-[0.2em]">600+ Google Patient Reviews</p>
            <span className="w-12 h-px bg-slate-200" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}