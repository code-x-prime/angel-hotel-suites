"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        name: "Ahmed Al-Rashid",
        country: "UAE",
        text: "Panacea Medicare made my knee replacement surgery in India seamless. From airport pickup to post-surgery follow-up, everything was world-class.",
    },
    {
        name: "Sarah Johnson",
        country: "USA",
        text: "I saved over 70% on my cardiac surgery. The AI matching connected me with the best surgeon in Bangkok. Incredible experience!",
    },
    {
        name: "James Okafor",
        country: "Nigeria",
        text: "The 24/7 support team was always available. My mother's cancer treatment in Delhi was handled with utmost care and professionalism.",
    },
    {
        name: "Maria Gonzalez",
        country: "Mexico",
        text: "Exceptional service from start to finish. The AI pre-screening was accurate and the hospital in Turkey exceeded all my expectations.",
    },
];

const Testimonials = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
        return () => clearInterval(timer);
    }, []);

    const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent((c) => (c + 1) % testimonials.length);

    return (
        <section id="testimonials" ref={ref} className="section-padding bg-[var(--color-bg)]">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">Patient Stories</h2>
                    <p className="text-muted-foreground">Real experiences from real patients</p>
                </motion.div>

                <div className="max-w-2xl mx-auto relative">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -40 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-2xl bg-card p-8 md:p-10 border border-[var(--color-border)]/50 shadow-sm text-center card"
                    >
                        <div className="flex justify-center gap-1 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-[var(--color-primary-700)]" />
                            ))}
                        </div>
                        <p className="text-[var(--color-text-dark)] text-lg leading-relaxed mb-6 italic">
                            &quot;{testimonials[current].text}&quot;
                        </p>
                        <p className="font-semibold text-[var(--color-text-dark)]">{testimonials[current].name}</p>
                        <p className="text-sm text-[var(--color-text-medium)]">{testimonials[current].country}</p>
                    </motion.div>

                    <div className="flex justify-center gap-3 mt-6">
                        <button onClick={prev} className="w-10 h-10 rounded-full bg-card border border-[var(--color-border)] flex items-center justify-center hover:shadow-md transition-shadow">
                            <ChevronLeft className="w-5 h-5 text-[var(--color-text-dark)]" />
                        </button>
                        <div className="flex items-center gap-2">
                            {testimonials.map((_, i) => (
                                <button key={i} onClick={() => setCurrent(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-[var(--color-primary-700)]" : "bg-[var(--color-border)]"}`} />
                            ))}
                        </div>
                        <button onClick={next} className="w-10 h-10 rounded-full bg-card border border-[var(--color-border)] flex items-center justify-center hover:shadow-md transition-shadow">
                            <ChevronRight className="w-5 h-5 text-[var(--color-text-dark)]" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
