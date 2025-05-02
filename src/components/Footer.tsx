
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      {/* Decorative top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-500/30 to-transparent" />
      
      {/* Glow effect elements */}
      <div className="absolute top-40 left-20 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-orange-500/5 blur-3xl"></div>
      
      {/* Back to top button */}
      <button 
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
      >
        <ArrowUp className="h-5 w-5 text-white group-hover:animate-bounce" />
      </button>
      
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-amber-500/5 blur opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
            <Link to="/" className="inline-block relative">
              <div className="p-3 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500">
                <img 
                  src="/lovable-uploads/c80361a7-f9e6-4b5d-a689-95904676a926.png" 
                  alt="Orange Office Technologies" 
                  className="h-12 w-auto"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs relative">
              Orange Office Technologies Pvt Ltd. is a Neutral KPO Service Provider offering expert services in logistics operations.
            </p>
            <div className="flex space-x-3 relative">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-orange-400 transition-colors p-2 hover:bg-white/5 rounded-lg group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="relative">
            <h4 className="font-bold text-xl mb-6 text-gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Quick Links</h4>
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
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-orange-500 transition-colors mr-2"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="relative">
            <h4 className="font-bold text-xl mb-6 text-gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400 hover:text-gray-300 transition-colors group">
                <MapPin className="text-orange-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span>
                  "KAIZEN" 2nd & 3rd Floor, Anna Nagar East,
                  Chennai: 600102
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400 hover:text-gray-300 transition-colors group">
                <Phone className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91 44 4796 5437</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400 hover:text-gray-300 transition-colors group">
                <Mail className="text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>info@orangeot.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="relative">
            <h4 className="font-bold text-xl mb-6 text-gradient bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <div className="space-y-3">
              {!isSubscribed ? (
                <form onSubmit={handleSubscribe} className="space-y-3">
                  <div className="relative">
                    <Input 
                      type="email" 
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/5 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500 focus-visible:ring-1 focus-visible:ring-orange-500 pr-10"
                      required
                    />
                    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-orange-500/20 to-amber-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all duration-300 text-white font-medium"
                  >
                    Subscribe
                  </Button>
                </form>
              ) : (
                <div className="bg-white/5 border border-green-500/40 text-green-400 p-3 rounded-md flex items-center space-x-2 animate-fade-in">
                  <CheckCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">Thank you for subscribing!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/70 pt-8 mt-12">
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
