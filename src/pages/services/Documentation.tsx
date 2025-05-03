
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, CheckCircle2, ListChecks, FileText, FileBarChart, FileClock } from "lucide-react";

const Documentation = () => {
  const features = [
    {
      icon: FileText,
      title: "Invoice Processing",
      description: "Accurate and timely processing of invoices, ensuring all details are correctly captured according to industry standards."
    },
    {
      icon: FileBarChart,
      title: "Credit Notes Management",
      description: "Comprehensive handling of credit notes with attention to detail and compliance with financial regulations."
    },
    {
      icon: ListChecks,
      title: "Job Profit Statements",
      description: "Detailed job profit statements that provide clear visibility into the profitability of each shipment."
    },
    {
      icon: FileClock,
      title: "Timely Documentation",
      description: "Ensure all documentation is processed within agreed SLAs, reducing delays in your supply chain."
    }
  ];

  const benefits = [
    "Reduced operational costs through outsourced documentation handling",
    "Increased accuracy in shipping documentation",
    "Faster processing times leading to improved cash flow",
    "Compliance with international shipping regulations",
    "Scalable solutions that grow with your business needs",
    "24/7 support for urgent documentation requirements"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with centered content */}
      <GradientBackground className="pt-32 pb-20" variant="primary" intensity="medium" animated={true}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 mb-6">
              <FileCheck className="h-5 w-5" />
              <span className="font-medium">Documentation Services</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              Expert Documentation Services for Freight Forwarders
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-75">
              Streamline your operations with our comprehensive documentation handling services
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Request a Solution
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </GradientBackground>

      {/* Main content with centered layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Comprehensive Documentation Management</h2>
                <p className="text-gray-600 mb-6">
                  Orange Office Technologies provides expert documentation services tailored specifically for freight forwarders and logistics companies. Our dedicated team handles all aspects of your documentation needs with precision and efficiency.
                </p>
                <p className="text-gray-600 mb-6">
                  From invoice processing to credit notes and job profit statements, we ensure accurate and timely handling of all your documentation requirements, allowing you to focus on your core business activities.
                </p>
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">ISO 9001:2015 certified processes</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">99.8% accuracy rate</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <span className="font-medium">24/7 support availability</span>
                  </div>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/documentation.png" 
                  alt="Documentation Services" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-transparent mix-blend-multiply"></div>
              </div>
            </div>
            
            {/* Features Grid */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-10 text-center">Our Documentation Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-duration-300">
                    <CardContent className="p-6 flex flex-col md:flex-row md:items-start gap-4">
                      <div className="mb-4 md:mb-0 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                          <feature.icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Benefits Section */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Benefits of Our Documentation Services</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Partner with Orange Office Technologies and experience these advantages for your freight forwarding operations
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow">
                    <div className="mr-4 text-blue-500">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <GradientBackground className="py-16" variant="accent" intensity="medium" animated={true}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
              Ready to Optimize Your Documentation Process?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let our expert team handle your documentation needs while you focus on growing your business
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="shadow-lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </GradientBackground>
      
      <Footer />
    </div>
  );
};

export default Documentation;
