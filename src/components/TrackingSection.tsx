import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Package, Plane, CheckCircle, Clock } from "lucide-react";

const TrackingSection = () => {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTracking(true);
    // Simulate API call
    setTimeout(() => {
      setIsTracking(false);
    }, 2000);
  };

  const trackingSteps = [
    { status: "completed", title: "Package Picked Up", description: "Manchester, UK", time: "2 days ago" },
    { status: "completed", title: "In Transit", description: "London Hub", time: "1 day ago" },
    { status: "current", title: "Customs Clearance", description: "Processing documents", time: "In progress" },
    { status: "pending", title: "Out for Delivery", description: "Final destination", time: "Pending" },
  ];

  return (
    <section id="tracking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Tracking Form */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Track Your <span className="text-primary">Shipment</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get real-time updates on your shipment status with our advanced tracking system. 
              Enter your tracking number below to get started.
            </p>

            <form onSubmit={handleTrack} className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Enter tracking number (e.g., DS123456789)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  type="submit" 
                  variant="cta" 
                  disabled={isTracking}
                  className="min-w-[120px]"
                >
                  {isTracking ? (
                    <Clock className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      Track
                    </>
                  )}
                </Button>
              </div>
            </form>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Need help?</strong> Contact our customer service team at 
                <span className="text-primary font-medium"> +44 20 1234 5678</span> or 
                <span className="text-primary font-medium"> support@dedsilva.com</span>
              </p>
            </div>
          </div>

          {/* Right Column - Tracking Demo */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2 text-primary" />
                  Shipment: DS123456789
                </CardTitle>
                <CardDescription>
                  Air Freight • Manchester, UK → New York, USA
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trackingSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`mt-1 rounded-full p-1 ${
                        step.status === 'completed' 
                          ? 'bg-green-100 text-green-600' 
                          : step.status === 'current'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        {step.status === 'completed' ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : step.status === 'current' ? (
                          <Clock className="h-4 w-4" />
                        ) : (
                          <div className="h-4 w-4 rounded-full border-2 border-current" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-medium ${
                          step.status === 'pending' ? 'text-gray-400' : 'text-foreground'
                        }`}>
                          {step.title}
                        </p>
                        <p className={`text-sm ${
                          step.status === 'pending' ? 'text-gray-400' : 'text-muted-foreground'
                        }`}>
                          {step.description}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {step.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-sm text-primary font-medium">
                    ✈️ Estimated delivery: Tomorrow, 3:00 PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;