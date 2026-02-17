"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import AnimatedButton from "@/components/ui/AnimatedButton";

const navLinks = [
  { label: "Rooms", href: "#rooms" },
  { label: "Facilities", href: "#facilities" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Slower stagger for "ek ek karke" effect
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed z-50 transition-all duration-500 ease-in-out font-sans flex items-center justify-center",
          scrolled
            ? "top-4 left-0 right-0 mx-auto w-[90%] max-w-7xl rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-white/20 py-3"
            : "top-0 left-0 w-full bg-transparent py-5 border-b border-white/10"
        )}
      >
        <div className="w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group z-50 relative">
            <div
              className={cn(
                "w-10 h-10 rounded-md flex items-center justify-center font-bold text-lg transition-colors duration-300",
                scrolled
                  ? "bg-medical-primary text-white"
                  : "bg-white text-medical-primary"
              )}
            >
              A
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={cn(
                  "text-xl font-bold tracking-tight transition-colors duration-300",
                  scrolled ? "text-medical-heading" : "text-white"
                )}
              >
                Angel Hotel
              </span>
              <span
                className={cn(
                  "text-[10px] font-semibold tracking-widest uppercase transition-colors duration-300",
                  scrolled ? "text-medical-text" : "text-white/80"
                )}
              >
                & Suites
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center gap-8"
          >
            <motion.div variants={itemVariants}>
              <Link
                href="/"
                className={cn(
                  "text-sm font-medium transition-colors py-2 relative group",
                  scrolled
                    ? "text-slate-600 hover:text-[#066F89]"
                    : "text-white/90 hover:text-white"
                )}
              >
                Home
                <span
                  className={cn(
                    "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                    scrolled ? "bg-[#066F89]" : "bg-white"
                  )}
                />
              </Link>
            </motion.div>
            {navLinks.map((link) => (
              <motion.div key={link.label} variants={itemVariants}>
                <a
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors py-2 relative group",
                    scrolled
                      ? "text-slate-600 hover:text-[#066F89]"
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                      scrolled ? "bg-[#066F89]" : "bg-white"
                    )}
                  />
                </a>
              </motion.div>
            ))}
          </motion.nav>

          {/* Desktop Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="hidden lg:flex items-center gap-6"
          >
            <a
              href="tel:+919958800961"
              className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-colors duration-300",
                scrolled
                  ? "text-medical-primary hover:text-medical-dark"
                  : "text-white hover:text-white/80"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>+91 99588 00961</span>
            </a>
            <AnimatedButton
              href="#booking"
              className="px-6 py-2.5 text-sm flex items-center gap-2"
            >
              Book Now
            </AnimatedButton>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 z-50 relative focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className={cn(
                  "w-6 h-0.5 block transition-colors duration-300",
                  scrolled || mobileOpen ? "bg-slate-800" : "bg-white"
                )}
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className={cn(
                  "w-6 h-0.5 block transition-colors duration-300",
                  scrolled || mobileOpen ? "bg-slate-800" : "bg-white"
                )}
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className={cn(
                  "w-6 h-0.5 block transition-colors duration-300",
                  scrolled || mobileOpen ? "bg-slate-800" : "bg-white"
                )}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 pt-24 pb-8 z-40 bg-white border-b border-gray-100 shadow-xl lg:hidden"
          >
            <div className="px-6 flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-slate-700 py-3 border-b border-gray-50 flex items-center justify-between hover:text-[#066F89] transition-colors"
              >
                Home
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-slate-700 py-3 border-b border-gray-50 flex items-center justify-between hover:text-[#066F89] transition-colors"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
              <div className="pt-8 flex flex-col gap-4">
                <a
                  href="tel:+919958800961"
                  className="bg-medical-primary/10 text-medical-primary w-full py-3 rounded-md font-semibold text-center border border-medical-primary/20 flex items-center justify-center gap-2 hover:bg-medical-primary/20 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="#booking"
                  className="w-full py-3 rounded-md bg-[#E86C3D] hover:bg-orange-600 text-white font-semibold text-center shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Your Stay
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
