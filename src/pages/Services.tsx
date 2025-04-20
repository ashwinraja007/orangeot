
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
      description: "Expert documentation handling including invoices, credit notes, and job profit statements.",
      image: "/1.png",
      link: "/services/documentation"
    },
    {
      icon: Users,
      title: "Sales Support",
      description: "Centralized sales support for lead management and customer relationships.",
      image: "/2.png",
      link: "/services/sales-support"
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to boost your online presence.",
      image: "/3.png",
      link: "/services/digital-marketing"
    },
    {
      icon: Building2,
      title: "Accounts Management",
      description: "Professional accounting services for trade and non-trade transactions.",
      image: "/4.png",
      link: "/services/accounts"
    },
    {
      icon: Headset,
      title: "Customer Service",
      description: "Dedicated customer service team handling bookings and nominations.",
      image: "/5.png",
      link: "/services/customer-service"
    },
    {
      icon: Shield,
      title: "Software Solutions",
      description: "Custom software development following industry best practices.",
      image: "/6.png",
      link: "/services/software"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-8 animate-fade-in">
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
                className="group hover:shadow-xl transition-all duration-300 border-none animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{service.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-white/90 mb-8 text-base md:text-lg">
              Let us show you how we can help streamline your processes and boost your business growth.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
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
