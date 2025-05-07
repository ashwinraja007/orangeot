
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
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-bold mb-2">Who We Are</h2>
            <p className="text-gray-600 mb-2">
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
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-3 max-w-xs">
              <div className="flex items-center gap-2">
                <Award className="h-7 w-7 text-amber-500" />
                <p className="font-medium text-gray-800 text-sm">Industry Leader Since 2012</p>
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
              <Target className="h-10 w-10 text-orange-500 p-2 bg-orange-100 rounded-full" />
              <h3 className="text-xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              To provide industry-leading digital solutions and operational support that empower logistics companies to 
              achieve operational excellence, while delivering exceptional value and service to their customers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-10 w-10 text-amber-500 p-2 bg-amber-100 rounded-full" />
              <h3 className="text-xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              To be the global leader in logistics technology and services, recognized for innovation, reliability, 
              and strategic partnerships that transform the industry's digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Excellence",
                description: "Delivering high-quality solutions that exceed expectations."
              },
              {
                title: "Innovation",
                description: "Pioneering new approaches to logistics challenges."
              },
              {
                title: "Integrity",
                description: "Operating with transparency, honesty, and accountability."
              },
              {
                title: "Collaboration",
                description: "Working together to achieve shared success."
              },
              {
                title: "Agility",
                description: "Adapting quickly to changing market conditions."
              },
              {
                title: "Client Focus",
                description: "Placing client needs at the center of our operations."
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Logistics Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Orange Office Technologies for innovative solutions that drive efficiency and growth.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
            <Link to="/contact" className="flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
