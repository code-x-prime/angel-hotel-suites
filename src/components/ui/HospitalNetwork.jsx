"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2 } from "lucide-react";

const hospitals = [
    { name: "Apollo Hospital", city: "Delhi NCR" },
    { name: "Fortis Hospital", city: "Gurgaon" },
    { name: "Max Hospital", city: "Saket" },
    { name: "Medanta Hospital", city: "Gurgaon" },
    { name: "BLK Max Hospital", city: "New Delhi" },
    { name: "Bumrungrad Hospital", city: "Bangkok" },
    { name: "Memorial Hospital", city: "Istanbul" },
    { name: "Nepal Mediciti", city: "Kathmandu" },
];

const HospitalNetwork = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="hospitals" ref={ref} className="section-padding bg-[var(--color-bg)]">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block rounded-full bg-[var(--color-bg-alt)] px-5 py-1.5 text-sm font-semibold text-[var(--color-primary-700)] mb-4">
                        Trusted Medical Partners
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
                        Premier Hospital Network
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Every hospital undergoes strict quality assessment to guarantee exceptional patient care.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {hospitals.map((h, i) => (
                        <motion.div
                            key={h.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                            whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.12)" }}
                            className="rounded-2xl bg-card p-6 border border-[var(--color-border)]/50 shadow-sm cursor-pointer transition-shadow card"
                        >
                            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                                <Building2 className="w-6 h-6 text-[var(--color-primary-700)]" />
                            </div>
                            <h3 className="font-semibold text-[var(--color-text-dark)] mb-1">{h.name}</h3>
                            <p className="text-sm text-[var(--color-text-medium)]">{h.city}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HospitalNetwork;
