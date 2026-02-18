"use client";

import BookingForm from "./BookingForm";
import TrueFocus from "../TrueFocus";

export default function BookingSection() {
    return (
        <section id="booking" className="py-20 bg-medical-light px-4">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-12">
                <div className="text-center md:text-left max-w-5xl mx-auto">
                    <TrueFocus 
                        sentence="Book Your Stay Today"
                        manualMode={false}
                        blurAmount={5}
                        borderColor="#5227FF"
                        animationDuration={0.5}
                        pauseBetweenAnimations={1}
                        className="justify-center md:justify-start mb-6"
                        wordClassName="text-3xl md:text-5xl font-bold text-medical-heading cursor-pointer"
                    />
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
