import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Award, TrendingUp } from "lucide-react";
import globalRoutes from "@/assets/global-routes.jpg";

const About = () => {
  const stats = [
    { icon: Globe, number: "150+", label: "Countries Served", description: "Global reach across all continents" },
    { icon: Users, number: "50,000+", label: "Happy Customers", description: "Trusted by businesses worldwide" },
    { icon: Award, number: "99.5%", label: "On-Time Delivery", description: "Consistent reliability record" },
    { icon: TrendingUp, number: "2M+", label: "Shipments Delivered", description: "Successfully completed" },
  ];

  const milestones = [
    { year: "2015", title: "Company Founded", description: "DedSilva PTY LTD established in the UK" },
    { year: "2017", title: "Global Expansion", description: "Extended services to 50+ countries" },
    { year: "2019", title: "Technology Innovation", description: "Launched real-time tracking platform" },
    { year: "2021", title: "Sustainability Focus", description: "Introduced eco-friendly shipping options" },
    { year: "2023", title: "Market Leadership", description: "Recognized as leading logistics provider" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Since 2015</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-primary">DedSilva</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded with a vision to deliver results that endure, DedSilva PTY LTD has grown 
            from a UK-based startup to a global logistics leader, connecting businesses across the world.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <img 
              src={globalRoutes}
              alt="Global shipping routes"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Our Mission: Delivering Results that Endure
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At DedSilva PTY LTD, we believe that logistics is more than just moving goods from 
                point A to point B. It's about building lasting relationships, creating reliable 
                supply chains, and enabling businesses to thrive in a global marketplace.
              </p>
              <p>
                Since our founding in 2015, we've been committed to innovation, sustainability, 
                and exceptional customer service. Our team of logistics experts works around the 
                clock to ensure your shipments arrive safely, on time, and in perfect condition.
              </p>
              <p>
                From small businesses shipping their first international order to large 
                corporations managing complex supply chains, we provide tailored solutions 
                that grow with your business needs.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">ISO 9001</div>
                <div className="text-sm text-muted-foreground">Certified Quality</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Customer Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-white shadow-md z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}>
                    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-2">{milestone.year}</Badge>
                        <h4 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h4>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;