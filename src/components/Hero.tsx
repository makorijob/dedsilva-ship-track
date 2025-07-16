import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Truck, Plane, Ship, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import heroShipping from "@/assets/hero-shipping.jpg";
import logisticsWarehouse from "@/assets/logistics-warehouse.jpg";
import portTerminal from "@/assets/port-terminal.jpg";
import cargoPlane from "@/assets/cargo-plane.jpg";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      src: heroShipping,
      caption: "Global Ocean Freight Solutions",
      description: "Connecting continents through reliable maritime logistics"
    },
    {
      src: logisticsWarehouse,
      caption: "Advanced Warehousing Technology",
      description: "State-of-the-art storage and distribution facilities"
    },
    {
      src: portTerminal,
      caption: "Modern Port Operations",
      description: "Efficient cargo handling at world-class terminals"
    },
    {
      src: cargoPlane,
      caption: "Express Air Freight Services",
      description: "Fast and secure air transportation worldwide"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-fade-in hover:bg-white/20 transition-all duration-300">
            <span className="text-sm font-medium">Trusted Since 2015 🚢</span>
          </div>
          
          {/* Image Caption */}
          <div className="mb-6 text-center animate-fade-in">
            <h3 className="text-lg font-semibold text-white mb-1">{images[currentImage].caption}</h3>
            <p className="text-sm text-gray-300">{images[currentImage].description}</p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in">
            Delivering Results
            <span className="block text-primary hover:text-primary-hover transition-colors duration-300">that Endure</span>
            <span className="block text-2xl md:text-3xl mt-2 text-gray-300">™</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Global logistics solutions connecting your business to the world. 
            Fast, reliable, and secure shipping services across air and ocean routes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <Button variant="hero" size="lg" className="min-w-[200px] group hover:scale-105 transition-all duration-300">
              Get Instant Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px] border-white text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300">
              Track Shipment
            </Button>
          </div>

          {/* Service Icons */}
          <div className="flex justify-center items-center space-x-8 md:space-x-12 animate-fade-in">
            <div className="flex flex-col items-center space-y-2 group cursor-pointer">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
                <Plane className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">Air Freight</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group cursor-pointer">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
                <Ship className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">Ocean Freight</span>
            </div>
            <div className="flex flex-col items-center space-y-2 group cursor-pointer">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
                <Truck className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-sm font-medium group-hover:text-primary transition-colors duration-300">Land Transport</span>
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