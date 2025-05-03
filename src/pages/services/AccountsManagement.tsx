
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, FileText, Receipt, Calculator, FileCheck, Clock, CheckCircle } from "lucide-react";

const AccountsManagement = () => {
  const services = [
    {
      icon: FileText,
      title: "Invoice Processing",
      description: "Timely and accurate processing of vendor invoices and customer bills."
    },
    {
      icon: Receipt,
      title: "Accounts Receivable",
      description: "Management of customer payments, follow-ups, and reconciliation."
    },
    {
      icon: Calculator,
      title: "Accounts Payable",
      description: "Efficient processing of payments to vendors and service providers."
    },
    {
      icon: FileCheck,
      title: "Financial Reporting",
      description: "Comprehensive reports including profit & loss statements and balance sheets."
    }
  ];

  const benefits = [
    "Reduced operational costs",
    "Improved accuracy in financial records",
    "Better cash flow management",
    "Timely reporting and analysis",
    "Scalable services for business growth"
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-600 mb-6">
              <Building2 className="h-4 w-4" />
              <span className="font-medium">Accounts Management</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              Professional Accounting Services
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-75">
              Streamline your financial operations with our comprehensive accounting services
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl" 
              asChild
            >
              <Link to="/contact" className="flex items-center gap-2">
                Consult Our Experts
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </GradientBackground>

      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                Expert Financial Management for Logistics
              </h2>
              <p className="text-gray-600 mb-6">
                Our Accounts Management services provide comprehensive financial solutions specifically tailored for freight forwarding and logistics businesses. We handle everything from day-to-day bookkeeping to complex financial reporting.
              </p>
              <p className="text-gray-600 mb-6">
                With our team of experienced accountants, you can focus on growing your business while we ensure your financial operations run smoothly and accurately.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600" asChild>
                  <Link to="/contact">Get a Free Assessment</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80" 
                alt="Accounts Management" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Financial Expertise</h3>
                <p className="text-white/80">Specialized accounting for logistics businesses</p>
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
              Our Accounting Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial management solutions for logistics and freight forwarding companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white hover:-translate-y-1 rounded-2xl">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
                    <service.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" 
                    alt="Financial Growth" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-transparent mix-blend-multiply"></div>
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="font-heading font-bold text-3xl mb-6">
                  Benefits of Our Accounting Services
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we ensure efficient and accurate financial management for your business
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-purple-200 pl-8 space-y-16 ml-4">
              {[
                {
                  icon: Clock,
                  title: "Initial Assessment",
                  description: "We analyze your current financial processes and identify areas for improvement."
                },
                {
                  icon: FileCheck,
                  title: "Service Implementation",
                  description: "Our team sets up customized accounting workflows tailored to your business needs."
                },
                {
                  icon: Calculator,
                  title: "Regular Processing",
                  description: "We handle day-to-day transactions, ensure timely payments, and maintain accurate records."
                },
                {
                  icon: Building2,
                  title: "Reporting & Analysis",
                  description: "Receive comprehensive financial reports and insights to help make informed business decisions."
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[44px] w-8 h-8 rounded-full bg-white border-2 border-purple-400 flex items-center justify-center shadow-md">
                    <step.icon className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-violet-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-6">
              Ready to Streamline Your Financial Operations?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Our accounting experts are ready to help your logistics business achieve financial clarity and efficiency.
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccountsManagement;
