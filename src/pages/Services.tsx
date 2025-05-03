
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Users, Globe, Building2, Headset, Shield, ArrowRight, MessageSquare, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GradientBackground } from "@/components/GradientBackground";

const Services = () => {
  const services = [
    {
      icon: FileCheck,
      title: "Documentation Services",
      description: "Expert documentation handling including invoices, credit notes, and job profit statements.",
      image: "/1.png",
      link: "/services/documentation",
      color: "from-blue-500/20 to-blue-600/20",
      badge: "Popular"
    },
    {
      icon: Users,
      title: "Sales Support",
      description: "Centralized sales support for lead management and customer relationships.",
      image: "/2.png",
      link: "/services/sales-support",
      color: "from-amber-500/20 to-amber-600/20"
    },
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to boost your online presence.",
      image: "/3.png",
      link: "/services/digital-marketing",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      icon: Building2,
      title: "Accounts Management",
      description: "Professional accounting services for trade and non-trade transactions.",
      image: "/4.png",
      link: "/services/accounts",
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      icon: Headset,
      title: "Customer Service",
      description: "Dedicated customer service team handling bookings and nominations.",
      image: "/5.png",
      link: "/services/customer-service",
      color: "from-pink-500/20 to-pink-600/20"
    },
    {
      icon: Shield,
      title: "Software Solutions",
      description: "Custom software development following industry best practices.",
      image: "/6.png",
      link: "/services/software",
      color: "from-cyan-500/20 to-cyan-600/20",
      badge: "New"
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
      <GradientBackground 
        className="pt-32 pb-20 min-h-[60vh] flex items-center" 
        variant="primary" 
        intensity="medium"
        animated={true}
      >
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
      <section className="py-20 -mt-10 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 animate-fade-in overflow-hidden border-none"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-70`}></div>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  {service.badge && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                      {service.badge}
                    </div>
                  )}
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button variant="outline" className="w-full group" asChild>
                    <Link to={service.link} className="flex items-center justify-between">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We combine industry expertise with innovative technology to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefitsList.map((benefit, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
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

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-10 lg:p-16 flex flex-col justify-center">
                    <div className="mb-6">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 16H8C13.6 16 16 19.2 16 24V40H0V16ZM24 16H32C37.6 16 40 19.2 40 24V40H24V16Z" fill="currentColor" fillOpacity="0.2"/>
                      </svg>
                    </div>
                    <p className="text-xl mb-8 leading-relaxed italic">
                      "Orange Office Technologies has transformed our operations. Their comprehensive services have enabled us to focus on our core business while they handle our back-office functions with precision and expertise."
                    </p>
                    <div>
                      <p className="font-heading font-bold text-xl">Michael Chen</p>
                      <p className="text-gray-600">CEO, Global Shipping Partners</p>
                    </div>
                  </div>
                  <div className="hidden lg:block bg-gradient-to-br from-primary/80 to-primary/100">
                    <img 
                      src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80" 
                      alt="Happy client" 
                      className="w-full h-full object-cover mix-blend-overlay opacity-50"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GradientBackground 
        className="py-16" 
        variant="accent" 
        intensity="strong"
        animated={true}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let us show you how we can help streamline your processes and boost your business growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="shadow-lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn About Us</Link>
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
