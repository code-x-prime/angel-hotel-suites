"use client";

import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#023440] text-white pt-24 pb-12 font-sans border-t-4 border-medical-accent">
      <div className="container px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20 border-b border-white/5 pb-16">
          
          {/* Column 1: Brand & About (Span 4) */}
          <div className="lg:col-span-4 space-y-8">
             <Link href={"/"}>
             <Image src="/logo.png" alt="Logo" width={200} height={200} /></Link>
             <p className="text-slate-300 leading-relaxed text-sm max-w-sm font-light">
               Gurgaon&apos;s most trusted budget stay for medical travelers. 
               Dedicated to providing a peaceful, hygienic, and supportive environment for guests visiting Medanta - The Medicity.
             </p>
             <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-medical-accent hover:text-white transition-all duration-300 border border-white/5 hover:border-transparent">
                        <Icon className="w-5 h-5" />
                    </a>
                ))}
             </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-medical-accent rounded-full"></span>
            </h4>
            <ul className="space-y-4">
                {[
                    { label: "Our Rooms", href: "#rooms" },
                    { label: "Medical Packages", href: "#packages" },
                    { label: "Location Map", href: "#location" },
                    { label: "Guest Reviews", href: "#reviews" },
                    { label: "Contact Us", href: "#contact" }
                ].map((link, i) => (
                    <li key={i}>
                        <a href={link.href} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm group">
                            <ArrowRight className="w-3 h-3 text-medical-accent group-hover:translate-x-1 transition-transform" />
                            {link.label}
                        </a>
                    </li>
                ))}
             </ul>
          </div>

          {/* Column 3: Contact Info (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-medical-accent rounded-full"></span>
            </h4>
            <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-medical-accent/20 transition-colors">
                      <MapPin className="w-4 h-4 text-medical-accent" />
                    </div>
                    <div>
                        <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Visit Us</span>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            Plot 996, Sector 38,<br />
                            Near Medanta The Medicity,<br />
                            Gurgaon, Haryana 122001
                        </p>
                    </div>
                </li>
                <li className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-medical-accent/20 transition-colors">
                      <Phone className="w-4 h-4 text-medical-accent" />
                    </div>
                    <div>
                        <span className="block text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Call Us 24/7</span>
                        <a href="tel:+919205601379" className="text-base text-white hover:text-medical-accent transition-colors font-semibold">
                            +91 92056 01379
                        </a>
                    </div>
                </li>
            </ul>
          </div>

          {/* Column 4: Location Map (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
              Find Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-medical-accent rounded-full"></span>
            </h4>
            <div className="bg-white/5 p-1 rounded-xl border border-white/10 shadow-inner">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12869.079704168935!2d77.0307464001716!3d28.43561503434531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d198466e6d1ad%3A0x868fcfc79199019b!2sThe%20Angel%20Hotel%20%26%20Suites%20near%20Medanta!5e0!3m2!1sen!2sin!4v1771678261984!5m2!1sen!2sin" 
                    width="100%" 
                    height="180" 
                    style={{ border: 0, borderRadius: '8px' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    className="opacity-90 hover:opacity-100 transition-opacity grayscale-[50%] hover:grayscale-0"
                ></iframe>
            </div>
            <a href="https://maps.app.goo.gl/vch2QYkmkgTycnXRA" target="_blank" className="flex items-center gap-2 text-xs text-slate-400 mt-3 hover:text-medical-accent transition-colors group">
               <MapPin className="w-3 h-3 group-hover:animate-bounce" />
               Open in Google Maps
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
           <p>© {new Date().getFullYear()} Angel Hotel & Suites. All Rights Reserved.</p>
           
        </div>
      </div>
    </footer>
  );
}
