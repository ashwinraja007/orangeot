
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
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

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3 border-b border-gray-200/20' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group relative z-10" 
            aria-label="Home"
          >
            <div className="relative">
              <div className={`absolute -inset-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-300 opacity-70 blur-sm group-hover:opacity-100 transition-all duration-500 group-hover:blur-md -z-10 ${scrolled ? 'opacity-0' : ''}`}></div>
              <img 
                src="/lovable-uploads/c80361a7-f9e6-4b5d-a689-95904676a926.png" 
                alt="Orange Office Technologies" 
                className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-110 relative" 
              />
            </div>
            <div className="overflow-hidden">
              <span className={`font-heading text-lg md:text-xl font-semibold transition-all duration-500 ${
                scrolled ? 'text-gray-800' : 'text-white text-shadow'
              }`}>
                <span className="inline-block transform transition-transform duration-500 hover:translate-y-[-2px]">O</span>
                <span className="inline-block transform transition-transform duration-500 hover:translate-y-[-2px] delay-[50ms]">r</span>
                <span className="inline-block transform transition-transform duration-500 hover:translate-y-[-2px] delay-100">a</span>
                <span className="inline-block transform transition-transform duration-500 hover:translate-y-[-2px] delay-150">n</span>
                <span className="inline-block transform transition-transform duration-500 hover:translate-y-[-2px] delay-200">g</span>
                <span className="inline-block transform transition-transform duration-500 hover:translate-y-[-2px] delay-250">e</span>
                <span className="inline-block transform transition-transform duration-500 hover:translate-y-[-2px] delay-300"> </span>
                <span className="inline-block transform transition-transform duration-500 hover:translate-y-[-2px] delay-350">O</span>
                <span className="inline-block transform transition-transform duration-500 hover:translate-y-[-2px] delay-400">f</span>
                <span className="inline-block transform transition-transform duration-500 hover:translate-y-[-2px] delay-450">f</span>
                <span className="inline-block transform transition-transform duration-500 hover:translate-y-[-2px] delay-500">i</span>
                <span className="inline-block transform transition-transform duration-500 hover:translate-y-[-2px] delay-550">c</span>
                <span className="inline-block transform transition-transform duration-500 hover:translate-y-[-2px] delay-600">e</span>
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                location.pathname === "/" 
                  ? 'text-orange-500 font-semibold' 
                  : `${scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-100'}`
              }`}
            >
              <span className="relative z-10">Home</span>
              {location.pathname === "/" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-300"></span>
              )}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </Link>

            <Link 
              to="/about" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                location.pathname === "/about" 
                  ? 'text-orange-500 font-semibold' 
                  : `${scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-100'}`
              }`}
            >
              <span className="relative z-10">About Us</span>
              {location.pathname === "/about" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-300"></span>
              )}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </Link>

            {/* Services with dropdown */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('services')}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-1 relative overflow-hidden group ${
                  location.pathname.includes("/services") 
                    ? 'text-orange-500 font-semibold' 
                    : `${scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-100'}`
                }`}
              >
                <span className="relative z-10">Services</span>
                {activeDropdown === 'services' ? (
                  <ChevronUp className="h-4 w-4 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                )}
                {location.pathname.includes("/services") && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-300"></span>
                )}
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
              </button>
              
              {/* Services dropdown */}
              {activeDropdown === 'services' && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in opacity-0 translate-y-2"
                  style={{animation: 'fade-in 0.3s ease forwards'}}
                >
                  <div className="py-2">
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      All Services
                    </Link>
                    <Link
                      to="/services/documentation"
                      className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Documentation
                    </Link>
                    <Link
                      to="/services/sales-support"
                      className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Sales Support
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/founders" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                location.pathname === "/founders" 
                  ? 'text-orange-500 font-semibold' 
                  : `${scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-100'}`
              }`}
            >
              <span className="relative z-10">Founders</span>
              {location.pathname === "/founders" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-300"></span>
              )}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </Link>

            <Link 
              to="/careers" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                location.pathname === "/careers" 
                  ? 'text-orange-500 font-semibold' 
                  : `${scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-100'}`
              }`}
            >
              <span className="relative z-10">Careers</span>
              {location.pathname === "/careers" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-300"></span>
              )}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </Link>

            <Link 
              to="/clients" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                location.pathname === "/clients" 
                  ? 'text-orange-500 font-semibold' 
                  : `${scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-100'}`
              }`}
            >
              <span className="relative z-10">Clients</span>
              {location.pathname === "/clients" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-300"></span>
              )}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </Link>

            <Link 
              to="/contact" 
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 relative overflow-hidden group ${
                location.pathname === "/contact" 
                  ? 'text-orange-500 font-semibold' 
                  : `${scrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-orange-100'}`
              }`}
            >
              <span className="relative z-10">Contact</span>
              {location.pathname === "/contact" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-300"></span>
              )}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
            </Link>
          </nav>

          {/* Contact Button & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Button 
              className={`hidden md:flex relative overflow-hidden group ${
                scrolled 
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white' 
                  : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30'
              } shadow-md hover:shadow-lg transition-all duration-300 rounded-xl`}
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
              <Link to="/contact" className="relative z-10">Contact Us</Link>
            </Button>
            
            <button 
              className={`md:hidden p-2 hover:bg-gray-100/10 rounded-lg transition-colors ${
                scrolled || isMenuOpen ? 'text-gray-700' : 'text-white'
              }`} 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label="Toggle menu" 
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Enhanced with animations */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {/* Mobile nav items with staggered animation */}
            <Link 
              to="/"
              className={`text-gray-700 hover:text-orange-500 font-medium py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-orange-50 animate-fade-in ${
                location.pathname === "/" ? 'bg-orange-50 text-orange-500' : ''
              }`}
              style={{animationDelay: '50ms'}}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about"
              className={`text-gray-700 hover:text-orange-500 font-medium py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-orange-50 animate-fade-in ${
                location.pathname === "/about" ? 'bg-orange-50 text-orange-500' : ''
              }`}
              style={{animationDelay: '100ms'}}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            {/* Services dropdown for mobile */}
            <div className="animate-fade-in" style={{animationDelay: '150ms'}}>
              <button
                onClick={() => toggleDropdown('mobileServices')}
                className={`flex justify-between items-center w-full text-left text-gray-700 hover:text-orange-500 font-medium py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-orange-50 ${
                  location.pathname.includes("/services") ? 'bg-orange-50 text-orange-500' : ''
                }`}
              >
                <span>Services</span>
                {activeDropdown === 'mobileServices' ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </button>
              
              {activeDropdown === 'mobileServices' && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-orange-100 pl-4">
                  <Link
                    to="/services"
                    className={`block py-2 px-3 text-gray-700 hover:text-orange-500 rounded-lg transition-colors hover:bg-orange-50 ${
                      location.pathname === "/services" ? 'text-orange-500' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link
                    to="/services/documentation"
                    className={`block py-2 px-3 text-gray-700 hover:text-orange-500 rounded-lg transition-colors hover:bg-orange-50 ${
                      location.pathname === "/services/documentation" ? 'text-orange-500' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Documentation
                  </Link>
                  <Link
                    to="/services/sales-support"
                    className={`block py-2 px-3 text-gray-700 hover:text-orange-500 rounded-lg transition-colors hover:bg-orange-50 ${
                      location.pathname === "/services/sales-support" ? 'text-orange-500' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sales Support
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/founders"
              className={`text-gray-700 hover:text-orange-500 font-medium py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-orange-50 animate-fade-in ${
                location.pathname === "/founders" ? 'bg-orange-50 text-orange-500' : ''
              }`}
              style={{animationDelay: '200ms'}}
              onClick={() => setIsMenuOpen(false)}
            >
              Founders
            </Link>
            <Link 
              to="/careers"
              className={`text-gray-700 hover:text-orange-500 font-medium py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-orange-50 animate-fade-in ${
                location.pathname === "/careers" ? 'bg-orange-50 text-orange-500' : ''
              }`}
              style={{animationDelay: '250ms'}}
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              to="/clients"
              className={`text-gray-700 hover:text-orange-500 font-medium py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-orange-50 animate-fade-in ${
                location.pathname === "/clients" ? 'bg-orange-50 text-orange-500' : ''
              }`}
              style={{animationDelay: '300ms'}}
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </Link>
            <Link 
              to="/contact"
              className={`text-gray-700 hover:text-orange-500 font-medium py-3 px-4 rounded-lg transition-colors duration-300 hover:bg-orange-50 animate-fade-in ${
                location.pathname === "/contact" ? 'bg-orange-50 text-orange-500' : ''
              }`}
              style={{animationDelay: '350ms'}}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-xl animate-fade-in" style={{animationDelay: '400ms'}}>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="w-full">
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
