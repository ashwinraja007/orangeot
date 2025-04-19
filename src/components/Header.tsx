import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-3"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            aria-label="Home"
          >
            <img 
              src="/lovable-uploads/c80361a7-f9e6-4b5d-a689-95904676a926.png" 
              alt="Orange Office Technologies" 
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
            />
            <span className="font-heading font-bold text-lg hidden md:block animate-fade-in">
              Orange Office Technologies
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/careers", label: "Careers" },
              { to: "/clients", label: "Clients" },
              { to: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`text-gray-700 font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  location.pathname === item.to ? "text-primary after:scale-x-100" : "hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              className="hidden md:flex bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 btn-hover-effect"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
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
              { to: "/careers", label: "Careers" },
              { to: "/clients", label: "Clients" },
              { to: "/contact", label: "Contact" }
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-300 ${
                  location.pathname === item.to ? "text-primary" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 btn-hover-effect">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
