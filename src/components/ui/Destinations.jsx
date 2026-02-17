"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

import Image from "next/image";

const destinations = [
    { name: "India", img: "/dest-india.jpg", code: "IN" },
    { name: "Nepal", img: "/dest-nepal.jpg", code: "NP" },
    { name: "Thailand", img: "/dest-thailand.jpg", code: "TH" },
    { name: "Turkey", img: "/dest-turkey.jpg", code: "TR" },
];

const Destinations = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="destinations" ref={ref} className="section-padding bg-[var(--color-bg)]">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-14"
                >
                    <span className="inline-block rounded-full bg-[var(--color-bg-alt)] px-5 py-1.5 text-sm font-semibold text-[var(--color-primary-700)] mb-4">
                        Worldwide Medical Access
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
                        Leading Healthcare Destinations
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Connect with premier medical facilities across the globe. Choose from renowned specialists and competitive pricing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations.map((d, i) => (
                        <motion.div
                            key={d.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                            whileHover={{ scale: 1.03, y: -4 }}
                            className="rounded-2xl bg-card border border-[var(--color-border)]/50 shadow-sm overflow-hidden cursor-pointer group card"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <Image src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" width={300} height={300} />
                                <span className="absolute top-3 left-3 bg-card/80 backdrop-blur-sm text-xs font-bold rounded-full px-2.5 py-1 text-foreground">
                                    {d.code}
                                </span>
                            </div>
                            <div className="p-5">
                                <h3 className="font-semibold text-lg text-[var(--color-text-dark)]">{d.name}</h3>
                                <a href="#cta" className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary-700)] mt-1 hover:gap-2 transition-all">
                                    Get Free Quote <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Destinations;
