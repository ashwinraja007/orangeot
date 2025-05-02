
import { useState } from 'react';

export const AboutOfficeImages = () => {
  const [activeImage, setActiveImage] = useState(0);
  
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

  return (
    <div className="relative w-full">
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-2xl font-bold">{images[activeImage].caption}</h3>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`overflow-hidden rounded-lg border-2 ${
              activeImage === index ? 'border-orange-500' : 'border-transparent'
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
