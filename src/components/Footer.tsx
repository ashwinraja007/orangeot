
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 pt-20 pb-8 relative text-white">
      {/* Shape divider */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in">
            <Link to="/" className="inline-block mb-6 hover:scale-105 transition-transform duration-300">
              <img src="/lovable-uploads/c80361a7-f9e6-4b5d-a689-95904676a926.png" alt="Orange Office Technologies" className="h-14 w-auto bg-white/10 p-2 rounded-lg backdrop-blur-sm" />
            </Link>
            <p className="text-sm text-gray-300 mb-6">
              Orange Office Technologies Pvt Ltd. is a Neutral KPO Service Provider offering expert services in logistics operations.
            </p>
            <div className="flex space-x-3 mt-6">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Instagram, href: "#", label: "Instagram" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="text-gray-400 hover:text-[#F58220] transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-gray-800" 
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h4 className="font-heading font-bold text-lg mb-6 text-white border-b border-[#F58220]/20 pb-2">Chennai - Headquarters</h4>
            <div className="flex space-x-3 items-start mb-4 group hover:bg-gray-800/30 p-3 rounded-lg transition-colors">
              <MapPin size={20} className="text-[#F58220] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <address className="text-gray-300 text-sm not-italic">
                "KAIZEN" 2nd & 3rd Floor<br />
                New No.G3 (Old No.G1), G Block,<br />
                Plot No.565Q, 18th Street,<br />
                Chinthamani, Anna Nagar East,<br />
                Chennai: 600102
              </address>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h4 className="font-heading font-bold text-lg mb-6 text-white border-b border-[#F58220]/20 pb-2">Kochi Office</h4>
            <div className="flex space-x-3 items-start mb-4 group hover:bg-gray-800/30 p-3 rounded-lg transition-colors">
              <MapPin size={20} className="text-[#F58220] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <address className="text-gray-300 text-sm not-italic">
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
              <div key={index} className="flex space-x-3 items-center mb-3 group hover:bg-gray-800/30 p-3 rounded-lg transition-colors">
                <contact.icon size={20} className="text-[#F58220] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 text-sm">{contact.text}</span>
              </div>
            ))}
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
            <h4 className="font-heading font-bold text-lg mb-6 text-white border-b border-[#F58220]/20 pb-2">Subscribe</h4>
            <form className="space-y-4">
              <Input 
                placeholder="Email" 
                type="email" 
                className="bg-gray-800/50 border-gray-700 focus:border-[#F58220] focus:ring-[#F58220] text-white placeholder:text-gray-500 transition-all duration-300" 
              />
              <Input 
                placeholder="Your Name" 
                type="text" 
                className="bg-gray-800/50 border-gray-700 focus:border-[#F58220] focus:ring-[#F58220] text-white placeholder:text-gray-500 transition-all duration-300" 
              />
              <Button className="w-full bg-[#F58220] hover:bg-[#F58220]/90 shadow-lg hover:shadow-xl transition-all duration-300 btn-hover-effect">
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
              ].map(link => (
                <Link 
                  key={link.label} 
                  to={link.to} 
                  className="text-gray-400 text-sm hover:text-[#F58220] transition-colors duration-300"
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
