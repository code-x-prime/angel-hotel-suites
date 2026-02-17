"use client";

import { useEffect, useState } from "react";
import { MoveUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateScroll = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setScrollProgress((currentScroll / scrollHeight) * 100);
      }

      if (currentScroll > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const strokeDashoffset = 100 - scrollProgress;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           exit={{ opacity: 0, scale: 0.8 }}
           className="fixed bottom-6 left-6 z-[60]"
        >
          <button 
             onClick={scrollToTop}
             className="relative w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 group"
          >
             {/* Circular Progress */}
             <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-100"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="text-medical-accent transition-[stroke-dashoffset] duration-100"
                  d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="100, 100"
                  strokeDashoffset={strokeDashoffset}
                />
             </svg>
             
             {/* Icon */}
             <MoveUp className="w-5 h-5 text-medical-primary group-hover:text-medical-accent transition-colors relative z-10" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
