
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoCarouselProps {
  logos: { src: string; alt: string }[];
  className?: string;
  autoScroll?: boolean;
  speed?: number;
}

const LogoCarousel = ({
  logos,
  className,
  autoScroll = true,
  speed = 30,
}: LogoCarouselProps) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (!autoScroll) return;
    
    const scrollLogos = () => {
      setPosition((prev) => {
        const newPosition = prev - 1;
        // Reset position when all logos have scrolled
        if (Math.abs(newPosition) > (logos.length * 200)) {
          return 0;
        }
        return newPosition;
      });
    };

    const interval = setInterval(scrollLogos, speed);
    return () => clearInterval(interval);
  }, [autoScroll, logos.length, speed]);

  return (
    <div className={cn("w-full overflow-hidden relative", className)}>
      <div 
        className="flex items-center whitespace-nowrap transition-transform duration-300"
        style={{ transform: `translateX(${position}px)` }}
      >
        {/* Duplicate logos for infinite scroll effect */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="mx-8 flex-shrink-0">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { LogoCarousel };
