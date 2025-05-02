
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const AboutOfficeImages = () => {
  const [activeImage, setActiveImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const images = [
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      alt: "Office Building Exterior",
      caption: "Our Global Headquarters"
    },
    {
      src: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
      alt: "Modern Office Interior",
      caption: "Workspace Designed for Collaboration"
    },
    {
      src: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&w=1200&q=80",
      alt: "Conference Room",
      caption: "Where Ideas Take Shape"
    },
    {
      src: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?auto=format&fit=crop&w=1200&q=80",
      alt: "Office Workstations",
      caption: "Our Operational Hub"
    }
  ];

  // Auto-rotate images every 5 seconds if not hovering
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (!isHovering) {
      interval = setInterval(() => {
        setActiveImage((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isHovering, images.length]);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="relative w-full" 
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
        <motion.div
          key={activeImage}
          initial={{ opacity: 0.5, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full"
        >
          <img
            src={images[activeImage].src}
            alt={images[activeImage].alt}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        </motion.div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-6 left-6 text-white"
        >
          <h3 className="text-2xl font-bold">{images[activeImage].caption}</h3>
        </motion.div>
      </div>
      
      <div className="mt-4 grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`overflow-hidden rounded-lg border-2 ${
              activeImage === index ? 'border-orange-500 scale-105' : 'border-transparent'
            } transition-all duration-300 hover:opacity-90`}
            onClick={() => setActiveImage(index)}
          >
            <img 
              src={image.src} 
              alt={`Thumbnail ${index + 1}`} 
              className="w-full h-16 object-cover"
            />
          </button>
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-orange-400/30 to-amber-300/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-amber-300/20 to-orange-400/20 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};
