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
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-between h-full">
        <div className="flex-grow flex items-center">
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0 backdrop-blur-md rounded-xl p-6 shadow-lg my-12 md:my-[240px] bg-transparent">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 text-orange-700 mb-4 md:mb-6 text-sm font-medium px-4 py-2 border border-orange-300">
              <Sparkles className="w-4 h-4" />
              <span>Logistics KPO Excellence</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 leading-tight tracking-tight font-bold text-slate-50">
              Powering{" "}
              <span className="bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 bg-clip-text text-transparent font-extrabold">
                Logistics
              </span>
              <br className="hidden md:block" /> Excellence
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-lg mx-auto lg:mx-0">
              Back Office | IT Solutions | Digital Marketing | Inside Sales
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};