import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, FileCheck, Globe, Headset, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Your Preferred IT Partner
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We deliver comprehensive back-office, IT, digital marketing, and telesales solutions tailored for freight forwarders.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-video bg-gradient-to-r from-primary to-accent rounded-lg shadow-xl overflow-hidden">
                {/* Placeholder for a hero image - would be replaced with an actual image */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Shield className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  "We deliver comprehensive back-office, IT, digital marketing, and telesales solutions tailored for freight forwarders, helping them streamline operations, boost visibility, and scale efficiently."
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardContent className="p-8">
                <h2 className="font-heading font-bold text-2xl mb-4 text-primary">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  "To set the industry benchmark in KPO services for freight forwarding and logistics, enabling our partners to focus on growth while we manage the rest."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive solutions tailored for the freight forwarding and logistics industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FileCheck,
                title: "Documentation",
                description: "Expert documentation services including invoices, credit notes, and job profit statements."
              },
              {
                icon: Users,
                title: "Sales Support",
                description: "Centralized sales support desk for lead management and customer relationships."
              },
              {
                icon: Globe,
                title: "Digital Marketing",
                description: "Comprehensive digital marketing solutions to boost your online presence."
              },
              {
                icon: Building2,
                title: "Accounts Management",
                description: "Professional accounting services for trade and non-trade transactions."
              },
              {
                icon: Headset,
                title: "Customer Service",
                description: "Dedicated customer service team for bookings and nominations."
              },
              {
                icon: Shield,
                title: "Software Solutions",
                description: "Custom software development following industry best practices."
              }
            ].map((service, index) => (
              <Card key={index} className="group p-6 border-none shadow-md hover:shadow-lg transition-all duration-300">
                <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-heading font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-primary font-medium hover:underline">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">About Orange Office Technologies</h2>
              <p className="text-gray-600 mb-4">
                Orange Office Technologies Pvt Ltd. is a Neutral KPO Service Provider who offers the shipping & logistics players worldwide, the competitive edge in the market.
              </p>
              <p className="text-gray-600 mb-6">
                We provide expert service in all the core segments of day-to-day operations starting from Documentation & Operation, sales support, Customer service & Accounting activity.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 bg-white p-6 rounded-lg shadow-md">
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {/* Placeholder for about image - would be replaced with an actual image */}
                <Building2 className="h-32 w-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "100+", label: "Happy Employees" },
              { number: "50+", label: "Satisfied Clients" },
              { number: "200+", label: "Projects Completed" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="font-heading font-bold text-4xl text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-lg mb-8 text-white/90">
              Let us help you streamline your logistics processes and boost your business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button className="bg-white text-primary hover:bg-white/90">
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

export default Index;
