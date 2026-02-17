"use client";

import { motion } from "framer-motion";
import { Clock, Percent, Moon, Phone, ShieldCheck, Accessibility } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Only 3 Minutes from Medanta",
    desc: "No long travel after hospital visits. Walking distance."
  },
  {
    icon: Percent,
    title: "Ideal for Medical & Long Stays",
    desc: "Special discounted packages available for weekly/monthly stays."
  },
  {
    icon: Moon,
    title: "Quiet & Comfortable Rooms",
    desc: "Designed for rest and recovery. Soundproofed and peaceful."
  },
  {
    icon: Phone,
    title: "24x7 Front Desk Support",
    desc: "We understand medical emergencies. Always available to help."
  },
  {
    icon: ShieldCheck,
    title: "Affordable Pricing",
    desc: "Premium comfort without premium pricing."
  },
  {
    icon: Accessibility,
    title: "Lift & Wheelchair Access",
    desc: "Easy access to all floors. No stairs struggle for patients."
  }
];

export default function WhyChooseUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" }
    }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="why-us" className="py-24 bg-medical-light border-t border-slate-100">
      <div className="container px-6">
        
        {/* Section Heading */}
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={fadeUp}
           className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-medical-heading mb-6 tracking-tight">
            Why Families Choose Angel Hotel
          </h2>
          <p className="text-lg text-slate-600">
            Designed for medical travelers. Everything you need for a comfortable healing journey.
          </p>
        </motion.div>

        {/* 3-Column Grid */}
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={stagger}
           className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-medical-light flex items-center justify-center text-medical-primary mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-medical-heading mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
