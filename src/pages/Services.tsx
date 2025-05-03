
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Users, Globe, Building2, Headset, Shield, ArrowRight, MessageSquare, BarChart, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GradientBackground } from "@/components/GradientBackground";

const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Documentation Services",
      description: "Expert documentation handling including invoices, credit notes, and job profit statements.",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&h=600&q=80",
      link: "/services/documentation",
      color: "from-blue-500/80 to-blue-600/80",
      badge: "Popular",
      bgColor: "bg-blue-50"
    }, 
    {
      icon: Users,
      title: "Sales Support",
      description: "Centralized sales support for lead management and customer relationships.",
      image: "https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=800&h=600&q=80",
      link: "/services/sales-support",
      color: "from-amber-500/80 to-amber-600/80",
      bgColor: "bg-amber-50"
    }, 
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to boost your online presence.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?auto=format&fit=crop&w=800&h=600&q=80",
      link: "/services/digital-marketing",
      color: "from-green-500/80 to-green-600/80",
      bgColor: "bg-green-50"
    }, 
    {
      icon: Building2,
      title: "Accounts Management",
      description: "Professional accounting services for trade and non-trade transactions.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&h=600&q=80",
      link: "/services/accounts",
      color: "from-purple-500/80 to-purple-600/80",
      bgColor: "bg-purple-50"
    }, 
    {
      icon: Headset,
      title: "Customer Service",
      description: "Dedicated customer service team handling bookings and nominations.",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?auto=format&fit=crop&w=800&h=600&q=80",
      link: "/services/customer-service",
      color: "from-pink-500/80 to-pink-600/80",
      bgColor: "bg-pink-50"
    }, 
    {
      icon: Shield,
      title: "Software Solutions",
      description: "Custom software development following industry best practices.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&h=600&q=80",
      link: "/services/software",
      badge: "New",
      bgColor: "bg-cyan-50",
      color: "from-cyan-500/80 to-cyan-600/80"
    }
  ];
  
  const benefitsList = [
    {
      icon: <MessageSquare className="h-10 w-10 text-primary" />,
      title: "Streamlined Communication",
      description: "Efficient information flow between all stakeholders"
    }, 
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Data Security",
      description: "Enterprise-grade protection for sensitive information"
    }, 
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Performance Analytics",
      description: "Real-time insights and operational metrics"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Gradient Background */}
      <GradientBackground className="pt-28 pb-16 min-h-[60vh] flex items-center" variant="primary" intensity="medium" animated={true}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-primary mb-6">
              <span className="font-medium">Our Services</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              Comprehensive Solutions for Logistics Excellence
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-75">
              Innovative services designed specifically for the freight forwarding and logistics industry
            </p>
          </div>
        </div>
      </GradientBackground>

      {/* Services Grid with Enhanced Design */}
      <section className="py-16 -mt-10 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="border-none hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl h-full transform hover:-translate-y-1">
                  <div className="relative">
                    {/* Service image with overlay */}
                    <div className="h-48 sm:h-56 overflow-hidden relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-90 mix-blend-multiply`}></div>
                      
                      {/* Service icon */}
                      <div className="absolute top-4 left-4">
                        <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
                          <service.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Badge if available */}
                      {service.badge && (
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-orange-600 text-xs font-bold px-2 py-1 rounded shadow-sm">
                          {service.badge}
                        </div>
                      )}
                    </div>
                    
                    {/* Service content */}
                    <CardContent className={`p-6 ${service.bgColor}`}>
                      <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-gray-600 line-clamp-3 mb-4">{service.description}</p>
                      <Link 
                        to={service.link} 
                        className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Learn More
                        <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced with better visuals */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Why Choose Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We combine industry expertise with innovative technology to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefitsList.map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border-b-4 border-primary/50 hover:border-primary"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with stronger visual impact */}
      <GradientBackground className="py-16" variant="accent" intensity="strong" animated={true}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-6 text-white">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
              Let us show you how we can help streamline your processes and boost your business growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="shadow-lg bg-white text-orange-600 hover:bg-gray-100" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </GradientBackground>

      <Footer />
    </div>
  );
};

export default Services;
