
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Building2, CheckCircle, Globe, Shield } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

// Client logos - in a real implementation, these would be actual client logos
const clientLogos = [
  {
    name: "Global Shipping",
    industry: "Logistics",
    logo: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/clients/spotify-grayscale.svg"
  },
  {
    name: "Pacific Express",
    industry: "Shipping",
    logo: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/clients/microsoft-grayscale.svg"
  },
  {
    name: "Atlas Freight",
    industry: "Freight Forwarding",
    logo: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/clients/google-grayscale.svg"
  },
  {
    name: "LogiTech Solutions",
    industry: "Supply Chain",
    logo: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/clients/apple-grayscale.svg"
  },
  {
    name: "Rapid Transit",
    industry: "Transportation",
    logo: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/clients/netflix-grayscale.svg"
  },
  {
    name: "Warehouse Pro",
    industry: "Warehousing",
    logo: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/clients/airbnb-grayscale.svg"
  },
  {
    name: "Global Distribution",
    industry: "Distribution",
    logo: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/clients/uber-grayscale.svg"
  },
  {
    name: "Trade Connect",
    industry: "Export/Import",
    logo: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/clients/slack-grayscale.svg"
  }
];

// Testimonials data
const testimonials = [
  {
    quote: "Orange Office Technologies has transformed how we handle our logistics operations. Their documentation services have reduced our processing time by 40%.",
    author: "James Wilson",
    position: "Operations Manager",
    company: "Global Freight Solutions",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The team at OOT provided excellent support for our digital transition. Their IT expertise and industry knowledge made the process seamless.",
    author: "Sarah Chen",
    position: "IT Director",
    company: "Pacific Shipping Lines",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Their customer service team is exceptional. Our clients have noticed the difference in responsiveness and accuracy since we partnered with Orange Office.",
    author: "Michael Rodriguez",
    position: "Customer Service Head",
    company: "Express Logistics",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "We've seen a 30% increase in operational efficiency since implementing their back-office solutions. Highly recommended for logistics companies.",
    author: "Lisa Johnson",
    position: "CEO",
    company: "Johnson Freight Services",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The digital marketing campaign they designed for us brought in 40% more qualified leads in just three months. Exceptional results!",
    author: "David Kim",
    position: "Marketing Director",
    company: "Asia Connect Logistics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  }
];

const Clients = () => {
  const [api, setApi] = useState(null);
  const [clientsApi, setClientsApi] = useState(null);
  const isMobile = useIsMobile();

  // Set up auto-scrolling for testimonials
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api]);

  // Set up auto-scrolling for client logos
  useEffect(() => {
    if (!clientsApi) return;
    
    const interval = setInterval(() => {
      clientsApi.scrollNext();
    }, 3000);
    
    return () => clearInterval(interval);
  }, [clientsApi]);

  // Ensure scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-[#333333] to-gray-800 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] transform translate-x-1/3 -translate-y-1/4">
            <div className="w-full h-full bg-[#F58220]/20 transform rotate-45"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] transform -translate-x-1/3 translate-y-1/4">
            <div className="w-full h-full bg-[#FFC78E]/20 transform -rotate-45"></div>
          </div>
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-[#FF7F50]/30 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-[#F58220]/20 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 animate-fade-in bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Trusted By Leading Organizations
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              Our client portfolio spans across various industries, with a strong focus on freight forwarding and logistics companies who trust us with their business operations.
            </p>
          </div>
        </div>
        
        {/* Wave divider at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                  className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              icon: Shield,
              title: "Trusted Partner",
              description: "50+ companies rely on our services"
            }, {
              icon: CheckCircle,
              title: "Quality Assured",
              description: "ISO certified processes"
            }, {
              icon: Globe,
              title: "Global Reach",
              description: "Supporting clients across continents"
            }, {
              icon: Building2,
              title: "Industry Expertise",
              description: "10+ years in logistics IT"
            }].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50 overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#F58220] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#F58220]/10 flex items-center justify-center mb-4 group-hover:bg-[#F58220]/20 transition-colors">
                      <item.icon className="h-8 w-8 text-[#F58220]" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Showcase with Auto-Scrolling */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F58220]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFC78E]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 text-gray-800">Our Clients</h2>
          
          <div className="max-w-6xl mx-auto">
            <Carousel setApi={setClientsApi} opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {clientLogos.map((client, index) => (
                  <CarouselItem key={index} className={`${isMobile ? 'basis-1/2' : 'basis-1/4'} p-2`}>
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center h-full transform hover:-translate-y-1 border border-gray-100">
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="h-16 w-auto mb-4 opacity-80 hover:opacity-100 transition-opacity" 
                      />
                      <h3 className="font-heading font-bold text-lg text-center text-gray-800">{client.name}</h3>
                      <p className="text-[#F58220] text-sm text-center">{client.industry}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-2">
                <CarouselPrevious className="relative static translate-y-0 left-0" />
                <CarouselNext className="relative static translate-y-0 right-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel with Images - Auto-scrolling */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 text-gray-800">What Our Clients Say</h2>
          
          <div className="max-w-5xl mx-auto">
            <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className={isMobile ? "basis-full" : "basis-1/2"}>
                    <div className="p-4">
                      <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                        <CardContent className="p-0">
                          <div className="bg-gradient-to-br from-[#F58220]/10 to-white p-8 flex flex-col h-full">
                            <div className="flex items-center mb-6">
                              <div className="mr-4 h-16 w-16 rounded-full overflow-hidden border-2 border-[#F58220] flex-shrink-0">
                                <img 
                                  src={testimonial.image} 
                                  alt={testimonial.author} 
                                  className="h-full w-full object-cover" 
                                />
                              </div>
                              <div>
                                <p className="font-heading font-bold text-lg text-gray-800">{testimonial.author}</p>
                                <p className="text-[#F58220]">{testimonial.position}</p>
                                <p className="text-gray-600 text-sm">{testimonial.company}</p>
                              </div>
                            </div>
                            <div className="text-6xl text-[#F58220]/20 absolute top-4 right-4">"</div>
                            <blockquote className="text-gray-700 italic mb-6 relative z-10 flex-grow">
                              {testimonial.quote}
                            </blockquote>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-2">
                <CarouselPrevious className="relative static translate-y-0 left-0" />
                <CarouselNext className="relative static translate-y-0 right-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2C2C2C] to-[#444444] text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] transform translate-x-1/3 -translate-y-1/4">
            <div className="w-full h-full bg-[#F58220]/30 transform rotate-45"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] transform -translate-x-1/3 translate-y-1/4">
            <div className="w-full h-full bg-[#FFC78E]/30 transform -rotate-45"></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to Join Our Client List?</h2>
            <p className="text-lg mb-8 text-gray-300">
              Let us show you how we can transform your operations and help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                <Link to="/services">Learn More</Link>
              </Button>
              <Button className="bg-[#F58220] hover:bg-[#F58220]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
