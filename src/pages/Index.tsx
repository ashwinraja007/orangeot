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
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Enhanced Hero Section - Updated with a single office building image */}
      <section className="pt-24 md:pt-28 pb-20 relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-br from-[#FDF7F3] to-white">
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
              {/* Hero Image - Single office building image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
                <img 
                  src="/office.png" 
                  alt="Orange Office Technologies Building" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/30 to-transparent mix-blend-multiply"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-lg md:text-xl font-bold mb-1">Our Headquarters</h3>
                  <p className="text-sm md:text-base text-white/80">Where innovation meets expertise</p>
                </div>
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

      {/* Services Section - Updated with box layout */}
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
          
          {/* Services grid with box layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
            icon: FileCheck,
            title: "Documentation",
            description: "Expert documentation services including invoices, credit notes, and job profit statements.",
            image: "/1.png",
            color: "from-blue-500 to-cyan-400",
            link: "/services/documentation"
          }, {
            icon: Users,
            title: "Sales Support",
            description: "Centralized sales support desk for lead management and customer relationships.",
            image: "/2.png",
            color: "from-amber-500 to-orange-400",
            link: "/services/sales-support"
          }, {
            icon: Globe,
            title: "Digital Marketing",
            description: "Comprehensive digital marketing solutions to boost your online presence.",
            image: "/3.png",
            color: "from-green-500 to-emerald-400",
            link: "/services/digital-marketing"
          }, {
            icon: Building2,
            title: "Accounts Management",
            description: "Professional accounting services for trade and non-trade transactions.",
            image: "/4.png",
            color: "from-purple-500 to-violet-400",
            link: "/services/accounts"
          }, {
            icon: Headset,
            title: "Customer Service",
            description: "Dedicated customer service team for bookings and nominations.",
            image: "/5.png",
            color: "from-pink-500 to-rose-400",
            link: "/services/customer-service"
          }, {
            icon: Shield,
            title: "Software Solutions",
            description: "Custom software development following industry best practices.",
            image: "/6.png",
            color: "from-cyan-500 to-blue-400",
            link: "/services/software"
          }].map((service, index) => (
              <Card key={index} className="group border-none rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll overflow-hidden bg-white h-full" style={{
                animationDelay: `${index * 100}ms`
              }}>
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-white/80 mb-4 line-clamp-2">{service.description}</p>
                    <Link to={service.link} className="inline-flex items-center text-white font-medium bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full gap-2 text-sm transition-all duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section - Updated to be more attractive */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white relative overflow-hidden">
        <svg className="absolute top-0 left-0 w-full text-white" style={{
        transform: "translateY(-1px)"
      }} fill="currentColor" viewBox="0 0 1440 40">
          <path d="M0,32L120,26.7C240,21,480,11,720,10.7C960,11,1200,21,1320,26.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>
        
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300/20 to-amber-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-5 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Meet Our Visionary Founder
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              The driving force behind Orange Office Technologies' success and innovation
            </p>
          </div>

          {/* Founder card with better layout and description */}
          <div className="max-w-5xl mx-auto">
            <Card className="border-none rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Founder image */}
                  <div className="relative overflow-hidden aspect-square md:aspect-auto">
                    <img 
                      src="/lovable-uploads/dcab3f93-8fa0-480c-b028-e34b3d358821.png" 
                      alt="Mr. Sudhir KU" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-1">Mr. Sudhir KU</h3>
                      <p className="text-white/90">CEO & Founder</p>
                    </div>
                  </div>
                  
                  {/* Founder bio */}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-1 w-10 bg-orange-500"></div>
                      <span className="text-orange-500 font-medium">Our Leadership</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-800">35+ Years of Industry Excellence</h3>
                    <p className="text-gray-600 mb-4">
                      With over three decades of experience in the logistics industry, Mr. Sudhir KU has pioneered specialized back-office services 
                      that have transformed how freight forwarding companies operate globally.
                    </p>
                    <p className="text-gray-600 mb-6">
                      His vision has guided Orange Office Technologies to become a leading KPO service provider, 
                      serving clients across multiple continents with innovative solutions tailored to the logistics industry.
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      {["Visionary Leader", "Industry Pioneer", "Global Expertise", "Tech Innovation"].map((tag, index) => (
                        <span key={index} className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl shadow-md">
                      <Link to="/founders" className="flex items-center gap-2">
                        Learn More About Our Founder
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
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
              
              <h2 className="font-heading font-bold md:text-4xl mb-6 text-gradient bg-gradient-to-r from-orange-700 via-orange-600 to-orange-500 bg-clip-text text-transparent text-2xl lg:text-3xl">Orange Office Technologies</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Orange Office Technologies Pvt Ltd. is a Neutral KPO Service Provider who offers the shipping & logistics players worldwide, the competitive edge in the market.
              </p>
              <p className="text-gray-600 mb-8">
                We provide expert service in all the core segments of day-to-day operations starting from Documentation & Operation, sales support, Customer service & Accounting activity.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 bg-blue-100 rounded-full p-3">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Top Security</h4>
                    <p className="text-gray-600 text-sm">Enterprise-grade security for all data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 bg-orange-100 rounded-full p-3">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Expert Team</h4>
                    <p className="text-gray-600 text-sm">Qualified professionals in logistics</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border-0">
                <Link to="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 animate-on-scroll">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img src="/office.png" alt="Orange Office Technologies Building" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
                </div>
                
                {/* Floating card */}
                <div className="absolute -bottom-10 -right-10 bg-white rounded-xl shadow-xl p-6 max-w-xs animate-float glass-card">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <p className="font-medium">Always Available</p>
                  </div>
                  <p className="text-gray-600 text-sm">24/7 customer support for all your logistics needs</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-300/30 to-cyan-300/20 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="absolute -bottom-16 -left-6 w-20 h-20 bg-gradient-to-br from-amber-300/30 to-orange-300/20 rounded-full blur-xl animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <svg className="absolute top-0 left-0 w-full text-white" style={{
        transform: "translateY(-1px)"
      }} fill="currentColor" viewBox="0 0 1440 40">
          <path d="M0,16L80,13.3C160,11,320,5,480,8C640,11,800,21,960,21.3C1120,21,1280,11,1360,5.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        
        <div className="absolute inset-0 bg-pattern opacity-5
