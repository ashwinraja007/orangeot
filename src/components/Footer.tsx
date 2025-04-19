import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 relative text-white">
      {/* Shape divider */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gray-900" style={{ clipPath: "polygon(0 0, 100% 100%, 100% 0)" }}></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in">
            <Link to="/" className="inline-block mb-4 hover-lift">
              <img src="/lovable-uploads/c80361a7-f9e6-4b5d-a689-95904676a926.png" alt="Orange Office Technologies" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-600 text-sm">
              Orange Office Technologies Pvt Ltd. is a Neutral KPO Service Provider offering expert services in logistics operations.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="text-gray-500 hover:text-primary transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-gray-100"
                  aria-label={`Follow us on ${social.icon.name}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h4 className="font-heading font-bold text-lg mb-4 text-gradient">Chennai - Headquarters</h4>
            <div className="flex space-x-2 items-start mb-2 group card-hover p-2 rounded-lg">
              <MapPin size={18} className="text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <address className="text-gray-600 text-sm not-italic">
                "KAIZEN" 2nd & 3rd Floor<br />
                New No.G3 (Old No.G1), G Block,<br />
                Plot No.565Q, 18th Street,<br />
                Chinthamani, Anna Nagar East,<br />
                Chennai: 600102
              </address>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h4 className="font-heading font-bold text-lg mb-4 text-gradient">Kochi Office</h4>
            <div className="flex space-x-2 items-start mb-4 group card-hover p-2 rounded-lg">
              <MapPin size={18} className="text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <address className="text-gray-600 text-sm not-italic">
                No 34/656, Neelima,<br />
                Toll Jn, Edappally,<br />
                Ernakulam, Kochi,<br />
                Kerala 682024<br />
                (Landmark: OPP Metro Pillar 394)
              </address>
            </div>
            {[
              { icon: Phone, text: "+91 44 4796 5437" },
              { icon: Mail, text: "info@orangeot.com" }
            ].map((contact, index) => (
              <div key={index} className="flex space-x-2 items-center mb-2 group card-hover p-2 rounded-lg">
                <contact.icon size={18} className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-600 text-sm">{contact.text}</span>
              </div>
            ))}
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h4 className="font-heading font-bold text-lg mb-4 text-gradient">Subscribe</h4>
            <form className="space-y-4">
              <Input 
                placeholder="Email" 
                type="email" 
                className="bg-white border-gray-300 focus:border-primary focus:ring-primary transition-all duration-300" 
              />
              <Input 
                placeholder="Your Name" 
                type="text" 
                className="bg-white border-gray-300 focus:border-primary focus:ring-primary transition-all duration-300" 
              />
              <Button className="w-full bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 btn-hover-effect">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Orange Office Technologies Pvt Ltd - All Rights Reserved.
            </p>
            <div className="flex space-x-6">
              {[
                { to: "/privacy-policy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms of Service" },
                { to: "/sitemap", label: "Sitemap" }
              ].map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-gray-400 text-sm hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
