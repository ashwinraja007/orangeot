import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, FileCheck, Globe, Headset, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { GradientBackground } from "@/components/GradientBackground";
import { useEffect, useRef } from "react";
const Index = () => {
  // Intersection Observer for scroll animations
  const observerRef = useRef<IntersectionObserver | null>(null);
  useEffect(() => {
    // Set up intersection observer for animation on scroll
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    // Get all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });
    return () => {
      if (observerRef.current) {
        animatedElements.forEach(el => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in text-white">
                Your Preferred IT Partner
              </h1>
              <p className="text-xl text-white/90 mb-8 animate-fade-in delay-75">
                We deliver comprehensive back-office, IT, digital marketing, and telesales solutions tailored for freight forwarders.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-md hover:shadow-lg transition-all duration-300 btn-hover-effect animate-fade-in delay-100">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 animate-fade-in delay-150">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="aspect-video glassmorphism rounded-2xl overflow-hidden shadow-xl animate-float">
                {/* Placeholder for a hero image - would be replaced with an actual image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Shield className="h-24 w-24 text-white" />
                </div>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float"></div>
            </div>
          </div>
        </div>
        
        {/* Shape divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white clip-path-slant"></div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 animate-on-scroll glass-card">
              <CardContent className="p-8">
                <h2 className="font-heading font-bold text-2xl mb-4 text-gradient">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">We deliver comprehensive back-office, IT, digital marketing, and telesales solutions tailored for freight forwarders, helping them streamline operations, boost visibility, and scale efficiently.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 animate-on-scroll glass-card">
              <CardContent className="p-8">
                <h2 className="font-heading font-bold text-2xl mb-4 text-gradient">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">To set the industry benchmark in KPO services for freight forwarding and logistics, enabling our partners to focus on growth while we manage the rest.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gradient">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive solutions tailored for the freight forwarding and logistics industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: FileCheck,
            title: "Documentation",
            description: "Expert documentation services including invoices, credit notes, and job profit statements."
          }, {
            icon: Users,
            title: "Sales Support",
            description: "Centralized sales support desk for lead management and customer relationships."
          }, {
            icon: Globe,
            title: "Digital Marketing",
            description: "Comprehensive digital marketing solutions to boost your online presence."
          }, {
            icon: Building2,
            title: "Accounts Management",
            description: "Professional accounting services for trade and non-trade transactions."
          }, {
            icon: Headset,
            title: "Customer Service",
            description: "Dedicated customer service team for bookings and nominations."
          }, {
            icon: Shield,
            title: "Software Solutions",
            description: "Custom software development following industry best practices."
          }].map((service, index) => <Card key={index} className="group p-6 border-none shadow-card hover:shadow-xl transition-all duration-300 animate-on-scroll glass-card animate-tilt" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <service.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-heading font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-primary font-medium hover:underline group">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Card>)}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-gradient">About Orange Office Technologies</h2>
              <p className="text-gray-600 mb-4">
                Orange Office Technologies Pvt Ltd. is a Neutral KPO Service Provider who offers the shipping & logistics players worldwide, the competitive edge in the market.
              </p>
              <p className="text-gray-600 mb-6">
                We provide expert service in all the core segments of day-to-day operations starting from Documentation & Operation, sales support, Customer service & Accounting activity.
              </p>
              <Button className="bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 btn-hover-effect">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 animate-on-scroll">
              <div className="relative">
                <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center glassmorphism animate-float shadow-xl">
                  {/* Placeholder for about image - would be replaced with an actual image */}
                  <Building2 className="h-32 w-32 text-primary" />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary rounded-full opacity-20 animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[{
            number: "10+",
            label: "Years Experience"
          }, {
            number: "100+",
            label: "Happy Employees"
          }, {
            number: "50+",
            label: "Satisfied Clients"
          }, {
            number: "200+",
            label: "Projects Completed"
          }].map((stat, index) => <div key={index} className="text-center p-8 glass-card rounded-lg shadow-card hover:shadow-xl transition-all duration-300 animate-on-scroll" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="font-heading font-bold text-4xl text-primary mb-2 animate-fade-in">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GradientBackground animated intensity="medium">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-white animate-on-scroll">Ready to Transform Your Operations?</h2>
              <p className="text-lg mb-8 text-white/90 animate-on-scroll">
                Let us help you streamline your logistics processes and boost your business growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 btn-hover-effect">
                  <Link to="/services">Explore Services</Link>
                </Button>
                <Button className="bg-white text-primary hover:bg-white/90 shadow-md hover:shadow-lg btn-hover-effect">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </GradientBackground>

      <Footer />
    </div>;
};
export default Index;