
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

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
          : 'bg-gradient-to-r from-black/50 to-transparent backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group" aria-label="Home">
            <div className="relative overflow-hidden rounded-full h-10 w-10">
              <img 
                src="/lovable-uploads/c80361a7-f9e6-4b5d-a689-95904676a926.png" 
                alt="Orange Office Technologies" 
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
              />
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-500/20 animate-pulse-slow rounded-full"></div>
            </div>
            <span className={`font-heading text-lg md:text-xl font-semibold transition-colors duration-300 ${scrolled || isMenuOpen ? 'text-orange-600' : 'text-white text-shadow'}`}>
              Orange Office Technologies
            </span>
          </Link>
          
          {/* Desktop navigation with dropdown */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <Link 
                    to="/"
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === "/" 
                        ? 'text-orange-500 bg-orange-50/10' 
                        : `${scrolled ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50/10' : 'text-white hover:text-orange-100 hover:bg-white/10'}`
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/about"
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === "/about" 
                        ? 'text-orange-500 bg-orange-50/10' 
                        : `${scrolled ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50/10' : 'text-white hover:text-orange-100 hover:bg-white/10'}`
                    }`}
                  >
                    About Us
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname.includes("/services") 
                        ? 'text-orange-500 bg-orange-50/10' 
                        : `${scrolled ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50/10' : 'text-white hover:text-orange-100 hover:bg-white/10'}`
                    }`}
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-2 p-4 w-[200px] bg-white rounded-md shadow-lg">
                      <Link 
                        to="/services"
                        className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                      >
                        All Services
                      </Link>
                      <Link 
                        to="/services/documentation"
                        className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                      >
                        Documentation
                      </Link>
                      <Link 
                        to="/services/sales-support"
                        className="px-3 py-2 text-sm font-medium rounded-md transition-colors text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                      >
                        Sales Support
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/founders"
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === "/founders" 
                        ? 'text-orange-500 bg-orange-50/10' 
                        : `${scrolled ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50/10' : 'text-white hover:text-orange-100 hover:bg-white/10'}`
                    }`}
                  >
                    Founders
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/careers"
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === "/careers" 
                        ? 'text-orange-500 bg-orange-50/10' 
                        : `${scrolled ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50/10' : 'text-white hover:text-orange-100 hover:bg-white/10'}`
                    }`}
                  >
                    Careers
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/clients"
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === "/clients" 
                        ? 'text-orange-500 bg-orange-50/10' 
                        : `${scrolled ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50/10' : 'text-white hover:text-orange-100 hover:bg-white/10'}`
                    }`}
                  >
                    Clients
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/contact"
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location.pathname === "/contact" 
                        ? 'text-orange-500 bg-orange-50/10' 
                        : `${scrolled ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50/10' : 'text-white hover:text-orange-100 hover:bg-white/10'}`
                    }`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              className={`hidden md:flex ${
                scrolled 
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white' 
                  : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30'
              } shadow-md hover:shadow-lg transition-all duration-300 btn-hover-shine rounded-xl`}
            >
              <Link to="/contact">Contact Us</Link>
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
              { to: "/contact", label: "Contact" }
            ].map(item => (
              <Link 
                key={item.label} 
                to={item.to} 
                className={`text-gray-700 hover:text-orange-500 font-medium py-2 transition-colors duration-300 ${
                  location.pathname === item.to ? 'text-orange-500' : ''
                }`} 
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl">
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
