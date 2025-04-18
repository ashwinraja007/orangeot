
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, BarChart, Building2, Shield, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "Building lasting relationships through consistent, quality service delivery"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Leveraging cutting-edge technology for optimal solutions"
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Understanding and exceeding client expectations"
    }
  ];

  const metrics = [
    { number: "10+", label: "Years Experience" },
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
              Let Us Be Your Preferred IT Partner
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in">
              Setting the industry benchmark in KPO services for freight forwarding and logistics
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
                Orange Office Technologies Pvt Ltd is a neutral Knowledge Process Outsourcing (KPO) service provider 
                offering comprehensive solutions to shipping and logistics companies worldwide.
              </p>
              <p className="text-gray-600 mb-4">
                We empower our partners with a competitive edge through expert services across all essential 
                operational areas — including Documentation & Operations, Sales Support, Customer Service, and Accounting.
              </p>
              <p className="text-gray-600">
                Our approach combines expert consultation with well-coordinated process mapping, transforming 
                traditional logistics into next-generation, digitally driven solutions.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 flex items-center justify-center">
                <Building2 className="w-32 h-32 text-primary" />
              </div>
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
