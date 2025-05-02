
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      position: "CEO, Global Shipping Partners",
      company: "GSP Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      quote: "Orange Office Technologies has transformed our operations. Their comprehensive services have enabled us to focus on our core business while they handle our back-office functions with precision and expertise.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Operations Director",
      company: "FastFreight Logistics",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
      quote: "The documentation team at Orange Office Technologies has been a game-changer for our business. Their attention to detail and prompt service has improved our operational efficiency by 40%.",
      rating: 5
    },
    {
      id: 3,
      name: "David Rodriguez",
      position: "Head of IT",
      company: "Oceanic Transport Solutions",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
      quote: "Their custom software solutions have streamlined our workflows and increased productivity. The technical expertise and industry knowledge they bring is unmatched in the market.",
      rating: 4
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50/50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from the companies that have transformed their operations with our services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 group animate-on-scroll hover:-translate-y-2" style={{animationDelay: `${testimonial.id * 100}ms`}}>
              <CardContent className="p-0">
                <div className="p-8 bg-white">
                  <div className="flex justify-start mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                    ))}
                    {[...Array(5-testimonial.rating)].map((_, i) => (
                      <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-200" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-8">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-12 w-12 rounded-full object-cover border-2 border-orange-200"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                      <p className="text-xs text-orange-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
                <div className="h-1.5 bg-gradient-to-r from-orange-500 to-amber-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
