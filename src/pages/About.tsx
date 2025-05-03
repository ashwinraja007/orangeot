
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, BarChart, Building2, Shield, Target, Users, FileCheck, Globe, Headset, ArrowRight, Award, Briefcase, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [{
    icon: Shield,
    title: "Quality",
    description: "Delivering excellence in every solution and service"
  }, {
    icon: Target,
    title: "Innovation",
    description: "Embracing cutting-edge technology for optimal solutions"
  }, {
    icon: Users,
    title: "Agility",
    description: "Adapting quickly to meet evolving industry demands"
  }];
  
  const expertise = [{
    icon: Building2,
    title: "Warehouse Management Systems (WMS)"
  }, {
    icon: Activity,
    title: "Transportation & Fleet Management"
  }, {
    icon: TrendingUp,
    title: "Supply Chain Automation & Optimization"
  }, {
    icon: Briefcase,
    title: "ERP Integration & Enterprise Software"
  }, {
    icon: BarChart,
    title: "Business Intelligence & Analytics"
  }, {
    icon: Shield,
    title: "Infrastructure Support & Security Management"
  }];
  
  const metrics = [{
    number: "35+",
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
  }];
  
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Improved Visual */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] transform translate-x-1/4 -translate-y-1/4">
          <div className="w-full h-full bg-gradient-to-br from-orange-400/20 to-amber-300/20 transform rotate-45 rounded-[40%] animate-float"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] transform -translate-x-1/4 translate-y-1/4">
          <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-cyan-300/10 transform -rotate-45 rounded-[40%] animate-float" style={{
            animationDelay: "2s"
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">About Us</h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in">Driving Innovation in IT, Logistics Support, and Digital Services</p>
          </div>
        </div>
      </section>

      {/* Main Content with Enhanced Design */}
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
              <div className="aspect-square overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&h=800&q=80" 
                  alt="Modern Office Space" 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 max-w-xs glass-card">
                <div className="flex items-center gap-2">
                  <Award className="h-8 w-8 text-amber-500" />
                  <p className="font-semibold text-gray-800">Industry Leader Since 2012</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400/30 to-orange-300/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-cyan-300/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="mb-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#ff6a00]">Our Mission</h3>
                </div>
                <p className="text-gray-600">
                  "Delivering comprehensive back-office, IT, digital marketing, and telesales solutions tailored for 
                  freight forwarders, helping them streamline operations, boost visibility, and scale efficiently."
                </p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#ff6a00]">Our Vision</h3>
                </div>
                <p className="text-gray-600">
                  "To set the industry benchmark in KPO services for freight forwarding and logistics, enabling our 
                  partners to focus on growth while we manage the rest."
                </p>
              </div>
            </div>
          </div>

          {/* Core Expertise - Enhanced with visual elements */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold mb-4">Core Areas of Expertise</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Specialized knowledge and capabilities that set us apart in the logistics technology sector
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="mb-4 w-14 h-14 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-orange-600" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                    <div className="w-10 h-1 bg-orange-500 mb-4"></div>
                    <p className="text-gray-600">Specialized solutions and expertise to optimize your operations.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Values Section - Enhanced */}
          <div className="mb-16">
            <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl transform transition-transform group-hover:scale-[1.02] duration-300"></div>
                  <Card className="border-none shadow-lg relative z-10 bg-white h-full m-1 rounded-xl overflow-hidden">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-6 flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
                          <value.icon className="w-8 h-8 text-orange-600" />
                        </div>
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-3">{value.title}</h3>
                      <p className="text-gray-600 flex-grow">{value.description}</p>
                      <div className="w-10 h-1 bg-orange-500 mt-4"></div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Value Proposition - Enhanced */}
          <div className="mb-16 relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 backdrop-blur-sm"></div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-10 relative z-10 border border-white/40 shadow-xl">
              <h2 className="font-heading text-3xl font-bold mb-6">Our Value Proposition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 text-lg mb-4">
                    At OOT, we believe in delivering technology with purpose. Through our GCC model, we provide our 
                    group companies with the tools and expertise needed to stay competitive in a digitally evolving 
                    logistics landscape.
                  </p>
                  <p className="text-gray-700">
                    As we continue to scale across industries, our commitment remains rooted in quality, agility, 
                    and continuous innovation — delivering measurable value to our partners worldwide.
                  </p>
                </div>
                <div className="hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                    alt="Business Team" 
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Section - Enhanced */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-12 shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center relative group">
                  <div className="absolute inset-0 bg-white/10 rounded-xl transform scale-0 transition-transform group-hover:scale-100 duration-300"></div>
                  <div className="relative z-10 py-4">
                    <div className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-2">{metric.number}</div>
                    <div className="text-white/90">{metric.label}</div>
                  </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {[{
              icon: FileCheck,
              title: "Documentation Services",
              description: "Accurate and timely preparation of essential shipping documents"
            }, {
              icon: Users,
              title: "Sales Support Desk",
              description: "Centralized support to manage leads and client inquiries"
            }, {
              icon: Headset,
              title: "Customer Service",
              description: "Professional management of inquiries and shipment updates"
            }].map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
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
      <section className="py-16 bg-gradient-to-r from-orange-100 to-amber-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-gray-700 mb-8">
              Let us show you how we can help streamline your logistics processes and boost your business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" asChild>
                <Link to="/services" className="flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;
