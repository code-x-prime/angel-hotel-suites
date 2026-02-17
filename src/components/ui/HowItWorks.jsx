"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Cpu, Plane } from "lucide-react";

const steps = [
    { icon: FileText, title: "Submit Your Case", desc: "Share your medical reports and requirements through our secure portal." },
    { icon: Cpu, title: "Get AI Matching", desc: "Our AI matches you with the best hospital & doctor for your condition." },
    { icon: Plane, title: "Travel & Treatment", desc: "We handle travel, accommodation, and post-treatment follow-up care." },
];

const HowItWorks = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="how-it-works" ref={ref} className="section-padding bg-[var(--color-bg)]">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">How It Works</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Three simple steps to world-class healthcare
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
                            className="text-center card p-6"
                        >
                            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: 'var(--cta-gradient)' }}>
                                <s.icon className="w-9 h-9 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-[var(--color-primary-700)] mb-2">0{i + 1}</div>
                            <h3 className="font-semibold text-xl text-[var(--color-text-dark)] mb-2">{s.title}</h3>
                            <p className="text-[var(--color-text-medium)] text-sm leading-relaxed">{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
