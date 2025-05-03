
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/20 to-transparent" />
      
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/c80361a7-f9e6-4b5d-a689-95904676a926.png" 
                alt="Orange Office Technologies" 
                className="h-12 w-auto bg-white/10 p-2 rounded-lg backdrop-blur-sm"
              />
            </Link>
            <p className="text-sm text-gray-400">
              Orange Office Technologies Pvt Ltd. is a Neutral KPO Service Provider offering expert services in logistics operations.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Our Services" },
                { to: "/clients", label: "Clients" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span>
                  "KAIZEN" 2nd & 3rd Floor, Anna Nagar East,
                  Chennai: 600102
                </span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-400 mt-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span>
                  "New Wing" 453, 100 Feet Road, Velachery,
                  Chennai: 600042
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span>+91 44 4796 5437</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span>info@orangeot.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email"
                className="bg-white/5 border-gray-800 text-white placeholder:text-gray-500"
              />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>
        
        {/* Google Map */}
        <div className="w-full mb-12 rounded-xl overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1545266236967!2d80.2226762757666!3d13.089391387236867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52642e68adc059%3A0x44809bfe043deede!2sOrange%20Office%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1746264921346!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{border: 0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Orange Office Technologies Location"
            className="rounded-xl"
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Orange Office Technologies Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
