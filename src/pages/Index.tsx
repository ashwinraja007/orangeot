import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, Users, Globe, Building2, Headset, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GradientBackground } from "@/components/GradientBackground";
import { useEffect, useState } from "react";

const Index = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <GradientBackground className="pt-32 pb-20 min-h-[90vh] flex items-center" variant="primary" intensity="medium" animated={true}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              Streamlining Logistics with Innovative Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-75">
              We provide cutting-edge services for freight forwarding and logistics companies, enhancing efficiency and driving growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="shadow-lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </GradientBackground>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="animate-on-scroll">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                To empower freight forwarding and logistics businesses with innovative solutions that drive efficiency, reduce costs, and enhance customer satisfaction.
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading technology and service provider in the logistics industry, recognized for our commitment to excellence and our ability to deliver exceptional results.
              </p>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1615799871404-49f36bb54a1f?auto=format&fit=crop&w=1200&q=80"
                alt="Team Collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Collaborative Solutions</h3>
                <p className="text-white/80">Working together to achieve your business goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with links to dedicated pages */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        
        <svg className="absolute top-0 left-0 w-full text-white" style={{
          transform: "translateY(-1px)"
        }} fill="currentColor" viewBox="0 0 1440 40">
          <path d="M0,0L60,4C120,8,240,16,360,18.7C480,21,600,19,720,13.3C840,8,960,0,1080,0C1200,0,1320,8,1380,12L1440,16L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive solutions tailored for the freight forwarding and logistics industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[{
              icon: FileCheck,
              title: "Documentation",
              description: "Expert documentation services including invoices, credit notes, and job profit statements.",
              image: "/1.png",
              link: "/services/documentation",
              color: "from-blue-500 to-cyan-400"
            }, {
              icon: Users,
              title: "Sales Support",
              description: "Centralized sales support desk for lead management and customer relationships.",
              image: "/2.png",
              link: "/services/salessupport",
              color: "from-amber-500 to-orange-400"
            }, {
              icon: Globe,
              title: "Digital Marketing",
              description: "Comprehensive digital marketing solutions to boost your online presence.",
              image: "/3.png",
              link: "/services/digitalmarketing",
              color: "from-green-500 to-emerald-400"
            }, {
              icon: Building2,
              title: "Accounts Management",
              description: "Professional accounting services for trade and non-trade transactions.",
              image: "/4.png",
              link: "/services/AccountsManagement",
              color: "from-purple-500 to-violet-400"
            }, {
              icon: Headset,
              title: "Customer Service",
              description: "Dedicated customer service team for bookings and nominations.",
              image: "/5.png",
              link: "/services/customerservice",
              color: "from-pink-500 to-rose-400"
            }, {
              icon: Shield,
              title: "Software Solutions",
              description: "Custom software development following industry best practices.",
              image: "/6.png",
              link: "/services/SoftwareSolutions",
              color: "from-cyan-500 to-blue-400"
            }].map((service, index) => <Card key={index} className="group border-none rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll overflow-hidden bg-white" style={{
              animationDelay: `${index * 100}ms`
            }}>
                <div className="h-44 relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-0 right-0 m-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-gray-700 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center text-orange-500 font-medium group">
                    <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-orange-500 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                      Learn more
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>)}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-lg" asChild>
              <Link to="/services" className="flex items-center gap-2">
                View All Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing exceptional service and innovative solutions that drive success for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Expertise",
                description: "Our team comprises industry veterans with deep knowledge of freight forwarding and logistics.",
                icon: FileCheck
              },
              {
                title: "Innovation",
                description: "We leverage the latest technologies to develop cutting-edge solutions that enhance efficiency.",
                icon: Globe
              },
              {
                title: "Customer Focus",
                description: "We prioritize our clients' needs and work closely with them to achieve their business goals.",
                icon: Headset
              }
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 mb-4 mx-auto">
                    <feature.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
