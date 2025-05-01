
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, BarChart, Building2, Shield, Target, Users, FileCheck, Globe, Headset } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality",
      description: "Delivering excellence in every solution and service"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Embracing cutting-edge technology for optimal solutions"
    },
    {
      icon: Users,
      title: "Agility",
      description: "Adapting quickly to meet evolving industry demands"
    }
  ];

  const expertise = [
    { title: "Warehouse Management Systems (WMS)" },
    { title: "Transportation & Fleet Management" },
    { title: "Supply Chain Automation & Optimization" },
    { title: "ERP Integration & Enterprise Software" },
    { title: "Business Intelligence & Analytics" },
    { title: "Infrastructure Support & Security Management" }
  ];

  const metrics = [
    { number: "35+", label: "Years Experience" },
    { number: "100+", label: "Happy Employees" },
    { number: "50+", label: "Satisfied Clients" },
    { number: "200+", label: "Projects Completed" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              Driving Innovation in IT, Logistics Support, and Digital Services
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in">
              Setting the industry benchmark in services for freight forwarding and logistics
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="prose max-w-none">
              <h2 className="font-heading text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4">
                Orange Office Technologies (OOT Pvt. Ltd.) is a Global Capability Centre (GCC) supporting a group of companies 
                engaged in shipping, logistics, and third-party warehousing (3PL) services. As a centralized technology hub, 
                OOT delivers advanced digital solutions and operational support that drive innovation and efficiency across 
                the logistics value chain.
              </p>
              <p className="text-gray-600 mb-4">
                With a strong foundation built on logistics domain expertise and technology-driven innovation, we specialize 
                in delivering real-time, integrated IT solutions that drive productivity and digital transformation. Our IT 
                division develops and implements customized software solutions that enable clients to stay ahead in today's 
                fast-paced logistics environment.
              </p>
              <p className="text-gray-600">
                With a skilled team of professionals and deep industry experience, OOT ensures high-performance standards 
                and continuous process improvements. We align closely with our group companies to deliver agile, scalable, 
                and forward-thinking solutions that power global logistics operations.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 flex items-center justify-center">
                <Building2 className="w-32 h-32 text-primary" />
              </div>
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="mb-16 bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-[#ff6a00]">Our Mission</h3>
                <p className="text-gray-600">
                  "Delivering comprehensive back-office, IT, digital marketing, and telesales solutions tailored for 
                  freight forwarders, helping them streamline operations, boost visibility, and scale efficiently."
                </p>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold mb-4 text-[#ff6a00]">Our Vision</h3>
                <p className="text-gray-600">
                  "To set the industry benchmark in KPO services for freight forwarding and logistics, enabling our 
                  partners to focus on growth while we manage the rest."
                </p>
              </div>
            </div>
          </div>

          {/* Core Expertise */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Core Areas of Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 flex items-center">
                    <Target className="w-6 h-6 text-[#ff6a00] mr-3 flex-shrink-0" />
                    <p className="font-medium text-gray-700">{item.title}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <value.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="font-heading font-bold text-xl mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Value Proposition */}
          <div className="mb-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
            <h2 className="font-heading text-3xl font-bold mb-6">Our Value Proposition</h2>
            <p className="text-gray-600 text-lg">
              At OOT, we believe in delivering technology with purpose. Through our GCC model, we provide our 
              group companies with the tools and expertise needed to stay competitive in a digitally evolving 
              logistics landscape.
            </p>
            <p className="text-gray-600 mt-4">
              As we continue to scale across industries, our commitment remains rooted in quality, agility, 
              and continuous innovation — delivering measurable value to our partners worldwide.
            </p>
          </div>

          {/* Metrics Section */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading font-bold text-4xl mb-2">{metric.number}</div>
                  <div className="text-white/90">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {[
              {
                icon: FileCheck,
                title: "Documentation Services",
                description: "Accurate and timely preparation of essential shipping documents"
              },
              {
                icon: Users,
                title: "Sales Support Desk",
                description: "Centralized support to manage leads and client inquiries"
              },
              {
                icon: Headset,
                title: "Customer Service",
                description: "Professional management of inquiries and shipment updates"
              }
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-[#ff6a00] mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="default" className="bg-[#ff6a00] hover:bg-[#ff6a00]/90" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-gray-600 mb-8">
              Let us show you how we can help streamline your logistics processes and boost your business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button className="bg-primary hover:bg-primary/90" asChild>
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

export default About;
