import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Calendar, Package, MapPin, User, Download, Printer, Send, CheckCircle } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface QuoteData {
  serviceType: string;
  origin: string;
  destination: string;
  weight: string;
  dimensions: string;
  commodity: string;
  pickupDate: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  additionalNotes: string;
}

const QuoteForm = () => {
  const [formData, setFormData] = useState<QuoteData>({
    serviceType: "",
    origin: "",
    destination: "",
    weight: "",
    dimensions: "",
    commodity: "",
    pickupDate: "",
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    additionalNotes: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteNumber, setQuoteNumber] = useState("");

  const handleInputChange = (field: keyof QuoteData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateQuoteNumber = () => {
    const prefix = "DS-";
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    return `${prefix}${timestamp}${random}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newQuoteNumber = generateQuoteNumber();
    setQuoteNumber(newQuoteNumber);
    setIsSubmitted(true);
  };

  const generatePDF = async () => {
    const quoteElement = document.getElementById('quote-preview');
    if (!quoteElement) return;

    try {
      const canvas = await html2canvas(quoteElement, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`DedSilva-Quote-${quoteNumber}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const printQuote = () => {
    const quoteElement = document.getElementById('quote-preview');
    if (!quoteElement) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Quote ${quoteNumber} - DedSilva International</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            .logo { height: 60px; margin-bottom: 20px; }
            .header { text-align: center; margin-bottom: 30px; }
            .section { margin-bottom: 20px; }
            .field { margin-bottom: 10px; }
            .label { font-weight: bold; }
            .value { margin-left: 10px; }
            .footer { margin-top: 40px; text-align: center; font-size: 12px; }
          </style>
        </head>
        <body>
          ${quoteElement.innerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
  };

  if (isSubmitted) {
    return (
      <section id="quote" className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Quote Request Submitted!</h2>
            <p className="text-lg text-muted-foreground">Your quote number is: <Badge variant="outline" className="ml-2 text-lg px-3 py-1">{quoteNumber}</Badge></p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Download your quote as a PDF for your records.</p>
                <Button onClick={generatePDF} className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Printer className="h-5 w-5" />
                  Print Quote
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Print your quote directly from your browser.</p>
                <Button onClick={printQuote} className="w-full" variant="outline">
                  <Printer className="mr-2 h-4 w-4" />
                  Print Quote
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Hidden Quote Preview for PDF/Print */}
          <div id="quote-preview" className="hidden print:block">
            <div className="max-w-4xl mx-auto p-8 bg-white">
              <div className="text-center mb-8">
                <img 
                  src="/lovable-uploads/c025f1ee-8807-4d3f-b853-78786250604c.png" 
                  alt="DedSilva International LTD" 
                  className="h-16 mx-auto mb-4"
                />
                <h1 className="text-2xl font-bold text-gray-900">SHIPPING QUOTE REQUEST</h1>
                <p className="text-gray-600">Quote Number: {quoteNumber}</p>
                <p className="text-gray-600">Date: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-red-600">Service Details</h3>
                  <div className="space-y-2">
                    <div><span className="font-medium">Service Type:</span> {formData.serviceType}</div>
                    <div><span className="font-medium">Origin:</span> {formData.origin}</div>
                    <div><span className="font-medium">Destination:</span> {formData.destination}</div>
                    <div><span className="font-medium">Weight:</span> {formData.weight} kg</div>
                    <div><span className="font-medium">Dimensions:</span> {formData.dimensions}</div>
                    <div><span className="font-medium">Commodity:</span> {formData.commodity}</div>
                    <div><span className="font-medium">Pickup Date:</span> {formData.pickupDate}</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-red-600">Contact Information</h3>
                  <div className="space-y-2">
                    <div><span className="font-medium">Company:</span> {formData.companyName}</div>
                    <div><span className="font-medium">Contact Name:</span> {formData.contactName}</div>
                    <div><span className="font-medium">Email:</span> {formData.email}</div>
                    <div><span className="font-medium">Phone:</span> {formData.phone}</div>
                  </div>
                </div>
              </div>

              {formData.additionalNotes && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4 text-red-600">Additional Notes</h3>
                  <p className="text-gray-700">{formData.additionalNotes}</p>
                </div>
              )}

              <div className="mt-12 text-center text-sm text-gray-600">
                <p>DedSilva International LTD - Delivering Results that Endure™</p>
                <p>This quote is valid for 30 days from the date of issue.</p>
                <p>Our team will contact you within 24 hours with a detailed quotation.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button 
              onClick={() => setIsSubmitted(false)} 
              variant="outline"
              className="hover:scale-105 transition-transform duration-300"
            >
              Request Another Quote
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="py-20 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Request a Quote</h2>
          <p className="text-lg text-muted-foreground">Get instant pricing for your shipping needs</p>
        </div>

        <Card className="shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5 text-primary" />
              Shipping Quote Request
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Type */}
              <div className="space-y-2">
                <Label htmlFor="serviceType" className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  Service Type *
                </Label>
                <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="air-freight">Air Freight</SelectItem>
                    <SelectItem value="ocean-freight">Ocean Freight</SelectItem>
                    <SelectItem value="land-transport">Land Transport</SelectItem>
                    <SelectItem value="express-delivery">Express Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Origin and Destination */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="origin" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Origin *
                  </Label>
                  <Input
                    id="origin"
                    value={formData.origin}
                    onChange={(e) => handleInputChange('origin', e.target.value)}
                    placeholder="City, Country"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="destination">Destination *</Label>
                  <Input
                    id="destination"
                    value={formData.destination}
                    onChange={(e) => handleInputChange('destination', e.target.value)}
                    placeholder="City, Country"
                    required
                  />
                </div>
              </div>

              {/* Weight and Dimensions */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg) *</Label>
                  <Input
                    id="weight"
                    type="number"
                    value={formData.weight}
                    onChange={(e) => handleInputChange('weight', e.target.value)}
                    placeholder="Total weight in kg"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dimensions">Dimensions (L x W x H) *</Label>
                  <Input
                    id="dimensions"
                    value={formData.dimensions}
                    onChange={(e) => handleInputChange('dimensions', e.target.value)}
                    placeholder="e.g., 100 x 50 x 30 cm"
                    required
                  />
                </div>
              </div>

              {/* Commodity and Pickup Date */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="commodity">Commodity Type *</Label>
                  <Input
                    id="commodity"
                    value={formData.commodity}
                    onChange={(e) => handleInputChange('commodity', e.target.value)}
                    placeholder="Description of goods"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pickupDate" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Preferred Pickup Date *
                  </Label>
                  <Input
                    id="pickupDate"
                    type="date"
                    value={formData.pickupDate}
                    onChange={(e) => handleInputChange('pickupDate', e.target.value)}
                    required
                  />
                </div>
              </div>

              <Separator />

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Contact Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactName">Contact Name *</Label>
                    <Input
                      id="contactName"
                      value={formData.contactName}
                      onChange={(e) => handleInputChange('contactName', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="additionalNotes">Additional Notes</Label>
                <Textarea
                  id="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  placeholder="Any special requirements or additional information..."
                  rows={4}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <Send className="mr-2 h-4 w-4" />
                Submit Quote Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default QuoteForm;