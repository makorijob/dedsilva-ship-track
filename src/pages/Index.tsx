import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import QuoteForm from "@/components/QuoteForm";
import TrackingSection from "@/components/TrackingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <StatsSection />
      <QuoteForm />
      <TrackingSection />
      <TestimonialsSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
