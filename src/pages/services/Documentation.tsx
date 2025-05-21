import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GradientBackground } from "@/components/GradientBackground";
import { FileCheck, ArrowRight, CheckCircle, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";
const Documentation = () => {
  const documentTypes = ["Bill of Lading", "Commercial Invoices", "Packing Lists", "Certificates of Origin", "Shipping Instructions", "Customs Documentation", "Export/Import Licenses", "Insurance Certificates"];
  const benefits = [{
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: "Accuracy & Compliance",
    description: "Our expert team ensures all documentation meets international regulations and standards."
  }, {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Time Efficiency",
    description: "Reduce processing time by up to 40% with our streamlined document handling processes."
  }, {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Risk Mitigation",
    description: "Minimize compliance risks and potential penalties with professionally prepared documentation."
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
    <GradientBackground className="pt-52 pb-16 min-h-[50vh] flex items-center justify-center" variant="primary" intensity="medium" animated={true}>
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-primary mb-6">
        <FileCheck className="h-8 w-8 mt-20" />
        <span className="text-4xl font-bold mt-20">Documentation</span>
      </div>
      <h1 className="font-heading font-bold text-3xl md:text-5xl mb-6 animate-fade-in">
        Expert Documentation Services
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Our skilled team ensures accurate and timely preparation of all essential shipping and logistics documents, helping you reduce compliance risks.
      </p>
      <Button className="mt-2" asChild>
        <Link to="/contact">Get Started</Link>
      </Button>
    </div>
  </div>
    </GradientBackground>


      {/* Document Types Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Documentation We Handle</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive document processing for all your freight forwarding and logistics needs
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {documentTypes.map((doc, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 bg-white overflow-hidden">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FileCheck className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-medium text-lg">{doc}</h3>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Documentation Process</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A systematic approach to ensure accuracy and efficiency
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
              
              {[{
              stage: "01",
              title: "Information Collection",
              description: "We gather all necessary shipment details and requirements from clients and partners.",
              align: "right"
            }, {
              stage: "02",
              title: "Document Preparation",
              description: "Our experts prepare all required documentation according to international standards and regulations.",
              align: "left"
            }, {
              stage: "03",
              title: "Quality Check",
              description: "Rigorous verification process to ensure accuracy and compliance with all requirements.",
              align: "right"
            }, {
              stage: "04",
              title: "Secure Delivery",
              description: "Timely and secure transmission of documents to all relevant parties.",
              align: "left"
            }].map((step, index) => <div key={index} className={`flex mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
                  <div className="md:w-1/2 p-4 relative">
                    <div className={`bg-white shadow-xl p-8 rounded-xl ${step.align === 'left' ? 'md:mr-8' : 'md:ml-8'}`}>
                      <div className="inline-block bg-primary text-white text-2xl font-bold px-4 py-2 rounded-lg mb-4">
                        {step.stage}
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    {/* Timeline dot */}
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white hidden md:block"></div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Key Benefits</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                How our documentation services create value for your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="inline-block p-4 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                      {benefit.icon}
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-10 md:p-12">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-medium text-sm rounded mb-6">
                      CASE STUDY
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-4">40% Faster Documentation Processing</h3>
                    <p className="text-gray-600 mb-6">
                      A global freight forwarding company struggling with documentation errors and delays partnered with us to overhaul their process.
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <p>Reduced documentation errors by 95%</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <p>Improved customer satisfaction scores by 42%</p>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                        <p>Eliminated costly customs delays and penalties</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link to="/contact" className="flex items-center gap-2">
                        Learn How We Can Help
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="hidden md:block">
                    <img src="/documentation.avif" alt="Documentation case study" className="w-full h-full object-cover" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GradientBackground className="py-20" variant="primary" intensity="strong" animated={true}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">
              Ready to Streamline Your Documentation Process?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Our expert team is ready to help you reduce errors, ensure compliance, and save valuable time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="shadow-lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Other Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </GradientBackground>

      <Footer />
    </div>;
};
export default Documentation;
