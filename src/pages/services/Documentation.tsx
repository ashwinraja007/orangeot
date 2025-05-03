import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { GradientBackground } from "@/components/GradientBackground";

const Documentation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with centered content */}
      <GradientBackground 
        className="pt-28 pb-16 min-h-[60vh] flex items-center" 
        variant="primary" 
        intensity="medium" 
        animated={true}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-primary mb-6">
              <FileCheck className="w-5 h-5" />
              <span className="font-medium">Documentation Services</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              Expert Documentation Services
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-75">
              Accurate and timely preparation of all essential shipping and logistics documents
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </GradientBackground>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-6">Streamline Your Documentation Process</h2>
              <p className="text-gray-600 mb-4">
                Our documentation services ensure accurate and timely preparation of all essential shipping documents, 
                helping freight forwarders and logistics companies maintain smooth operations and regulatory compliance.
              </p>
              <p className="text-gray-600 mb-6">
                With our expert team handling your documentation needs, you can focus on core business activities 
                while ensuring all paperwork is processed efficiently and accurately.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Reduce documentation errors and delays",
                  "Ensure compliance with international regulations",
                  "Improve operational efficiency",
                  "Decrease administrative burden on your team"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-primary hover:bg-primary/90">
                <Link to="/contact" className="flex items-center gap-2">
                  Request a Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80" 
                  alt="Documentation Services" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-center mb-12">Our Documentation Services Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bill of Lading Preparation",
                description: "Accurate preparation and processing of Bills of Lading for all shipments."
              },
              {
                title: "Commercial Invoices",
                description: "Creation of detailed commercial invoices meeting international standards."
              },
              {
                title: "Packing Lists",
                description: "Comprehensive packing lists documenting all shipped items."
              },
              {
                title: "Customs Documentation",
                description: "Preparation of all required customs documentation for smooth clearance."
              },
              {
                title: "Certificate of Origin",
                description: "Processing certificates of origin and other trade documents."
              },
              {
                title: "Dangerous Goods Documentation",
                description: "Specialized documentation for hazardous materials and dangerous goods."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Documentation Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a streamlined process to ensure accuracy and efficiency in all documentation services
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Information Collection",
                description: "We gather all necessary shipment details from your team or systems."
              },
              {
                step: "2",
                title: "Document Preparation",
                description: "Our experts prepare all required documentation according to regulations."
              },
              {
                step: "3",
                title: "Quality Check",
                description: "Multiple verification steps ensure accuracy and compliance."
              },
              {
                step: "4",
                title: "Delivery & Filing",
                description: "Documents are delivered to relevant parties and properly filed."
              }
            ].map((step, index) => (
              <div key={index} className="flex mb-8 last:mb-0">
                <div className="mr-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                  {index < 3 && <div className="h-full w-0.5 bg-gray-200 mx-auto mt-2"></div>}
                </div>
                <div className="bg-gray-50 rounded-xl p-6 flex-1 shadow-sm">
                  <h3 className="font-heading font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Flexible Pricing Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the documentation service package that best fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "$X per document",
                features: [
                  "Standard documentation",
                  "24-hour turnaround",
                  "Email support",
                  "Basic quality checks"
                ]
              },
              {
                name: "Professional",
                price: "$Y per document",
                features: [
                  "All Basic features",
                  "12-hour turnaround",
                  "Priority support",
                  "Advanced quality checks",
                  "Document storage"
                ],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom pricing",
                features: [
                  "All Professional features",
                  "Custom turnaround times",
                  "Dedicated account manager",
                  "System integration",
                  "Custom reporting"
                ]
              }
            ].map((plan, index) => (
              <Card 
                key={index} 
                className={`border-none ${plan.highlighted ? 'shadow-2xl ring-2 ring-primary' : 'shadow-lg'} hover:shadow-xl transition-all duration-300`}
              >
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-2">{plan.name}</h3>
                  <div className="text-2xl font-bold mb-4">{plan.price}</div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={plan.highlighted ? "bg-primary hover:bg-primary/90 w-full" : "bg-gray-800 hover:bg-gray-700 w-full"}
                  >
                    <Link to="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-6">Ready to Streamline Your Documentation Process?</h2>
            <p className="text-white/90 mb-8">
              Contact us today to learn how our documentation services can help your business operate more efficiently.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link to="/services">Explore Other Services</Link>
              </Button>
              <Button className="bg-white text-primary hover:bg-gray-100" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
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
