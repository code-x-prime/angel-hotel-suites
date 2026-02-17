"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: ""
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", checkIn: "", checkOut: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="bg-white p-8 md:p-10 shadow-2xl border border-slate-200 relative z-20 w-full max-w-lg">
       <div className="text-center mb-10">
          <span className="text-medical-accent font-bold tracking-widest uppercase text-sm mb-2 block">
            Book Your Stay
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-medical-heading">
            Quick Inquiry
          </h3>
          <div className="w-20 h-1.5 bg-medical-primary mx-auto mt-5"></div>
       </div>

       {status === "success" ? (
         <div className="text-center py-10">
           <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
             <CheckCircle className="w-8 h-8 text-green-600" />
           </div>
           <h4 className="text-2xl font-bold text-medical-heading mb-2">Thank You!</h4>
           <p className="text-lg text-slate-600">
             We have received your details. Our team will contact you shortly.
           </p>
           <button 
             onClick={() => setStatus("idle")}
             className="mt-6 text-medical-primary font-bold underline decoration-2 underline-offset-4 hover:text-medical-dark"
           >
             Book Another Room
           </button>
         </div>
       ) : (
         <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-1">
              <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">
                 Full Name
              </label>
              <input 
                required
                type="text" 
                className="w-full px-4 py-4 text-lg border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-medical-primary outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                placeholder="Ex. Amit Kumar"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone */}
              <div className="space-y-1">
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">
                   Phone
                </label>
                <input 
                  required
                  type="tel" 
                  className="w-full px-4 py-4 text-lg border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-medical-primary outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                  placeholder="+91..."
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">
                   Email
                </label>
                <input 
                  required
                  type="email" 
                  className="w-full px-4 py-4 text-lg border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-medical-primary outline-none transition-all placeholder:text-slate-400 text-slate-800 font-medium"
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {/* Check-in */}
               <div className="space-y-1">
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">
                   Check-In
                </label>
                <input 
                  required
                  type="date" 
                  className="w-full px-4 py-4 text-lg border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-medical-primary outline-none transition-all text-slate-800 font-medium cursor-pointer"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                />
              </div>

               {/* Check-out */}
               <div className="space-y-1">
                <label className="block text-sm font-bold text-slate-700 uppercase tracking-wide">
                   Check-Out
                </label>
                <input 
                  required
                  type="date" 
                  className="w-full px-4 py-4 text-lg border-2 border-slate-200 bg-slate-50 focus:bg-white focus:border-medical-primary outline-none transition-all text-slate-800 font-medium cursor-pointer"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                />
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={status === "loading"}
              className="w-full bg-medical-accent hover:bg-[#d55f32] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-xl py-5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-3 mt-4"
            >
              {status === "loading" ? (
                 <> <Loader2 className="w-6 h-6 animate-spin" /> Sending... </>
              ) : (
                 <> <Send className="w-6 h-6" /> Check Availability </>
              )}
            </button>
            
            {status === "error" && (
               <p className="text-red-500 text-center font-bold">Failed to send. Please try again or call us.</p>
            )}
         </form>
       )}
       
       <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
         <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
         Usually responds within 10 minutes
       </div>
    </div>
  );
}
