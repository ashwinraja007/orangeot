
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Calendar, Briefcase, MapPin, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Founders = () => {
  const achievements = [
    "35+ years of industry experience",
    "Pioneered specialized back-office services for freight forwarding",
    "Expanded operations across multiple global locations",
    "Led digital transformation initiatives in logistics sector"
  ];

  const milestones = [
    {
      year: "1991",
      event: "Started professional journey in the courier industry"
    },
    {
      year: "1990s-2000s",
      event: "Advanced into logistics and freight forwarding sector"
    },
    {
      year: "2012",
      event: "Founded Orange Office Technologies Pvt Ltd"
    },
    {
      year: "Present",
      event: "Leading global expansion and digital transformation initiatives"
    }
  ];

  // Animation on scroll logic
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    });
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-orange-50">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-8 animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 mb-6 animate-fade-in text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Leadership Excellence</span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-orange-500 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500">
                Visionary Leadership
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Meet the visionaries behind Orange Office Technologies
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-amber-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-300/10 rounded-full blur-3xl"></div>
        </section>
        
        {/* Founder Hero Section */}
        <section className="py-10 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10" style={{ animationDelay: "200ms" }}>
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Mr. Sudhir KU
                  <span className="block text-xl font-normal text-orange-500 mt-1">
                    Director, Orange Office Technologies
                  </span>
                </h2>
                
                <div className="prose prose-orange max-w-none">
                  <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                    The visionary Director of Orange Office Technologies Pvt Ltd, brings with him a rich professional 
                    journey that spans over 35 years, reflecting a rare blend of perseverance, adaptability, and forward-thinking leadership.
                  </p>
                  
                  <p className="text-gray-600 mb-4">
                    Starting his professional journey in 1991, Mr. Sudhir began in the courier industry and gradually advanced into the 
                    logistics and freight forwarding sector. His career has taken him across various regions of India and extended globally 
                    to business hubs such as Dubai and Singapore.
                  </p>
                  
                  <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700 my-6">
                    "Our mission is to bridge operational gaps and enable logistics businesses to focus on their core competencies while we handle the rest."
                  </blockquote>
                </div>
                
                <div className="mt-6 flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                    <Link to="/contact" className="flex items-center gap-2">
                      Get in Touch
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 rounded-xl">
                    <Link to="/about">About the Company</Link>
                  </Button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10">
                <div className="relative">
                  {/* Main image with glow effect */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 border-4 border-white">
                    <img
                      src="/lovable-uploads/dcab3f93-8fa0-480c-b028-e34b3d358821.png"
                      alt="Mr. Sudhir KU"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-orange-300/40 to-amber-500/30 rounded-full blur-xl animate-pulse-slow z-[-1]"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-300/30 to-cyan-500/20 rounded-full blur-xl animate-float z-[-1]" style={{ animationDelay: "1s" }}></div>
                  
                  {/* Experience badge */}
                  <div className="absolute -bottom-5 -left-5 bg-white rounded-full shadow-xl p-3 flex items-center justify-center w-28 h-28 border-2 border-orange-100">
                    <div className="text-center">
                      <span className="text-3xl font-bold text-orange-500 block">35+</span>
                      <span className="text-xs font-medium text-gray-600">Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Achievements */}
        <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gray-900">
                Experience & Achievements
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Key Achievements */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">Key Achievements</h3>
                    </div>
                    
                    <ul className="space-y-4">
                      {achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-3 animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10" style={{ animationDelay: `${i * 100}ms` }}>
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                            <Star className="h-4 w-4" />
                          </div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Career Timeline */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10" style={{ animationDelay: "200ms" }}>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                        <Calendar className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">Career Timeline</h3>
                    </div>
                    
                    <div className="relative border-l-2 border-orange-200 pl-8 py-2 space-y-8">
                      {milestones.map((milestone, i) => (
                        <div key={i} className="relative animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10" style={{ animationDelay: `${i * 200}ms` }}>
                          <div className="absolute -left-10 w-6 h-6 rounded-full border-4 border-white bg-orange-500 shadow-md"></div>
                          <div className="bg-gradient-to-r from-orange-50 to-white p-4 rounded-lg shadow-md border border-orange-100">
                            <div className="font-semibold text-orange-600 mb-1">{milestone.year}</div>
                            <p className="text-gray-700">{milestone.event}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision & Impact */}
        <section className="py-16 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-amber-300/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/70 backdrop-blur-sm animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 border-b border-orange-200 pb-4">Legacy and Vision</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 flex items-center justify-center shadow-md">
                          <Globe className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">Global Impact</h4>
                      </div>
                      <p className="text-gray-600">
                        His strategic foresight has expanded Orange Office Technologies into a global service provider, 
                        helping the company stay ahead by embracing technology, automation, and digital transformation.
                      </p>
                    </div>
                    
                    <div className="animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10" style={{ animationDelay: "200ms" }}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md">
                          <Briefcase className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">Core Values</h4>
                      </div>
                      <p className="text-gray-600">
                        Today, under his guidance, Orange Office Technologies serves clients worldwide, empowering businesses 
                        with efficient solutions while maintaining values of integrity, quality, and continuous improvement.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-orange-200 text-center animate-on-scroll opacity-0 transition-all duration-700 transform translate-y-10" style={{ animationDelay: "400ms" }}>
                    <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                      <Link to="/contact" className="flex items-center gap-2">
                        Connect with Our Leadership
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Custom CSS for animations */}
      <style>
        {`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        `}
      </style>
    </div>
  );
};

export default Founders;
