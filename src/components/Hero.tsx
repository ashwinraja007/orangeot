
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  backgroundImage?: string;
}

export const Hero = ({
  backgroundImage = "/he.jpg"
}: HeroProps) => {
  return <section className="pt-0 relative overflow-hidden min-h-[90vh] md:min-h-[100vh] flex flex-col justify-between bg-black">
      {/* Fullscreen Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="Hero Background" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/80 via-primary-dark/60 to-primary-dark/70 mix-blend-multiply"></div>
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-4 relative z-10 md:py-16 flex flex-col justify-between h-full py-0">
        <div className="flex-grow flex items-center mx-0 md:my-[87px] my-[35px]">
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0 my-[24px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 text-primary-light mb-4 md:mb-8 animate-fade-in text-sm font-medium backdrop-blur-sm border border-primary/20 px-[16px] py-[8px]">
              <Sparkles className="w-4 h-4" />
              <span>Logistics KPO Excellence</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-8 animate-fade-in text-white leading-tight tracking-tight font-bold lg:text-5xl">
              Powering <span className="text-gradient bg-gradient-to-r from-accent-coral via-accent-peach to-accent-coral bg-clip-text text-transparent font-extrabold">Logistics</span><br className="hidden md:block" /> Excellence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 md:mb-8 animate-fade-in delay-75 max-w-lg mx-auto lg:mx-0">
              Back Office | IT Solutions | Digital Marketing | Inside Sales
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="glass-button bg-gradient-to-r from-primary to-accent-coral hover:from-primary/90 hover:to-accent-coral/90 text-white shadow-lg hover:shadow-royal-glow transition-all duration-300 rounded-xl border-0 text-sm md:text-base">
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/40 hover:bg-white/10 rounded-xl backdrop-blur-sm text-sm md:text-base text-white">
                <Link to="/services" className="flex items-center gap-2">
                  Our Services
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
