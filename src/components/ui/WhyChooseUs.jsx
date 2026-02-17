"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, DollarSign, Stethoscope, Clock, ShieldCheck, Heart } from "lucide-react";

const features = [
    { icon: Globe, title: "Global Network", desc: "Access to 100+ hospitals across 4 countries" },
    { icon: DollarSign, title: "Cost Savings", desc: "Save up to 80% on medical treatments" },
    { icon: Stethoscope, title: "Expert Doctors", desc: "Internationally trained specialist surgeons" },
    { icon: Clock, title: "Fast Turnaround", desc: "Treatment plans within 48 hours" },
    { icon: ShieldCheck, title: "Accredited Care", desc: "JCI & NABH certified hospitals only" },
    { icon: Heart, title: "End-to-End Support", desc: "Visa, travel, stay & follow-up included" },
];

const WhyChooseUs = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="why-us" ref={ref} className="section-padding bg-[var(--color-bg)]">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">Why Choose Us</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Trusted by thousands of international patients worldwide
                    </p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                            className="rounded-2xl bg-card p-6 border border-[var(--color-border)]/50 shadow-sm card"
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(14,116,144,0.08)' }}>
                                <f.icon className="w-6 h-6 text-[var(--color-primary-700)]" />
                            </div>
                            <h3 className="font-semibold text-[var(--color-text-dark)] mb-1">{f.title}</h3>
                            <p className="text-sm text-[var(--color-text-medium)]">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
