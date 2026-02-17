"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Users, Clock } from "lucide-react";

const badges = [
  { icon: Users, label: "5000+ Patients Trusted" },
  { icon: ShieldCheck, label: "JCI Accredited Hospitals" },
  { icon: Clock, label: "24/7 International Support" },
  { icon: Award, label: "Award Winning Service" },
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-white border-b border-gray-50">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 px-6 py-4 rounded-full bg-medical-alt border border-white shadow-sm hover:shadow-md transition-all cursor-default"
            >
              <div className="p-1.5 rounded-full bg-medical-teal-100 text-medical-teal-700">
                <badge.icon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-slate-700 text-sm md:text-base">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
