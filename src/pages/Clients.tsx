
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Building2, CheckCircle, Globe, Shield } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Client logos - in a real implementation, these would be actual client logos
const clientLogos = [
  { name: "Client 1", industry: "Logistics" },
  { name: "Client 2", industry: "Shipping" },
  { name: "Client 3", industry: "Freight Forwarding" },
  { name: "Client 4", industry: "Supply Chain" },
  { name: "Client 5", industry: "Transportation" },
  { name: "Client 6", industry: "Warehousing" },
  { name: "Client 7", industry: "Distribution" },
  { name: "Client 8", industry: "Export/Import" },
];

// Testimonials data
const testimonials = [
  {
    quote: "Orange Office Technologies has transformed how we handle our logistics operations. Their documentation services have reduced our processing time by 40%.",
    author: "James Wilson",
    position: "Operations Manager",
    company: "Global Freight Solutions"
  },
  {
    quote: "The team at OOT provided excellent support for our digital transition. Their IT expertise and industry knowledge made the process seamless.",
    author: "Sarah Chen",
    position: "IT Director",
    company: "Pacific Shipping Lines"
  },
  {
    quote: "Their customer service team is exceptional. Our clients have noticed the difference in responsiveness and accuracy since we partnered with Orange Office.",
    author: "Michael Rodriguez",
    position: "Customer Service Head",
    company: "Express Logistics"
  }
];

const Clients = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              Trusted By Leading Organizations
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in">
              Our client portfolio spans across various industries, with a strong focus on freight forwarding and logistics companies who trust us with their business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Trusted Partner", description: "50+ companies rely on our services" },
              { icon: CheckCircle, title: "Quality Assured", description: "ISO certified processes" },
              { icon: Globe, title: "Global Reach", description: "Supporting clients across continents" },
              { icon: Building2, title: "Industry Expertise", description: "10+ years in logistics IT" }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <item.icon className="h-12 w-12 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logo Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center aspect-video">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-center">{client.name}</h3>
                <p className="text-gray-500 text-sm text-center">{client.industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">What Our Clients Say</h2>
          
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="p-6">
                      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-8">
                          <div className="flex justify-center mb-6">
                            <div className="text-6xl text-primary">"</div>
                          </div>
                          <blockquote className="text-xl text-center italic mb-8">
                            {testimonial.quote}
                          </blockquote>
                          <div className="text-center">
                            <p className="font-heading font-bold text-lg">{testimonial.author}</p>
                            <p className="text-gray-600">{testimonial.position}</p>
                            <p className="text-primary font-medium">{testimonial.company}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Ready to Join Our Client List?</h2>
            <p className="text-lg mb-8 text-white/90">
              Let us show you how we can transform your operations and help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">Learn More</Button>
              <Button className="bg-white text-primary hover:bg-white/90">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
