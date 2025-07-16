import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, ChevronLeft, ChevronRight, Building2, MapPin } from "lucide-react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Supply Chain Director",
      company: "TechFlow Industries",
      location: "London, UK",
      rating: 5,
      text: "DedSilva International has transformed our global logistics operations. Their attention to detail and commitment to on-time delivery is unmatched. We've seen a 40% improvement in our supply chain efficiency since partnering with them.",
      shipmentType: "Air Freight"
    },
    {
      name: "Miguel Rodriguez",
      position: "Import Manager",
      company: "GreenTech Solutions",
      location: "Barcelona, Spain",
      rating: 5,
      text: "The team at DedSilva provides exceptional service. Their ocean freight solutions helped us reduce costs by 25% while maintaining the highest quality standards. They truly deliver results that endure.",
      shipmentType: "Ocean Freight"
    },
    {
      name: "Chen Wei",
      position: "Operations Manager",
      company: "Pacific Electronics",
      location: "Shanghai, China",
      rating: 5,
      text: "Professional, reliable, and innovative. DedSilva's technology platform gives us real-time visibility into our shipments. Their customer service team is always available when we need them.",
      shipmentType: "Express Delivery"
    },
    {
      name: "Emma Thompson",
      position: "Procurement Lead",
      company: "Global Manufacturing Ltd",
      location: "Manchester, UK",
      rating: 5,
      text: "We've been working with DedSilva for over 3 years now. Their expertise in customs clearance and warehousing has saved us countless hours and headaches. Highly recommended for any international shipping needs.",
      shipmentType: "Warehousing"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Client Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses worldwide achieve their logistics goals with our comprehensive shipping solutions.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
            <CardContent className="p-8 md:p-12 relative">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-16 w-16 text-primary" />
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  {/* Service Badge */}
                  <Badge variant="secondary" className="mb-4">
                    {testimonials[currentTestimonial].shipmentType}
                  </Badge>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {renderStars(testimonials[currentTestimonial].rating)}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].rating}.0 out of 5
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                </div>

                {/* Client Info */}
                <div className="text-center md:text-left">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto md:mx-0 mb-4">
                    {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-1">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground mb-2">
                    {testimonials[currentTestimonial].position}
                  </p>
                  
                  <div className="flex items-center justify-center md:justify-start gap-1 text-sm text-muted-foreground mb-2">
                    <Building2 className="h-4 w-4" />
                    {testimonials[currentTestimonial].company}
                  </div>
                  
                  <div className="flex items-center justify-center md:justify-start gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="hover:scale-110 transition-transform duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="hover:scale-110 transition-transform duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                99.8%
              </div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                850+
              </div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
            <div className="group cursor-pointer">
              <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                45+
              </div>
              <div className="text-sm text-muted-foreground">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;