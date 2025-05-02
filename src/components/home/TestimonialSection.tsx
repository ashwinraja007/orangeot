
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      position: "CEO, Global Shipping Partners",
      company: "GSP Inc.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      quote: "Orange Office Technologies has transformed our operations. Their comprehensive services have enabled us to focus on our core business while they handle our back-office functions with precision and expertise.",
      rating: 5,
      bgColor: "from-blue-500/10 to-blue-600/5"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Operations Director",
      company: "FastFreight Logistics",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
      quote: "The documentation team at Orange Office Technologies has been a game-changer for our business. Their attention to detail and prompt service has improved our operational efficiency by 40%.",
      rating: 5,
      bgColor: "from-purple-500/10 to-purple-600/5"
    },
    {
      id: 3,
      name: "David Rodriguez",
      position: "Head of IT",
      company: "Oceanic Transport Solutions",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
      quote: "Their custom software solutions have streamlined our workflows and increased productivity. The technical expertise and industry knowledge they bring is unmatched in the market.",
      rating: 4,
      bgColor: "from-green-500/10 to-green-600/5"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50/50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-amber-300/10 to-orange-300/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-gradient-to-br from-orange-300/10 to-amber-300/5 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm mb-4">Trusted by Industry Leaders</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Hear from the companies that have transformed their operations with our services
          </p>
        </motion.div>
        
        {/* Featured testimonial */}
        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card key={testimonials[activeIndex].id} className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className={`p-8 md:p-10 bg-gradient-to-br ${testimonials[activeIndex].bgColor}`}>
                  <div className="flex justify-start mb-6">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                    ))}
                    {[...Array(5-testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i + testimonials[activeIndex].rating} className="h-5 w-5 text-gray-200" />
                    ))}
                  </div>
                  
                  <motion.blockquote 
                    className="text-gray-700 italic mb-8 text-lg md:text-xl leading-relaxed"
                    variants={itemVariants}
                  >
                    "{testimonials[activeIndex].quote}"
                  </motion.blockquote>
                  
                  <motion.div className="flex items-center gap-4" variants={itemVariants}>
                    <Avatar className="h-14 w-14 border-2 border-white shadow-md">
                      <img 
                        src={testimonials[activeIndex].image} 
                        alt={testimonials[activeIndex].name} 
                        className="object-cover"
                      />
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900 text-lg">{testimonials[activeIndex].name}</p>
                      <p className="text-sm text-gray-500">{testimonials[activeIndex].position}</p>
                      <p className="text-xs text-orange-600 font-medium">{testimonials[activeIndex].company}</p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="relative hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1600" 
                    alt="Office environment" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-amber-500/30 mix-blend-multiply"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white/20">
                      <Link to="/clients" className="flex items-center justify-center gap-2">
                        Read More Success Stories
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        {/* Testimonial selector */}
        <div className="flex justify-center gap-3">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === index 
                  ? 'bg-orange-500 w-6' 
                  : 'bg-gray-300 hover:bg-orange-300'
              }`}
              aria-label={`View testimonial from ${testimonial.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
