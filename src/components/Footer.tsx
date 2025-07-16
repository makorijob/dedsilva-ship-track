import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Truck, Plane, Ship, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Air Freight", href: "#services" },
      { name: "Ocean Freight", href: "#services" },
      { name: "Land Transport", href: "#services" },
      { name: "Warehousing", href: "#services" },
      { name: "Customs Clearance", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Careers", href: "#" },
      { name: "News & Updates", href: "#" },
      { name: "Sustainability", href: "#" },
    ],
    support: [
      { name: "Track Shipment", href: "#tracking" },
      { name: "Get Quote", href: "#contact" },
      { name: "Customer Support", href: "#contact" },
      { name: "FAQ", href: "#" },
      { name: "Contact Us", href: "#contact" },
    ],
    legal: [
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Insurance Claims", href: "#" },
      { name: "Shipping Terms", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-company-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/0e4c5bb8-a40a-494c-b635-ae499c5c9ed0.png" 
                alt="DedSilva PTY LTD" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Delivering results that endure since 2015. Global logistics solutions 
              connecting your business to the world with reliable, secure, and 
              efficient shipping services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Logistics Way, Manchester, UK M1 2AB</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+44 20 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@dedsilva.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Button variant="cta" size="sm">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Icons */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex justify-center items-center space-x-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
                <Plane className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-gray-400">Air Freight</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
                <Ship className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-gray-400">Ocean Freight</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xs text-gray-400">Land Transport</span>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {currentYear} DedSilva PTY LTD. All rights reserved.
          </div>

          {/* Legal Links */}
          <div className="flex space-x-6">
            {footerLinks.legal.slice(0, 3).map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;