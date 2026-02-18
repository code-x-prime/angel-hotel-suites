"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Building2, Utensils, ArrowRight } from "lucide-react";

export default function LocationAdvantage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const locationFeatures = [
    { 
      icon: MapPin, 
      title: "3 Minutes to Medanta", 
      desc: "Walking distance or a quick rickshaw ride." 
    },
    { 
      icon: Building2, 
      title: "Close to Sohna Road", 
      desc: "Hub for shopping, dining, and corporate offices." 
    },
    { 
      icon: Navigation, 
      title: "Easy Access to HUDA City Centre", 
      desc: "Connected to Delhi Metro (Yellow Line)." 
    },
    { 
      icon: Utensils, 
      title: "Nearby Restaurants & Pharmacy", 
      desc: "Everything you need is just a few steps away." 
    }
  ];

  return (
    <section id="location" className="py-8 md:py-12 bg-[#EAF3F6]">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content & Cards */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <span className="text-medical-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
                Prime Location
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-medical-heading leading-tight mb-4">
                Sector 38, Gurgaon <br/>
                <span className="text-slate-500 text-2xl md:text-4xl">Connected & Convenient</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                Located in a safe, quiet neighborhood just steps away from Medanta The Medicity. 
                Perfect for patients needing quick hospital access.
              </p>
            </div>

            <div className="space-y-4">
              {locationFeatures.map((feature, i) => (
                <motion.div 
                  key={i} 
                  variants={item}
                  className="flex items-start gap-4 p-6 bg-white rounded-md border-l-4 border-medical-primary shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-medical-light flex items-center justify-center text-medical-primary shrink-0 mt-1">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-medical-heading mb-1">{feature.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={item} className="mt-4">
              <a 
                href="https://maps.google.com/?q=Medanta+The+Medicity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-medical-primary font-bold hover:text-medical-dark transition-colors group"
              >
                Get Directions to Hotel
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[500px] w-full rounded-lg overflow-hidden shadow-lg border border-white/50 relative bg-slate-200"
          >
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.816867272767!2d77.0401!3d28.4245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d196414777271%3A0x6924847248364e52!2sMedanta%20-%20The%20Medicity!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="brightness-[1.02] contrast-[1.05]"
              ></iframe>
              
              <div className="absolute inset-0 pointer-events-none rounded-lg ring-1 ring-inset ring-black/5"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
