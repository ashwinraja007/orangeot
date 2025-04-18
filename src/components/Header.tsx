
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/c80361a7-f9e6-4b5d-a689-95904676a926.png" alt="Orange Office Technologies" className="h-12 w-auto" />
            <span className="font-heading font-bold text-lg hidden md:block">Orange Office Technologies</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary font-medium">Services</Link>
            <Link to="/careers" className="text-gray-700 hover:text-primary font-medium">Careers</Link>
            <Link to="/clients" className="text-gray-700 hover:text-primary font-medium">Clients</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contact</Link>
          </nav>

          <Button className="bg-primary hover:bg-primary/90">Contact Us</Button>
        </div>
      </div>
    </header>
  );
};
