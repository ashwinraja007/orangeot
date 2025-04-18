
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/c80361a7-f9e6-4b5d-a689-95904676a926.png" alt="Orange Office Technologies" className="h-12 w-auto" />
            <span className="font-heading font-bold text-lg hidden md:block">Orange Office Technologies</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">Services</Link>
            <Link to="/careers" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">Careers</Link>
            <Link to="/clients" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">Clients</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors duration-200">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:flex bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200">
              <Link to="/contact">Contact Us</Link>
            </Button>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/careers" 
              className="text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              to="/clients" 
              className="text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full bg-primary hover:bg-primary/90">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
