import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Globe, Users, Award, Clock, Shield } from "lucide-react";

const StatsSection = () => {
  const [counts, setCounts] = useState({
    shipments: 0,
    countries: 0,
    clients: 0,
    years: 0
  });

  const finalCounts = {
    shipments: 25000,
    countries: 45,
    clients: 850,
    years: 9
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = {
      shipments: finalCounts.shipments / steps,
      countries: finalCounts.countries / steps,
      clients: finalCounts.clients / steps,
      years: finalCounts.years / steps
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts({
        shipments: Math.min(Math.floor(increment.shipments * step), finalCounts.shipments),
        countries: Math.min(Math.floor(increment.countries * step), finalCounts.countries),
        clients: Math.min(Math.floor(increment.clients * step), finalCounts.clients),
        years: Math.min(Math.floor(increment.years * step), finalCounts.years)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounts(finalCounts);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      label: "Shipments Delivered",
      value: counts.shipments.toLocaleString(),
      suffix: "+",
      color: "text-primary"
    },
    {
      icon: Globe,
      label: "Countries Served",
      value: counts.countries,
      suffix: "+",
      color: "text-blue-600"
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: counts.clients.toLocaleString(),
      suffix: "+",
      color: "text-green-600"
    },
    {
      icon: Award,
      label: "Years of Excellence",
      value: counts.years,
      suffix: "",
      color: "text-orange-600"
    }
  ];

  const achievements = [
    {
      icon: Shield,
      title: "ISO 9001:2015 Certified",
      description: "Quality management systems certified"
    },
    {
      icon: Clock,
      title: "99.8% On-Time Delivery",
      description: "Exceptional reliability record"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Multiple logistics excellence awards"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Achievements */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Excellence & Recognition</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence has earned us recognition as a leading logistics provider worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;