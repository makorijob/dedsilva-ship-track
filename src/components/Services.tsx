import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Ship, Truck, Warehouse, Shield, Clock, ArrowRight } from "lucide-react";
import airFreight from "@/assets/air-freight.jpg";
import warehouse from "@/assets/warehouse.jpg";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments worldwide.",
      features: ["Express delivery", "Real-time tracking", "Customs clearance", "Door-to-door service"],
      image: airFreight,
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Cost-effective sea freight solutions for large volume shipments across global routes.",
      features: ["FCL & LCL options", "Port-to-port delivery", "Container tracking", "Competitive rates"],
      image: warehouse,
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description: "Secure storage and distribution services with advanced inventory management.",
      features: ["Climate controlled", "24/7 security", "Inventory management", "Pick & pack services"],
      image: warehouse,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure & Insured",
      description: "Full insurance coverage and secure handling for all shipments",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "99.5% on-time delivery rate with real-time tracking updates",
    },
    {
      icon: Truck,
      title: "Door-to-Door",
      description: "Complete logistics solution from pickup to final destination",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive logistics solutions tailored to meet your business needs, 
            from small parcels to large-scale cargo operations.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;