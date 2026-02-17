import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Introduction from "@/components/landing/Introduction";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import RoomHighlights from "@/components/landing/RoomHighlights";
import MedicalPackages from "@/components/landing/MedicalPackages";
import LocationAdvantage from "@/components/landing/LocationAdvantage";
import Testimonials from "@/components/landing/Testimonials";
import DirectBooking from "@/components/landing/DirectBooking";
import BookingSection from "@/components/landing/BookingSection";
import CTASection from "@/components/landing/CTASection";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";
import ScrollProgress from "@/components/landing/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Introduction />
      <WhyChooseUs />
      <RoomHighlights />
      <MedicalPackages />
      <LocationAdvantage />
      <Testimonials />
      <DirectBooking />
      <BookingSection />
      <CTASection />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
      <ScrollProgress />
    </main>
  );
}
