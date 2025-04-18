
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Users, FileCheck, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
                Your Preferred IT Partner
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We deliver comprehensive back-office, IT, digital marketing, and telesales solutions tailored for freight forwarders.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started</Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-r from-primary to-accent rounded-lg shadow-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">Our Services</h2>
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
              }
            ].map((service, index) => (
              <Card key={index} className="p-6">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-heading font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "100+", label: "Happy Employees" },
              { number: "50+", label: "Satisfied Clients" },
              { number: "200+", label: "Projects Completed" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading font-bold text-4xl text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
