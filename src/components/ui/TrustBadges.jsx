"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, ShieldCheck, Headphones } from "lucide-react";

const badges = [
    { icon: Users, label: "5000+ Patients", sub: "Globally Trusted" },
    { icon: ShieldCheck, label: "Accredited Hospitals", sub: "JCI & NABH Certified" },
    { icon: Headphones, label: "24/7 Support", sub: "Multilingual Care Team" },
];

const TrustBadges = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="section-padding bg-[var(--color-bg)]">
            <div className="container-max">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {badges.map((b, i) => (
                        <motion.div
                            key={b.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                            className="flex items-center gap-4 rounded-xl bg-card p-6 shadow-sm border border-[var(--color-border)]/50 card"
                        >
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--cta-gradient)' }}>
                                <b.icon className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <p className="font-semibold text-[var(--color-text-dark)] text-lg">{b.label}</p>
                                <p className="text-sm text-[var(--color-text-medium)]">{b.sub}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
