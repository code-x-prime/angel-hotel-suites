"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import Image from "next/image";

const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-[70vh] flex items-center bg-[var(--color-bg)] section-padding overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <Image width={1200} height={600} src={"/logo.png"} alt="Modern hospital" className="w-full h-full object-cover" />
            </div>

            <div className="container-max relative z-10">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <span className="inline-block rounded-full bg-[var(--color-bg-alt)]/70 backdrop-blur-sm border border-[var(--color-border)] px-4 py-1.5 text-sm font-semibold text-[var(--color-primary-700)] mb-6">
                            🌍 AI-Powered Medical Tourism
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[var(--color-text-dark)] leading-tight mb-4 tracking-[-0.02em]"
                    >
                        AI-Driven International Patient Care
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        className="text-lg md:text-xl text-[var(--color-text-medium)] font-medium italic mb-2"
                    >
                        Pre-screening, smarter matching, better outcomes
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                        className="text-base md:text-lg text-[var(--color-text-medium)] mb-8 max-w-xl leading-relaxed"
                    >
                        Fast, personalized global treatment plans from accredited hospitals.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#cta"
                            className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold w-full sm:w-auto"
                        >
                            Start Your AI Pre-Screening <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="https://wa.me/919958800961"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] px-7 py-3.5 text-base font-semibold text-[var(--color-primary-700)] w-full sm:w-auto"
                        >
                            <MessageCircle className="w-5 h-5" /> Talk to a Care Expert
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

export default HeroSection;
