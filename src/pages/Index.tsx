
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, FileCheck, Globe, Headset, Play, Shield, Users, ArrowLeft, Star, Sparkles, HeartHandshake, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { GradientBackground } from "@/components/GradientBackground";
import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { VideoPlayer } from "@/components/ui/video-player";

// Client logos data
const clientLogos = [{
  src: "/62fb7958e1cf7.png",
  alt: "OECL"
}, {
  src: "/62fb78ee5cd45.png",
  alt: "GC"
}, {
  src: "/62fb77880f0df.png",
  alt: "amass"
}, {
  src: "/62fb79231e921.png",
  alt: "oneglobal"
}, {
  src: "/62fb77c2d5890.png",
  alt: "citygen"
}, {
  src: "/62fb783408cd1.png",
  alt: "futurenet"
}, {
  src: "/62fb7890bc643.png",
  alt: "ggl"
}, {
  src: "/62fb79b61d0c8.png",
  alt: "primeshiping"
}, {
  src: "/62fb79faa960d.png",
  alt: "shipsoft"
}, {
  src: "/62fb7adfb0edb.png",
  alt: "haixun"
}, {
  src: "/63048b56bd44e.png",
  alt: "moltech"
}, {
  src: "/63048c170f81a.png",
  alt: "aerofreight"
}];

