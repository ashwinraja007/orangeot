import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, ArrowRight, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-primary/10 to-accent/10 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600">
            Driving Innovation in IT, Logistics Support, and Digital Services
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              Orange Office Technologies (OOT Pvt. Ltd.) is a Global Capability Centre (GCC) supporting a group of companies
              engaged in shipping, logistics, and third-party warehousing (3PL) services. We deliver advanced digital solutions
              and operational support that drive innovation and efficiency.
            </p>
            <p className="text-gray-600">
              With deep industry expertise and a commitment to agility and quality, we empower logistics operations globally
              through scalable and forward-thinking solutions.
            </p>
          </div>
          <div className="relative">
            <div className="max-w-sm mx-auto lg:ml-auto lg:mr-0 overflow-hidden rounded-2xl shadow-xl border-4 border-white">
              <AspectRatio ratio={1} className="bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&h=800&q=80"
                  alt="Modern Office"
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply" />
              </AspectRatio>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 max-w-xs">
              <div className="flex items-center gap-2">
                <Award className="h-8 w-8 text-amber-500" />
                <p className="font-semibold text-gray-800">Industry Leader Since 2012</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500">
                <Target className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#ff6a00]">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              Delivering comprehensive back-office, IT, digital marketing, and telesales solutions tailored for
              freight forwarders — streamlining operations and driving business scalability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#ff6a00]">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              To set the industry benchmark in KPO services for freight forwarding and logistics — enabling our partners
              to focus on growth while we manage the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16">
        <div className="container mx-auto px-4 relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm border border-white/40 shadow-xl p-10">
          <h2 className="text-3xl font-bold mb-6">Our Value Proposition</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 text-lg mb-4">
                At OOT, we believe in delivering technology with purpose. Through our GCC model, we provide our group companies
                with tools and expertise to stay competitive in a digitally evolving logistics landscape.
              </p>
              <p className="text-gray-700">
                We are committed to quality, agility, and continuous innovation — delivering measurable value to our partners.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
              alt="Team"
              className="rounded-xl shadow-lg w-full h-auto hidden md:block"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h2>
          <p className="text-gray-700 mb-8">
            Let us show you how we can help streamline your logistics processes and boost your business growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/services" className="flex items-center gap-2">
                Explore Services <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
