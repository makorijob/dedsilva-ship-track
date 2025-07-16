import { Button } from "@/components/ui/button";
import { Truck, Plane, Ship, ArrowRight } from "lucide-react";
import heroShipping from "@/assets/hero-shipping.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroShipping})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="text-sm font-medium">Trusted Since 2015 🚢</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Delivering Results
            <span className="block text-primary">that Endure</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Global logistics solutions connecting your business to the world. 
            Fast, reliable, and secure shipping services across air and ocean routes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Get Instant Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px] border-white text-white hover:bg-white hover:text-black">
              Track Shipment
            </Button>
          </div>

          {/* Service Icons */}
          <div className="flex justify-center items-center space-x-8 md:space-x-12">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <Plane className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium">Air Freight</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <Ship className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium">Ocean Freight</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium">Land Transport</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;