const Index = () => {
  // Intersection Observer for scroll animations
  const observerRef = useRef(null);
  // Add state for parallax effect
  const [scrollY, setScrollY] = useState(0);
  const isMobile = useIsMobile();

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set up scroll animations
  useEffect(() => {
    // Set up intersection observer for animation on scroll
    observerRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    });

    // Get all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    // Ensure scroll to top on page load
    window.scrollTo(0, 0);
    return () => {
      if (observerRef.current) {
        animatedElements.forEach(el => {
          observerRef.current?.unobserve(el);
        });
      }
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Enhanced Hero Section with Video and Auto-scrolling Logos */}
      <section className="pt-24 md:pt-28 pb-20 relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-[#FDF7F3] to-white">
        {/* Glass Geometric Pattern Overlays */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] transform translate-x-1/3 -translate-y-1/4">
            <div className="w-full h-full bg-gradient-to-br from-orange-400/20 to-amber-300/20 transform rotate-45 rounded-[40%] animate-float"></div>
          </div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] transform -translate-x-1/3 translate-y-1/4">
            <div className="w-full h-full bg-gradient-to-br from-blue-400/20 to-cyan-300/10 transform -rotate-45 rounded-[40%] animate-float" style={{
            animationDelay: "2s"
          }}></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 mb-6 animate-fade-in text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Logistics KPO Excellence</span>
              </div>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in text-[#2C2C2C] leading-tight tracking-tight">
                Your <span className="text-gradient bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 bg-clip-text text-transparent font-extrabold">Preferred</span><br className="hidden md:block" /> IT Partner
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-75 max-w-lg mx-auto lg:mx-0">
                We deliver comprehensive back-office, IT, digital marketing, and telesales solutions tailored for freight forwarders.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button size="lg" className="glass-button bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border-0">
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-orange-400 text-orange-600 hover:bg-orange-50 rounded-xl">
                  <Link to="/services" className="flex items-center gap-2">
                    Our Services
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative mt-10 lg:mt-0 animate-fade-in-right">
              {/* Hero Images Carousel */}
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
                <Carousel className="w-full h-full" opts={{
                loop: true
              }}>
                  <CarouselContent>
                    <CarouselItem>
                      <div className="relative w-full h-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80" alt="Tech Innovation" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/50 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-lg md:text-xl font-bold mb-1">Tech Innovation</h3>
                          <p className="text-sm md:text-base text-white/80">Powering logistics excellence</p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative w-full h-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80" alt="Team Collaboration" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/50 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-lg md:text-xl font-bold mb-1">Team Collaboration</h3>
                          <p className="text-sm md:text-base text-white/80">Expert solutions, together</p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative w-full h-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80" alt="Modern Workspace" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/50 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <h3 className="text-lg md:text-xl font-bold mb-1">Modern Workspace</h3>
                          <p className="text-sm md:text-base text-white/80">Where innovation happens</p>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <CarouselPrevious className="h-8 w-8 rounded-full bg-white/70 hover:bg-white text-gray-800 border-0" />
                    <CarouselNext className="h-8 w-8 rounded-full bg-white/70 hover:bg-white text-gray-800 border-0" />
                  </div>
                </Carousel>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-400/30 to-orange-300/30 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-red-400/20 rounded-full blur-3xl animate-float"></div>
            </div>
          </div>
          
          {/* Client logos - Auto-scrolling */}
          <div className="mt-16 animate-fade-in delay-200">
            <p className="text-gray-800 text-center mb-6 text-sm uppercase tracking-wider font-medium flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
              Trusted by leading companies
              <span className="h-px w-8 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
            </p>
            <div className="p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 shadow-lg">
              <LogoCarousel logos={clientLogos} className="py-4" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section with Enhanced Design */}
      <section className="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden py-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-300/10 to-orange-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-cyan-300/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-gradient bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Revolutionizing logistics operations through innovation and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-none rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-on-scroll group hover:-translate-y-2 overflow-hidden bg-white">
              <CardContent className="p-0 relative">
                <div className="h-56 md:h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" alt="Our Mission" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                </div>
                <div className="relative">
                  <div className="bg-white p-8 relative z-10">
                    <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-4 text-gray-900 mt-6">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Delivering comprehensive solutions that empower freight forwarders to streamline operations, enhance visibility, and achieve sustainable growth in the digital age.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-on-scroll group hover:-translate-y-2 overflow-hidden bg-white">
              <CardContent className="p-0 relative">
                <div className="h-56 md:h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80" alt="Our Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                </div>
                <div className="relative">
                  <div className="bg-white p-8 relative z-10">
                    <div className="absolute -top-8 left-8 w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center shadow-lg">
                      <HeartHandshake className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-4 text-gray-900 mt-6">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To be the global benchmark in KPO services for freight forwarding and logistics, enabling our partners to focus on growth while we manage their operations seamlessly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        
        <svg className="absolute top-0 left-0 w-full text-white" style={{
        transform: "translateY(-1px)"
      }} fill="currentColor" viewBox="0 0 1440 40">
          <path d="M0,0L60,4C120,8,240,16,360,18.7C480,21,600,19,720,13.3C840,8,960,0,1080,0C1200,0,1320,8,1380,12L1440,16L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive solutions tailored for the freight forwarding and logistics industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[{
            icon: FileCheck,
            title: "Documentation",
            description: "Expert documentation services including invoices, credit notes, and job profit statements.",
            image: "/1.png",
            color: "from-blue-500 to-cyan-400"
          }, {
            icon: Users,
            title: "Sales Support",
            description: "Centralized sales support desk for lead management and customer relationships.",
            image: "/2.png",
            color: "from-amber-500 to-orange-400"
          }, {
            icon: Globe,
            title: "Digital Marketing",
            description: "Comprehensive digital marketing solutions to boost your online presence.",
            image: "/3.png",
            color: "from-green-500 to-emerald-400"
          }, {
            icon: Building2,
            title: "Accounts Management",
            description: "Professional accounting services for trade and non-trade transactions.",
            image: "/4.png",
            color: "from-purple-500 to-violet-400"
          }, {
            icon: Headset,
            title: "Customer Service",
            description: "Dedicated customer service team for bookings and nominations.",
            image: "/5.png",
            color: "from-pink-500 to-rose-400"
          }, {
            icon: Shield,
            title: "Software Solutions",
            description: "Custom software development following industry best practices.",
            image: "/6.png",
            color: "from-cyan-500 to-blue-400"
          }].map((service, index) => <Card key={index} className="group border-none rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll overflow-hidden bg-white" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="h-44 relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-0 right-0 m-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-gray-700 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center text-orange-500 font-medium group">
                    <span className="relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-orange-500 after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
                      Learn more
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Enhanced Founder Preview Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
        <svg className="absolute top-0 left-0 w-full text-white" style={{
        transform: "translateY(-1px)"
      }} fill="currentColor" viewBox="0 0 1440 40">
          <path d="M0,32L120,26.7C240,21,480,11,720,10.7C960,11,1200,21,1320,26.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Meet Our Founder
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Visionary leadership driving innovation in logistics technology
            </p>
          </div>

          {/* Enhanced Founder Card */}
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden border-none shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-500 group">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative overflow-hidden bg-gradient-to-br from-orange-600 to-orange-400 h-full">
                    {/* Image with overlay and effects */}
                    <div className="absolute inset-0 mix-blend-multiply opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-300 via-transparent to-transparent"></div>
                    
                    <div className="h-full relative overflow-hidden transform group-hover:scale-105 transition-transform duration-700">
                      <img 
                        src="/lovable-uploads/dcab3f93-8fa0-480c-b028-e34b3d358821.png" 
                        alt="Mr. Sudhir KU" 
                        className="w-full h-full object-cover object-center"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                      
                      {/* Content overlay */}
                      <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-1">Mr. Sudhir KU</h3>
                        <p className="text-orange-100 text-lg mb-4">Director & Founder</p>
                        
                        {/* Experience badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm mb-4">
                          <span className="font-semibold">35+ Years</span> of Industry Experience
                        </div>
                        
                        <Link to="/founders" className="mt-2 inline-flex items-center bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-4 py-2 rounded-full gap-2 text-sm transition-all duration-300 border border-white/20">
                          <span>View Full Profile</span>
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-orange-700 opacity-30 rounded-full blur-2xl"></div>
                  </div>
                  
                  <div className="p-6 md:p-8 bg-gradient-to-br from-white to-orange-50 flex flex-col">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Visionary Leadership</h4>
                    
                    <p className="text-gray-600 mb-4">
                      With over 35 years of industry experience, Mr. Sudhir KU has transformed the landscape of logistics operations through innovative solutions and strategic foresight.
                    </p>
                    
                    <div className="space-y-4 mb-6 text-sm">
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0 mt-0.5">
                          <Star className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-gray-600">Pioneered specialized back-office services for freight forwarding</span>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0 mt-0.5">
                          <Star className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-gray-600">Founded Orange Office Technologies in 2012</span>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0 mt-0.5">
                          <Star className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-gray-600">Led digital transformation initiatives in the logistics sector</span>
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-md hover:shadow-lg transition-all duration-300 rounded-xl">
                        <Link to="/founders" className="flex items-center gap-2 justify-center">
                          Learn More About Our Leadership
                          <ArrowRight className="h-5 w-5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* About Us Section with Enhanced Layout */}
      <section className="py-20 bg-white relative overflow-hidden">
        <svg className="absolute top-0 left-0 w-full text-orange-50" style={{
        transform: "translateY(-1px)"
      }} fill="currentColor" viewBox="0 0 1440 40">
          <path d="M0,0L40,4C80,8,160,16,240,18.7C320,21,400,19,480,13.3C560,8,640,0,720,0C800,0,880,8,960,12C1040,16,1120,16,1200,12C1280,8,1360,0,1400,-4L1440,-8L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
        
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-gradient-to-br from-amber-200/10 to-orange-300/10 blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">About Us</h2>
              
              <p className="text-gray-600 mb-6 text-lg">
                Orange Office Technologies is a leading provider of specialized back-office solutions for the logistics and freight forwarding industry.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">Global Reach</h3>
                    <p className="text-gray-600">
                      With clients across the globe, we deliver seamless operations support internationally.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">Expert Team</h3>
                    <p className="text-gray-600">
                      Our team of industry veterans brings decades of combined experience in logistics and technology.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-2xl text-orange-600">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">Trusted Solutions</h3>
                    <p className="text-gray-600">
                      We've built our reputation on reliability, security, and exceptional service delivery.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                  <Link to="/about" className="flex items-center gap-2">
                    Learn More About Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 animate-on-scroll">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                      <img 
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                        alt="Team meeting" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 translate-y-8">
                      <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
                        alt="Office space" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-4 translate-y-12">
                    <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                      <img 
                        src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" 
                        alt="Technology solutions" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                        alt="Team collaboration" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-orange-400/30 to-amber-300/30 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-amber-300/20 to-orange-400/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white opacity-5 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Ready to Transform Your Logistics Operations?</h2>
            <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
              Partner with Orange Office Technologies for comprehensive back-office solutions that will streamline your operations and drive growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 rounded-xl border-0">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-xl">
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
