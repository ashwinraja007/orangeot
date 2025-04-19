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
const clientLogos = [{
  name: "Client 1",
  industry: "Logistics"
}, {
  name: "Client 2",
  industry: "Shipping"
}, {
  name: "Client 3",
  industry: "Freight Forwarding"
}, {
  name: "Client 4",
  industry: "Supply Chain"
}, {
  name: "Client 5",
  industry: "Transportation"
}, {
  name: "Client 6",
  industry: "Warehousing"
}, {
  name: "Client 7",
  industry: "Distribution"
}, {
  name: "Client 8",
  industry: "Export/Import"
}];

// Testimonials data
const testimonials = [{
  quote: "Orange Office Technologies has transformed how we handle our logistics operations. Their documentation services have reduced our processing time by 40%.",
  author: "James Wilson",
  position: "Operations Manager",
  company: "Global Freight Solutions"
}, {
  quote: "The team at OOT provided excellent support for our digital transition. Their IT expertise and industry knowledge made the process seamless.",
  author: "Sarah Chen",
  position: "IT Director",
  company: "Pacific Shipping Lines"
}, {
  quote: "Their customer service team is exceptional. Our clients have noticed the difference in responsiveness and accuracy since we partnered with Orange Office.",
  author: "Michael Rodriguez",
  position: "Customer Service Head",
  company: "Express Logistics"
}, {
  quote: "We've seen a 30% increase in operational efficiency since implementing their back-office solutions. Highly recommended for logistics companies.",
  author: "Lisa Johnson",
  position: "CEO",
  company: "Johnson Freight Services"
}, {
  quote: "The digital marketing campaign they designed for us brought in 40% more qualified leads in just three months. Exceptional results!",
  author: "David Kim",
  position: "Marketing Director",
  company: "Asia Connect Logistics"
}];

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
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 animate-fade-in bg-gradient-to-r from-white to-silver-gray/80 bg-clip-text text-transparent">
              Trusted By Leading Organizations
            </h1>
            <p className="text-xl text-silver-gray/90 mb-8 animate-fade-in">
              Our client portfolio spans across various industries, with a strong focus on freight forwarding and logistics companies who trust us with their business operations.
            </p>
          </div>
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
          }].map((item, index) => <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 hover:bg-gray-50">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-silver-gray/10 flex items-center justify-center">
                      <item.icon className="h-8 w-8 text-gray-700" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Client Logo Showcase with Auto-Scrolling */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text text-transparent">Our Clients</h2>
          
          <div className="max-w-6xl mx-auto">
            <Carousel className="w-full" setApi={setClientsApi} opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {clientLogos.map((client, index) => (
                  <CarouselItem key={index} className={`${isMobile ? 'basis-1/2' : 'basis-1/4'} p-2`}>
                    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center aspect-video h-full transform hover:-translate-y-1">
                      <div className="w-16 h-16 rounded-full bg-silver-gray/10 flex items-center justify-center mb-4">
                        <Briefcase className="h-8 w-8 text-gray-700" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-center">{client.name}</h3>
                      <p className="text-gray-500 text-sm text-center">{client.industry}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static translate-y-0 left-0" />
              <CarouselNext className="relative static translate-y-0 right-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel - Auto-scrolling */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text text-transparent">What Our Clients Say</h2>
          
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full" setApi={setApi} opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className={isMobile ? "basis-full" : "basis-1/2"}>
                    <div className="p-4">
                      <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                        <CardContent className="p-8 flex flex-col h-full">
                          <div className="flex justify-center mb-6">
                            <div className="text-6xl text-silver-gray">"</div>
                          </div>
                          <blockquote className="text-lg text-center italic mb-8 flex-grow">
                            {testimonial.quote}
                          </blockquote>
                          <div className="text-center mt-auto">
                            <p className="font-heading font-bold text-lg">{testimonial.author}</p>
                            <p className="text-gray-600">{testimonial.position}</p>
                            <p className="text-gray-700 font-medium">{testimonial.company}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static translate-y-0 left-0" />
              <CarouselNext className="relative static translate-y-0 right-0" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-white to-silver-gray/80 bg-clip-text text-transparent">Ready to Join Our Client List?</h2>
            <p className="text-lg mb-8 text-white/90">
              Let us show you how we can transform your operations and help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" className="border-silver-gray/30 text-silver-gray hover:bg-white/10">
                <Link to="/services">Learn More</Link>
              </Button>
              <Button className="bg-white text-gray-900 hover:bg-white/90 shadow-lg">
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
