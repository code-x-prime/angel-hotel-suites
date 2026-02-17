"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Rooms", href: "#rooms" },
  { label: "Facilities", href: "#facilities" },
  { label: "Location", href: "#location" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans border-b",
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-100 py-3" 
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={cn(
                "w-10 h-10 rounded-md flex items-center justify-center font-bold text-lg transition-colors",
                scrolled ? "bg-medical-primary text-white" : "bg-white text-medical-primary"
            )}>
              A
            </div>
            <div className="flex flex-col leading-none">
              <span className={cn(
                  "text-xl font-bold tracking-tight transition-colors",
                  scrolled ? "text-medical-heading" : "text-white"
              )}>
                Angel Hotel
              </span>
              <span className={cn(
                  "text-[10px] font-semibold tracking-widest uppercase",
                  scrolled ? "text-medical-text" : "text-white/80"
              )}>
                & Suites
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              href="/"
              className={cn(
                  "text-sm font-medium transition-colors py-2 border-b-2 border-transparent",
                  scrolled ? "text-slate-600 hover:text-medical-primary" : "text-white/90 hover:text-white"
              )}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                    "text-sm font-medium transition-colors py-2 border-b-2 border-transparent",
                    scrolled ? "text-slate-600 hover:text-medical-primary" : "text-white/90 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
             <a 
               href="tel:+919958800961" 
               className={cn(
                   "flex items-center gap-2 text-sm font-semibold transition-colors",
                   scrolled ? "text-medical-primary hover:text-medical-dark" : "text-white hover:text-white/80"
               )}
             >
                <Phone className="w-4 h-4" />
                <span>+91 99588 00961</span>
             </a>
             <a
               href="#booking"
               className="bg-medical-accent hover:bg-orange-600 text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-all shadow-sm hover:shadow-md flex items-center gap-2"
             >
               Book Now
             </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
                "lg:hidden p-2 rounded-md transition-colors",
                scrolled ? "text-slate-800 hover:bg-slate-50" : "text-white hover:bg-white/10"
            )}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[64px] z-40 bg-white border-b border-gray-100 shadow-xl lg:hidden overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-slate-700 py-3 border-b border-gray-50 flex items-center justify-between"
              >
                Home
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </Link>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-slate-700 py-3 border-b border-gray-50 flex items-center justify-between"
                >
                  {link.label}
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
              <div className="pt-6 flex flex-col gap-3">
                 <a
                  href="tel:+919958800961"
                  className="bg-medical-primary/10 text-medical-primary w-full py-3 rounded-md font-semibold text-center border border-medical-primary/20 flex items-center justify-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a 
                    href="#booking"
                    className="w-full py-3 rounded-md bg-medical-accent text-white font-semibold text-center shadow-sm flex items-center justify-center gap-2"
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
