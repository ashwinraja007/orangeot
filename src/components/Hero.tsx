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
  return <section className="pt-0 relative overflow-hidden min-h-[100vh] flex flex-col justify-center bg-black">
      {/* Fullscreen Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={backgroundImage} alt="Hero Background" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-black/60 mix-blend-multiply"></div>
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-4 relative z-10 my-auto py-16 md:py-24 flex flex-col justify-between h-full">
        <div className="flex-grow flex items-center">
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-400/20 text-orange-300 mb-8 animate-fade-in text-sm font-medium backdrop-blur-sm border border-orange-400/20 px-[16px] py-[8px]">
              <Sparkles className="w-4 h-4" />
              <span>Logistics KPO Excellence</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl mb-8 animate-fade-in text-white leading-tight tracking-tight font-bold lg:text-5xl">
              Powering <span className="text-gradient bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent font-extrabold">Logistics</span><br className="hidden md:block" /> Excellence
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in delay-75 max-w-lg mx-auto lg:mx-0">
              Back Office | IT Solutions | Digital Marketing | Inside Sales
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="glass-button bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border-0">
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/40 hover:bg-white/10 rounded-xl backdrop-blur-sm text-slate-950">
                <Link to="/services" className="flex items-center gap-2">
                  Our Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Client Logos Carousel moved to bottom of hero */}
        <div className="mt-auto animate-fade-in delay-200 relative z-10 mb-8">
          <p className="text-white text-center mb-6 text-sm uppercase tracking-wider font-medium flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent via-white to-transparent"></span>
            Trusted by leading companies
            <span className="h-px w-8 bg-gradient-to-r from-transparent via-white to-transparent"></span>
          </p>
          <div className="p-4 rounded-2xl backdrop-blur-sm border border-white/30 shadow-lg py-0 bg-white/10 px-0">
            <LogoCarousel logos={logos} className="py-4" />
          </div>
        </div>
      </div>
    </section>;
};