import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface HeroProps {
  backgroundImages?: string[];
}
export const Hero = ({
  backgroundImages = ["/1h.png", "/3h.png", "/4h.png", "/5h.png", "/3h.png"]
}: HeroProps) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    fade: true,
    speed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false
  };
  return <section className="relative overflow-hidden min-h-[90vh] md:min-h-[100vh] flex flex-col justify-between bg-white">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {backgroundImages.map((img, idx) => <div key={idx}>
              <img src={img} alt={`Slide ${idx + 1}`} className="w-full h-screen object-cover object-center" />
            </div>)}
        </Slider>
      </div>

      {/* Foreground Content */}
      <div className="container mx-auto px-4 relative z-10 md:py-16 flex flex-col justify-between h-full py-0">
        <div className="flex-grow flex items-center mx-0 md:my-[87px] my-[35px]">
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0 bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg py-[28px] my-[240px] px-[24px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-700 mb-4 md:mb-8 text-sm font-medium px-4 py-2 border border-orange-300">
              <Sparkles className="w-4 h-4" />
              <span>Logistics KPO Excellence</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-8 text-gray-900 leading-tight tracking-tight font-bold lg:text-5xl">
              Powering{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 bg-clip-text text-transparent font-extrabold">
                Logistics
              </span>
              <br className="hidden md:block" /> Excellence
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 md:mb-8 max-w-lg mx-auto lg:mx-0">
              Back Office | IT Solutions | Digital Marketing | Inside Sales
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border-0 text-sm md:text-base">
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-orange-400 hover:bg-orange-50 rounded-xl text-sm md:text-base text-orange-700">
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