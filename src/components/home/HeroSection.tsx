
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { LogoCarousel } from "@/components/ui/logo-carousel";

interface HeroSectionProps {
  clientLogos: Array<{src: string; alt: string}>;
}

export const HeroSection = ({ clientLogos }: HeroSectionProps) => {
  return (
    <section className="pt-24 md:pt-28 pb-10 lg:pb-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Background office image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1622126807280-9b5b32b28e77?auto=format&fit=crop&q=80&w=1920" 
          alt="Modern Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
      </div>
      
      {/* Glass Geometric Pattern Overlays */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] transform translate-x-1/3 -translate-y-1/4">
          <div className="w-full h-full bg-gradient-to-br from-orange-400/20 to-amber-300/20 transform rotate-45 rounded-[40%] animate-float"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] transform -translate-x-1/3 translate-y-1/4">
          <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-cyan-300/10 transform -rotate-45 rounded-[40%] animate-float" 
            style={{ animationDelay: "2s" }}>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-200 mb-6 animate-fade-in text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Logistics KPO Excellence</span>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in text-white leading-tight tracking-tight">
              Your <span className="text-gradient bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 bg-clip-text text-transparent font-extrabold">Preferred</span><br className="hidden md:block" /> IT Partner
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in delay-75 max-w-lg mx-auto lg:mx-0">
              We deliver comprehensive back-office, IT, digital marketing, and telesales solutions tailored for freight forwarders.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="glass-button bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border-0">
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-orange-400 text-orange-100 hover:bg-orange-500/20 rounded-xl">
                <Link to="/services" className="flex items-center gap-2">
                  Our Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative mt-10 lg:mt-0 animate-fade-in-right">
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1600" 
                alt="Modern Office Interior" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg md:text-xl font-bold mb-1">Modern Workspace</h3>
                <p className="text-sm md:text-base text-white/80">Where innovation thrives</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-400/30 to-orange-300/30 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-red-400/20 rounded-full blur-3xl animate-float"></div>
          </div>
        </div>
        
        {/* Client logos - Auto-scrolling */}
        <div className="mt-16 animate-fade-in delay-200">
          <p className="text-white text-center mb-6 text-sm uppercase tracking-wider font-medium flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
            Trusted by leading companies
            <span className="h-px w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
          </p>
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg">
            <LogoCarousel logos={clientLogos} className="py-4" />
          </div>
        </div>
      </div>
    </section>
  );
};
