
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-3xl md:text-4xl mb-6 animate-fade-in">
              Documentation Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Expert documentation handling for freight forwarding and logistics
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/1.png" 
                alt="Documentation Services" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Comprehensive Documentation Solutions</h2>
              <div className="space-y-4">
                <p className="text-gray-600">Our expert documentation services include:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FileCheck className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Detailed invoice processing and management</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Credit note generation and handling</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Job profit statement preparation</span>
                  </li>
                  <li className="flex items-start">
                    <FileCheck className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>Custom documentation solutions</span>
                  </li>
                </ul>
              </div>
              <Button className="mt-8" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Documentation;
