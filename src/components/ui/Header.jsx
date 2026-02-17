"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Destinations", href: "#destinations" },
    { label: "Hospitals", href: "#hospitals" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav shadow-md py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container-max flex items-center justify-between">
                <a href="#hero" className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--cta-gradient)' }}>
                        <span className="text-white font-semibold text-lg">P</span>
                    </div>
                    <span className="font-semibold text-xl text-[var(--color-text-dark)]">
                        Panacea <span className="text-[var(--color-primary-700)]">Medicare</span>
                    </span>
                </a>

                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            className="text-sm font-semibold text-[var(--color-text-medium)] hover:text-[var(--color-primary-700)] transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-4">
                    <a
                        href="tel:+918448295915"
                        className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary-700)]"
                    >
                        <Phone className="w-4 h-4" /> +91 84482 95915
                    </a>
                    <a
                        href="#cta"
                        className="btn-primary inline-flex items-center justify-center px-5 py-2.5 text-sm"
                    >
                        Free Consultation
                    </a>
                </div>

                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden p-2 text-[var(--color-text-dark)]"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden glass-nav border-t border-[var(--color-border)]/50 overflow-hidden"
                    >
                        <div className="container-max py-4 flex flex-col gap-3">
                            {navLinks.map((l) => (
                                <a
                                    key={l.label}
                                    href={l.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-sm font-medium text-[var(--color-text-dark)] py-2"
                                >
                                    {l.label}
                                </a>
                            ))}
                            <a
                                href="#cta"
                                onClick={() => setMobileOpen(false)}
                                className="btn-primary inline-flex items-center justify-center px-5 py-3 text-sm font-semibold w-full"
                            >
                                Free Consultation
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
