
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Users, Globe, Building2, Headset, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Documentation Services",
      description: "Expert documentation handling including invoices, credit notes, and job profit statements based on provisional entries."
    },
    {
      icon: Users,
      title: "Sales Support Desk",
      description: "Centralized sales support for lead management and customer relationships, improving client acquisition and retention."
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to boost your online presence and connect with potential customers."
    },
    {
      icon: Building2,
      title: "Accounts Management",
      description: "Professional accounting services covering trade and non-trade transactions for complete financial clarity."
    },
    {
      icon: Headset,
      title: "Customer Service",
      description: "Dedicated customer service team handling bookings and nominations with expertise and care."
    },
    {
      icon: Shield,
      title: "Software Solutions",
      description: "Custom software development following industry best practices and modern technologies."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in">
              Comprehensive solutions tailored for the freight forwarding and logistics industry
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-none animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-primary/10 rounded-full">
                      <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="font-heading font-bold text-xl">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg mb-8 text-white/90">
              Let us show you how we can help streamline your processes and boost your business growth.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 animate-fade-in"
              asChild
            >
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
