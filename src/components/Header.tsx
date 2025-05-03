
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3' 
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group" aria-label="Home">
            <img 
              src="/lovable-uploads/c80361a7-f9e6-4b5d-a689-95904676a926.png" 
              alt="Orange Office Technologies" 
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
            />
            <span className="font-heading text-lg md:text-xl font-semibold text-gray-800">
              Orange Office Technologies
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/founders", label: "Founders" },
              { to: "/careers", label: "Careers" },
              { to: "/clients", label: "Clients" },
            ].map(item => (
              <Link 
                key={item.label} 
                to={item.to} 
                className={`font-medium transition-colors duration-300 relative text-gray-800 hover:text-orange-500 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left after:bg-orange-500 ${
                  location.pathname === item.to 
                    ? 'text-orange-500 after:scale-x-100 after:bg-orange-500' 
                    : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <Button 
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-md hover:shadow-lg transition-all duration-300 btn-hover-shine rounded-xl text-white"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            
            <button 
              className="md:hidden ml-4 p-2 hover:bg-gray-100/10 rounded-lg transition-colors text-gray-800" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label="Toggle menu" 
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/founders", label: "Founders" },
              { to: "/careers", label: "Careers" },
              { to: "/clients", label: "Clients" },
            ].map(item => (
              <Link 
                key={item.label} 
                to={item.to} 
                className={`text-gray-800 hover:text-orange-500 font-medium py-2 transition-colors duration-300 ${
                  location.pathname === item.to ? 'text-orange-500' : ''
                }`} 
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
