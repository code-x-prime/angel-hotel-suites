"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="cta" ref={ref} className="section-padding bg-[var(--color-bg-alt)]">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="card p-8 md:p-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[var(--color-text-dark)] mb-4">
                        Start Your Healing Journey Today
                    </h2>
                    <p className="text-[var(--color-text-medium)] text-lg mb-3 max-w-xl mx-auto">
                        Get a free AI-powered treatment plan from the world&apos;s best hospitals. No obligations.
                    </p>
                    <p className="text-[var(--color-text-medium)] text-sm mb-8">
                        ⏰ Limited: Free Teleconsultation for this month only
                    </p>
                    <a
                        href="https://wa.me/918448295915"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center justify-center gap-2 px-10 py-4 text-lg font-semibold"
                    >
                        Get Free Consultation <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
};

export default CTASection;
