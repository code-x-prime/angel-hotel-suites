"use client";

import BookingForm from "./BookingForm";

export default function BookingSection() {
    return (
        <section id="booking" className="py-20 bg-medical-light px-4">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-12">
                <div className="text-center md:text-left max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold text-medical-heading mb-6 leading-tight">Book Your Stay Today</h2>
                    <p className="text-slate-600 text-xl mb-8 leading-relaxed font-light">
                        Fill out this simple form to get a callback or check availability directly. 
                        <br className="hidden md:block" /> No payment required upfront.
                    </p>
                </div>
                <BookingForm />
            </div>
        </section>
    );
}
