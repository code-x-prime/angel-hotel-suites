"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[var(--color-bg-alt)] text-[var(--color-text-dark)]">
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-9 h-9 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                                <span className="font-bold text-lg text-white">P</span>
                            </div>
                            <span className="font-semibold text-xl text-[var(--color-text-dark)]">Panacea Medicare</span>
                        </div>
                        <p className="text-[var(--color-text-medium)] text-sm mb-5">
                            Your Trusted Partner in Global Healthcare
                        </p>
                        <div className="flex gap-3">
                            {["Facebook", "Instagram", "LinkedIn", "YouTube"].map((s) => (
                                <a key={s} href="#" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/20 transition-colors text-xs font-bold">
                                    {s[0]}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-4">Our Services</h4>
                        <ul className="space-y-2.5 text-sm text-primary-foreground/70">
                            {['Medical Opinion', 'Travel Assistance', 'Visa Support', 'Accommodation', 'Interpreters', 'Follow-up Care'].map((s) => (
                                <li key={s}><a href="#" className="hover:text-primary-foreground transition-colors">{s}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-4">Get in Touch</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-[var(--color-primary-700)] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold">Call Us Now</p>
                                    <p className="text-[var(--color-text-medium)]">+91-8448295915</p>
                                    <p className="text-[var(--color-text-medium)] text-xs">24/7 Available</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-[var(--color-primary-700)] flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold">Email Us</p>
                                    <p className="text-[var(--color-text-medium)]">care@panaceamedcare.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Office */}
                    <div>
                        <h4 className="font-heading font-bold text-lg mb-4">Head Office</h4>
                        <div className="flex items-start gap-3 text-sm">
                            <MapPin className="w-5 h-5 text-[var(--color-primary-700)] flex-shrink-0 mt-0.5" />
                            <div className="text-primary-foreground/70 leading-relaxed">
                                Suite No. 402, Plot No. 996,<br />
                                Sector 38, Gurgaon – 122001<br />
                                Delhi NCR, India
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Disclaimer */}
            <div className="border-t border-primary-foreground/10">
                <div className="container py-5">
                    <p className="text-xs text-primary-foreground/40 text-center mb-3">
                        The information on this website is for general knowledge purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/50">
                        <p>© 2026 Panacea MedCare. All rights reserved.</p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-primary-foreground transition-colors">Disclaimer</a>
                        </div>
                        <p>Certified Medical Tourism Facilitator</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
