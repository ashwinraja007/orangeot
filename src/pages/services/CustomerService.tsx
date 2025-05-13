
import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Headset, MessageSquare, Clock, Users, CheckSquare, BarChart } from "lucide-react";

const CustomerService = () => {
  const services = [{
    icon: MessageSquare,
    title: "Inquiry Management",
    description: "Efficient handling of customer inquiries through multiple channels."
  }, {
    icon: CheckSquare,
    title: "Booking & Nominations",
    description: "Processing shipment bookings and managing carrier nominations."
  }, {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for time-critical logistics operations."
  }, {
    icon: BarChart,
    title: "Performance Reporting",
    description: "Regular service level reports and continuous quality improvement."
  }];
  
  const testimonials = [{
    quote: "Their customer service team has been instrumental in improving our client satisfaction rates. They understand the urgency in logistics and respond accordingly.",
    author: "Sarah Johnson",
    position: "Operations Manager",
    company: "Global Logistics Inc."
  }, {
    quote: "The team at Orange Office Technologies handles our customer inquiries with professionalism and efficiency. They've become an extension of our company.",
    author: "Michael Chen",
    position: "CEO",
    company: "Pacific Freight Solutions"
  }];
  
  return <div className="min-h-screen flex flex-col">
      <Header />
      
     {/* Hero Section */}
    <GradientBackground className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center" variant="primary" intensity="medium" animated={true}>
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 mb-6">
        <Headset className="h-4 w-4 mt-20" />
        <span className="font-medium mt-20">Customer Service</span>
      </div>
      <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
        Exceptional Customer Experience
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-75">
        Dedicated customer service team handling bookings, nominations, and inquiries for your logistics business
      </p>
      <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8 py-3" asChild>
        <Link to="/contact" className="flex items-center gap-2">
          Explore Our Solutions
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
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                Customer Service & Nomination Handling
              </h2>
              <p className="text-gray-600 mb-6">
                Our trained professionals act as an extension of your customer service team, managing inquiries, follow-ups, and shipment status updates. We also specialize in nomination handling by maintaining strong communication with overseas agents to ensure smooth cargo movement and documentation flow.
              </p>
              <p className="text-gray-600 mb-6">
                We understand the unique challenges and time-sensitive nature of logistics operations, and our specialists are trained to handle everything from routine inquiries to complex booking processes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600" asChild>
                  <Link to="/contact">Discuss Your Needs</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="Customer Service Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Dedicated Support Team</h3>
                <p className="text-white/80">Professional representatives for your business</p>
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
              Our Customer Service Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive support services designed for logistics and freight forwarding companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white hover:-translate-y-1 rounded-2xl">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-6">
                    <service.icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              How We Support Your Customers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our systematic approach ensures consistent and high-quality service
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[{
              number: "01",
              title: "Inquiry Receipt",
              description: "We receive customer inquiries through multiple channels and log them in our tracking system."
            }, {
              number: "02",
              title: "Professional Response",
              description: "Our trained specialists provide prompt, accurate, and helpful responses to all inquiries."
            }, {
              number: "03",
              title: "Follow-up & Resolution",
              description: "We ensure complete resolution and follow up to confirm customer satisfaction."
            }].map((step, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-pink-50 to-white group hover:-translate-y-1 rounded-2xl">
                  <CardContent className="p-8">
                    <div className="text-3xl font-bold text-pink-500 mb-4">{step.number}</div>
                    <h3 className="font-heading font-bold text-xl mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Benefits of Our Customer Service
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How our service enhances your customer's experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              icon: Users,
              title: "Professional Representation",
              description: "Trained specialists who represent your company professionally"
            }, {
              icon: Clock,
              title: "Extended Hours Coverage",
              description: "Support available beyond standard business hours"
            }, {
              icon: MessageSquare,
              title: "Multilingual Support",
              description: "Service in multiple languages for global operations"
            }, {
              icon: CheckSquare,
              title: "Reduced Response Time",
              description: "Quick responses to all customer inquiries and issues"
            }].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-100 mb-4">
                  <benefit.icon className="h-7 w-7 text-pink-600" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-6">
              Ready to Elevate Your Customer Experience?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Our customer service team is ready to represent your business with professionalism and expertise.
            </p>
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default CustomerService;
