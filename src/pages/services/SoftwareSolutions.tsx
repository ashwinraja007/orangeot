
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Code, Server, Database, Laptop, Cloud, Settings } from "lucide-react";

const SoftwareSolutions = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions designed specifically for freight forwarding and logistics operations."
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud-based applications that provide accessibility from anywhere in the world."
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Efficient data storage and management systems optimized for logistics operations."
    },
    {
      icon: Server,
      title: "API Integration",
      description: "Seamless integration with third-party logistics platforms and carrier systems."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <GradientBackground 
        className="pt-32 pb-20 min-h-[60vh] flex items-center" 
        variant="primary" 
        intensity="medium"
        animated={true}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-600 mb-6">
              <Shield className="h-4 w-4" />
              <span className="font-medium">Software Solutions</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              Custom Software for Logistics
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-75">
              Advanced software solutions that streamline operations and drive efficiency for freight forwarders
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl" 
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Discuss Your Requirements
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </GradientBackground>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                Tailored Software Solutions for Logistics
              </h2>
              <p className="text-gray-600 mb-6">
                In today's digital world, efficient software systems are essential for logistics businesses to remain competitive. Our team of expert developers creates custom software solutions that address the unique challenges faced by freight forwarders.
              </p>
              <p className="text-gray-600 mb-6">
                From shipment tracking systems to comprehensive operations management platforms, we deliver robust and scalable solutions that grow with your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600" asChild>
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80" 
                alt="Software Development" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Industry-Specific Solutions</h3>
                <p className="text-white/80">Software designed for logistics professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Software Development Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive development solutions designed specifically for the logistics industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white hover:-translate-y-1 rounded-2xl">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-6">
                    <service.icon className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Development Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A systematic approach to creating effective software solutions
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Process timeline */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-cyan-200 transform -translate-x-1/2"></div>
              
              {[
                {
                  step: "01",
                  title: "Requirements Analysis",
                  description: "We work closely with you to understand your specific needs and operational challenges.",
                  icon: <Settings className="h-6 w-6 text-white" />
                },
                {
                  step: "02",
                  title: "Design & Architecture",
                  description: "Our team creates a comprehensive system design that addresses your requirements.",
                  icon: <Laptop className="h-6 w-6 text-white" />
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  description: "We follow agile methodologies to develop and rigorously test your software.",
                  icon: <Code className="h-6 w-6 text-white" />
                },
                {
                  step: "04",
                  title: "Deployment & Support",
                  description: "We ensure smooth deployment and provide ongoing support and maintenance.",
                  icon: <Cloud className="h-6 w-6 text-white" />
                }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 mb-8 md:mb-0 px-4">
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <h3 className="font-heading font-bold text-2xl mb-4 flex items-center gap-3">
                        <span className="bg-cyan-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm">{item.step}</span>
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center z-10">
                      {item.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-6">
              Ready to Digitize Your Logistics Operations?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Let our team of experienced developers create custom software solutions that meet your specific needs.
            </p>
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50" asChild>
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareSolutions;
