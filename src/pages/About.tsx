
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, ArrowRight, Target, TrendingUp, Shield, Users, Zap, ThumbsUp, CheckCircle, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Royal Styling */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-[#9b87f5]/20 to-[#D6BCFA]/20 text-center">
        <div className="container mx-auto px-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#9b87f5]/20 text-[#6E59A5] mb-6 text-sm font-medium px-4 py-2">
            <Award className="h-4 w-4" />
            <span>Excellence Since 2012</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient bg-gradient-to-r from-[#7E69AB] via-[#9b87f5] to-[#6E59A5] bg-clip-text text-transparent">About Us</h1>
          <p className="text-xl text-[#403E43] max-w-2xl mx-auto">
            Driving Innovation in IT, Logistics Support, and Digital Services with Royal Excellence
          </p>
        </div>
      </section>

      {/* Who We Are - with Royal Styling */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6 text-gradient bg-gradient-to-r from-[#7E69AB] to-[#9b87f5] bg-clip-text text-transparent">Who We Are</h2>
            <p className="text-[#403E43] mb-6 text-lg">
              Orange Office Technologies (OOT Pvt. Ltd.) is a Global Capability Centre (GCC) supporting a group of companies
              engaged in shipping, logistics, and third-party warehousing (3PL) services. We deliver advanced digital solutions
              and operational support that drive innovation and efficiency.
            </p>
            <p className="text-[#403E43] mb-8">
              With deep industry expertise and a commitment to agility and quality, we empower logistics operations globally
              through scalable and forward-thinking solutions.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="mr-4 bg-[#D6BCFA] rounded-full p-3">
                  <Shield className="h-6 w-6 text-[#6E59A5]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#1A1F2C] mb-1">Global Standards</h4>
                  <p className="text-[#403E43] text-sm">Enterprise-grade operations worldwide</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 bg-[#D6BCFA] rounded-full p-3">
                  <Users className="h-6 w-6 text-[#6E59A5]" />
                </div>
                <div>
                  <h4 className="font-medium text-[#1A1F2C] mb-1">Expert Team</h4>
                  <p className="text-[#403E43] text-sm">Industry leaders in logistics</p>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="w-full max-w-md mx-auto overflow-hidden rounded-2xl shadow-xl border-4 border-white relative before:absolute before:inset-0 before:border-2 before:border-[#9b87f5]/20 before:rounded-2xl before:m-2 before:z-10">
              <AspectRatio ratio={1} className="bg-muted">
                <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&h=800&q=80" alt="Modern Office" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#6E59A5]/20 to-transparent mix-blend-multiply" />
              </AspectRatio>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-3 max-w-xs border border-[#D6BCFA]/50">
              <div className="flex items-center gap-2">
                <Award className="h-7 w-7 text-[#9b87f5]" />
                <p className="font-medium text-[#403E43] text-sm">Industry Leader Since 2012</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Royal Theme */}
      <section className="bg-gradient-to-r from-[#F8F7FF] to-[#EFE9FF] py-16 relative">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border border-[#D6BCFA]/30 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-12 w-12 text-[#9b87f5] p-2 bg-[#D6BCFA]/30 rounded-full" />
              <h3 className="text-2xl font-bold text-[#403E43]">Our Mission</h3>
            </div>
            <p className="text-[#403E43] leading-relaxed">
              To provide industry-leading digital solutions and operational support that empower logistics companies to 
              achieve operational excellence, while delivering exceptional value and service to their customers.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border border-[#D6BCFA]/30 hover:shadow-lg transition-all">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-12 w-12 text-[#7E69AB] p-2 bg-[#D6BCFA]/30 rounded-full" />
              <h3 className="text-2xl font-bold text-[#403E43]">Our Vision</h3>
            </div>
            <p className="text-[#403E43] leading-relaxed">
              To be the global leader in logistics technology and services, recognized for innovation, reliability, 
              and strategic partnerships that transform the industry's digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Core Values with Royal Theme and Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-gradient bg-gradient-to-r from-[#7E69AB] to-[#9b87f5] bg-clip-text text-transparent">Our Royal Values</h2>
          <p className="text-[#403E43] text-center mb-10 max-w-2xl mx-auto">
            Our values define who we are and guide our approach to delivering excellence in every aspect of our work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title: "Excellence",
              description: "Delivering high-quality solutions that exceed expectations.",
              icon: Award,
              image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=500&h=300&q=80",
              color: "bg-[#6E59A5]"
            }, {
              title: "Innovation",
              description: "Pioneering new approaches to logistics challenges.",
              icon: Zap,
              image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=500&h=300&q=80",
              color: "bg-[#9b87f5]"
            }, {
              title: "Integrity",
              description: "Operating with transparency, honesty, and accountability.",
              icon: Shield,
              image: "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?auto=format&fit=crop&w=500&h=300&q=80",
              color: "bg-[#7E69AB]"
            }, {
              title: "Collaboration",
              description: "Working together to achieve shared success.",
              icon: Users,
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&h=300&q=80",
              color: "bg-[#9F9EA1]"
            }, {
              title: "Agility",
              description: "Adapting quickly to changing market conditions.",
              icon: ThumbsUp,
              image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&h=300&q=80",
              color: "bg-[#D6BCFA]"
            }, {
              title: "Client Focus",
              description: "Placing client needs at the center of our operations.",
              icon: Heart,
              image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=500&h=300&q=80",
              color: "bg-[#1A1F2C]"
            }].map((value, index) => (
              <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-[#D6BCFA]/30">
                <div className="h-40 relative overflow-hidden">
                  <img 
                    src={value.image} 
                    alt={value.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C]/70 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`${value.color} p-2 rounded-full`}>
                      <value.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white">{value.title}</h3>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <p className="text-[#403E43]">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Royal Theme */}
      <section className="py-16 bg-gradient-to-r from-[#6E59A5] to-[#9b87f5] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Logistics Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Orange Office Technologies for innovative solutions that drive efficiency and growth.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#6E59A5] shadow-lg">
            <Link to="/contact" className="flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;
