
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/lovable-uploads/c80361a7-f9e6-4b5d-a689-95904676a926.png" alt="Orange Office Technologies" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-600 text-sm">
              Orange Office Technologies Pvt Ltd. is a Neutral KPO Service Provider offering expert services in logistics operations.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Chennai - Headquarters</h4>
            <div className="flex space-x-2 items-start mb-2">
              <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
              <address className="text-gray-600 text-sm not-italic">
                "KAIZEN" 2nd & 3rd Floor<br />
                New No.G3 (Old No.G1), G Block,<br />
                Plot No.565Q, 18th Street,<br />
                Chinthamani, Anna Nagar East,<br />
                Chennai: 600102
              </address>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Kochi Office</h4>
            <div className="flex space-x-2 items-start mb-4">
              <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
              <address className="text-gray-600 text-sm not-italic">
                No 34/656, Neelima,<br />
                Toll Jn, Edappally,<br />
                Ernakulam, Kochi,<br />
                Kerala 682024<br />
                (Landmark: OPP Metro Pillar 394)
              </address>
            </div>
            <div className="flex space-x-2 items-center mb-2">
              <Phone size={18} className="text-primary flex-shrink-0" />
              <span className="text-gray-600 text-sm">+91 44 4796 5437</span>
            </div>
            <div className="flex space-x-2 items-center">
              <Mail size={18} className="text-primary flex-shrink-0" />
              <span className="text-gray-600 text-sm">info@orangeot.com</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Subscribe</h4>
            <form className="space-y-4">
              <div>
                <Input placeholder="Email" type="email" className="border-gray-300 focus:border-primary focus:ring-primary" />
              </div>
              <div>
                <Input placeholder="Your Name" type="text" className="border-gray-300 focus:border-primary focus:ring-primary" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2024 Orange Office Technologies Pvt Ltd - All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-600 text-sm hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-600 text-sm hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-600 text-sm hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
