
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { LogoCarousel } from "@/components/ui/logo-carousel";
interface HeroProps {
  logos: {
    src: string;
    alt: string;
  }[];
  backgroundImage?: string;
}
export const Hero = ({
  logos,
  backgroundImage = "/he.jpg"
}: HeroProps) => {
  return <section className="pt-0 relative overflow-hidden min-h-[90vh] md:min-h-[100vh] flex flex-col justify-between bg-black">
      {/* Fullscreen Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="Hero Background" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-black/60 mix-blend-multiply"></div>
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-4 relative z-10 py-8 md:py-16 flex flex-col justify-between h-full">
        <div className="flex-grow flex items-center mx-0 my-8 md:my-[184px]">
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-400/20 text-orange-300 mb-4 md:mb-8 animate-fade-in text-sm font-medium backdrop-blur-sm border border-orange-400/20 px-[16px] py-[8px]">
              <Sparkles className="w-4 h-4" />
              <span>Logistics KPO Excellence</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-8 animate-fade-in text-white leading-tight tracking-tight font-bold lg:text-5xl">
              Powering <span className="text-gradient bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent font-extrabold">Logistics</span><br className="hidden md:block" /> Excellence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 md:mb-8 animate-fade-in delay-75 max-w-lg mx-auto lg:mx-0">
              Back Office | IT Solutions | Digital Marketing | Inside Sales
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="glass-button bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border-0 text-sm md:text-base">
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/40 hover:bg-white/10 rounded-xl backdrop-blur-sm text-slate-50 text-sm md:text-base">
                <Link to="/services" className="flex items-center gap-2">
                  Our Services
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Client Logos Carousel moved to bottom of hero */}
       <div className="mt-6 md:mt-20 animate-fade-in delay-200 relative z-10 bg-inherit">
          <p className="text-center mb-3 md:mb-6 text-xs md:text-sm uppercase tracking-wider font-medium flex items-center justify-center gap-2 text-slate-50">
            <span className="h-px w-8 bg-gradient-to-r from-transparent via-black to-transparent"></span>
            Trusted by leading companies
            <span className="h-px w-8 bg-gradient-to-r from-transparent via-black to-transparent"></span>
          </p>
          <div className="p-2 md:p-4 rounded-2xl backdrop-blur-sm border border-black/10 shadow-lg py-0 bg-white px-0">
            <LogoCarousel logos={logos} className="py-2 md:py-4" />
          </div>
        </div>
      </div>
    </section>;
};
