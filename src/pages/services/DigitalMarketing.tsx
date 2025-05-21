import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Megaphone, Search, BarChart, Mail, Instagram, Facebook, Linkedin } from "lucide-react";
const DigitalMarketing = () => {
  const strategies = [{
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your online visibility with targeted search engine optimization strategies tailored for logistics businesses."
  }, {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Build brand awareness and engage potential clients through strategic social media campaigns."
  }, {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and maintain client relationships through targeted email campaigns."
  }, {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Gain insights into your digital performance with comprehensive analytics and regular reporting."
  }, {
    icon: Globe,
    title: "Google Ads",
    description: "Targeted advertising campaigns on Google's search network to reach potential clients actively searching for logistics services."
  }, {
    icon: Megaphone,
    title: "PPC Campaigns",
    description: "Pay-per-click campaigns designed to drive qualified traffic and generate leads for your logistics business."
  }];
  const platforms = [{
    icon: Facebook,
    name: "Facebook"
  }, {
    icon: Instagram,
    name: "Instagram"
  }, {
    icon: Linkedin,
    name: "LinkedIn"
  }, {
    icon: Globe,
    name: "Google"
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />
      
     {/* Hero Section with fixed header spacing */}
    <GradientBackground className="pt-48 pb-20 min-h-[70vh] flex items-center justify-center" variant="secondary" intensity="medium" animated={true}>
  <div className="container mx-auto px-6">
    <div className="max-w-3xl mx-auto text-center">
      {/* Category Tag */}
      <div className="inline-flex items-center gap-2 text-purple-600 mb-6\\n\\n">
        <Globe className="h-8 w-8 mt-20" />
        <span className="text-4xl font-bold mt-20">Digital Marketing</span>
      </div>

      {/* Hero Heading */}
      <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 animate-fade-in mt-10">
        Boost Your Online Presence
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-75">
        Comprehensive digital marketing solutions designed specifically for freight forwarding and logistics businesses
      </p>

      {/* CTA Button */}
      <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8 py-3" asChild>
        <Link to="/contact" className="flex items-center gap-2">
          Get Started
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
                Specialized Digital Marketing for Logistics
              </h2>
              <p className="text-gray-600 mb-6">
                In today's digital landscape, a strong online presence is crucial for logistics and freight forwarding businesses. Our specialized digital marketing services help you connect with potential clients, build your brand, and grow your business online.
              </p>
              <p className="text-gray-600 mb-6">
                We combine industry knowledge with digital expertise to create targeted strategies that generate qualified leads and showcase your service offerings to the right audience.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600" asChild>
                  <Link to="/contact">Request a Strategy</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src="/dm.jpg" alt="Digital Marketing" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Tailored Strategies</h3>
                <p className="text-white/80">Custom digital solutions for freight forwarders</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section - Updated with additional strategies */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Our Digital Marketing Strategies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive approaches tailored to the logistics and freight forwarding industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {strategies.map((strategy, index) => <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white hover:-translate-y-1 rounded-2xl">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <strategy.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{strategy.title}</h3>
                  <p className="text-gray-600">{strategy.description}</p>
                </CardContent>
              </Card>)}
          </div>

          
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-6">
              Ready to Enhance Your Digital Presence?
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Let our team of digital marketing experts create a strategy tailored to your logistics business.
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default DigitalMarketing;
