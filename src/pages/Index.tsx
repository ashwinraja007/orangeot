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
      
      {/* Enhanced Hero Section - Updated to occupy full viewport height with no white space */}
     <section className="pt-0 relative overflow-hidden min-h-[100vh] flex flex-col justify-center bg-black">
        {/* Fullscreen Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/hero1.jpg" alt="Orange Office Technologies Building" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/50 to-black/60 mix-blend-multiply"></div>
        </div>

        {/* Foreground Content */}
        <div className="container mx-auto px-4 relative z-10 my-auto py-16 md:py-24">
          <div className="text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-400/20 text-orange-300 mb-8 animate-fade-in text-sm font-medium backdrop-blur-sm border border-orange-400/20">
              <Sparkles className="w-4 h-4" />
              <span>Logistics KPO Excellence</span>
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-8 animate-fade-in text-white leading-tight tracking-tight">
              Your <span className="text-gradient bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent font-extrabold">Preferred</span><br className="hidden md:block" /> IT Partner
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in delay-75 max-w-lg mx-auto lg:mx-0">
              We deliver comprehensive back-office, IT, digital marketing, and telesales solutions tailored for freight forwarders.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="glass-button bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl border-0">
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/40 hover:bg-white/10 rounded-xl backdrop-blur-sm text-gray-950">
                <Link to="/services" className="flex items-center gap-2">
                  Our Services
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Client Logos Carousel */}
          <div className="mt-20 animate-fade-in delay-200 relative z-10">
            <p className="text-white text-center mb-6 text-sm uppercase tracking-wider font-medium flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-gradient-to-r from-transparent via-white to-transparent"></span>
              Trusted by leading companies
              <span className="h-px w-8 bg-gradient-to-r from-transparent via-white to-transparent"></span>
            </p>
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/30 shadow-lg">
              <LogoCarousel logos={clientLogos} className="py-4" />
            </div>
          </div>
        </div>
        
        {/* Bottom wave svg for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 w-full z-20">
          
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

{/* Founder Section - Luxury Premium Design with Enhanced Visual Appeal */}
<section className="py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-white relative overflow-hidden">
  {/* Enhanced Dynamic Background */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full bg-gradient-to-br from-orange-300/10 to-amber-200/15 blur-[120px]"></div>
    <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-amber-200/10 to-orange-300/15 blur-[100px]"></div>
    
    {/* Animated Decorative Elements */}
    <div className="absolute top-40 left-20 w-24 h-24 rounded-full border-4 border-orange-200/30 animate-float opacity-70" style={{
      animationDelay: "1.2s",
      animationDuration: "8s"
    }}></div>
    <div className="absolute bottom-40 right-40 w-36 h-36 rounded-full border-8 border-amber-300/20 animate-float opacity-40" style={{
      animationDelay: "2s",
      animationDuration: "12s"
    }}></div>
    <div className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/15 to-amber-400/10 animate-float opacity-50" style={{
      animationDelay: "0.8s",
      animationDuration: "10s"
    }}></div>
    <div className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/15 to-orange-300/10 animate-float opacity-40" style={{
      animationDelay: "1.5s",
      animationDuration: "9s"
    }}></div>
  </div>
  
  {/* Improved Wave Separator */}
  <svg className="absolute top-0 left-0 w-full text-white" style={{
    transform: "translateY(-1px)"
  }} fill="currentColor" viewBox="0 0 1440 50">
    <path d="M0,40L80,36.7C160,33,320,27,480,23.3C640,20,800,20,960,23.3C1120,27,1280,33,1360,36.7L1440,40L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
  </svg>
  
  <div className="container mx-auto px-4 relative z-10">
    {/* Enhanced Section Header with Animation */}
    <div className="text-center mb-20 animate-on-scroll">
      <div className="inline-block mb-3">
        <div className="flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-orange-400"></span>
          <span className="text-orange-500 font-medium uppercase tracking-wider text-sm">Leadership</span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-orange-400"></span>
        </div>
      </div>
      
      <h2 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">Meet Our Leader</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
        The visionary force behind Orange Office Technologies' innovation and global success
      </p>
    </div>

    {/* Premium Founder Showcase with Enhanced Visual Treatment */}
    <div className="max-w-7xl mx-auto">
      <div className="border-none overflow-hidden bg-white group animate-on-scroll rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2),0_0_40px_-20px_rgba(245,130,32,0.25)] hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.25),0_0_50px_-15px_rgba(245,130,32,0.3)] transition-all duration-700">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
          {/* Enhanced Founder Image Section - 6/12 columns */}
          <div className="relative overflow-hidden lg:col-span-6 h-full">
            {/* Premium Image Effects */}
            <div className="absolute inset-0 z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-amber-500/25 to-orange-400/20 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/0 to-black/40"></div>
              <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
            
            {/* Optimized Image with Enhanced Animation */}
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src="/lovable-uploads/dcab3f93-8fa0-480c-b028-e34b3d358821.png" 
                alt="Mr. Sudhir KU" 
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-[1.12] transition-all duration-2000 ease-out"
              />
            </div>
            
            {/* Enhanced Experience Badge with Premium Effect */}
            <div className="absolute top-10 right-10 z-20">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-orange-400 blur-md opacity-70 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-amber-400 to-orange-500 text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-lg border border-white/30 backdrop-blur-sm">
                  <span className="mr-1">✦</span> 35+ Years Experience
                </div>
              </div>
            </div>
            
            {/* Premium Bottom Text Area */}
            <div className="absolute bottom-0 left-0 right-0 p-10 z-20">
              <div className="backdrop-blur-md bg-black/40 p-8 rounded-3xl border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-3">Mr. Sudhir KU</h3>
                <div className="flex items-center gap-4">
                  <div className="h-0.5 w-12 bg-gradient-to-r from-orange-400 to-amber-300"></div>
                  <p className="text-white/90 font-light text-lg">Founder & Director</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Bio Section with Premium Styling - 6/12 columns */}
          <div className="p-10 md:p-14 lg:p-16 lg:col-span-6 flex flex-col justify-center relative">
            {/* Enhanced Subtle Decorative Elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100/40 rounded-full blur-[100px] opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-[120px] opacity-50"></div>
            
            <div className="relative">
              <div className="flex items-start mb-10">
                <span className="text-7xl text-orange-300/40 font-serif leading-none">"</span>
                <div className="ml-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 border-b border-orange-200 pb-5">
                    A Legacy of Excellence in Global Logistics
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-700 text-xl leading-relaxed mb-6">
                With over <span className="font-semibold text-orange-600">three decades of pioneering expertise</span> in the logistics industry, 
                Mr. Sudhir KU has revolutionized how freight forwarding companies operate globally through 
                specialized back-office services and technological innovation.
              </p>
              
              <p className="text-gray-700 text-xl leading-relaxed mb-10">
                His visionary leadership has guided Orange Office Technologies to become a 
                leading KPO service provider, serving clients across multiple continents with 
                tailored solutions that address the unique challenges of the modern logistics landscape.
              </p>
              
              {/* Enhanced Achievement Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                {[{
                  title: "Global Reach",
                  description: "Operations spanning across 3 continents",
                  icon: "🌍",
                  color: "from-blue-50 to-blue-100/50",
                  borderColor: "border-blue-200",
                  iconBg: "bg-blue-100"
                }, {
                  title: "Client Success",
                  description: "50+ satisfied enterprise clients worldwide",
                  icon: "🏆",
                  color: "from-green-50 to-emerald-100/50",
                  borderColor: "border-green-200",
                  iconBg: "bg-green-100"
                }, {
                  title: "Industry Pioneer",
                  description: "First to introduce specialized KPO services",
                  icon: "🚀",
                  color: "from-orange-50 to-amber-100/50",
                  borderColor: "border-orange-200",
                  iconBg: "bg-orange-100"
                }, {
                  title: "Digital Transformation",
                  description: "Leading technological innovation",
                  icon: "💻",
                  color: "from-purple-50 to-violet-100/50",
                  borderColor: "border-purple-200",
                  iconBg: "bg-purple-100"
                }].map((achievement, index) => (
                  <div key={index} className={`bg-gradient-to-br ${achievement.color} p-5 rounded-2xl border ${achievement.borderColor} hover:shadow-lg transition-all duration-300 group/card transform hover:-translate-y-1`}>
                    <div className="flex items-start gap-3">
                      <div className={`${achievement.iconBg} w-10 h-10 rounded-full flex items-center justify-center text-lg`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1 group-hover/card:text-orange-600 transition-colors duration-300 text-lg">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Premium CTA Button */}
              <div className="inline-block">
                <div className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl shadow-lg group overflow-hidden relative p-0.5">
                  <div className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full skew-x-12 group-hover:translate-x-full transition-transform duration-700"></div>
                  <a href="/founders" className="flex items-center gap-3 justify-center py-3 px-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-[calc(0.75rem-2px)] relative z-10 group-hover:from-orange-600 group-hover:to-amber-600 transition-all duration-300">
                    <span className="font-medium">Know More About Our Leadership</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've built a strong track record of success over the years.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[{
            number: "10+",
            label: "Years Experience",
            icon: Building2,
            color: "from-blue-600 to-cyan-500"
          }, {
            number: "100+",
            label: "Happy Employees",
            icon: Users,
            color: "from-green-600 to-emerald-500"
          }, {
            number: "50+",
            label: "Satisfied Clients",
            icon: Headset,
            color: "from-amber-500 to-orange-400"
          }, {
            number: "200+",
            label: "Projects Completed",
            icon: FileCheck,
            color: "from-purple-600 to-violet-500"
          }].map((stat, index) => <div key={index} style={{
            animationDelay: `${index * 100}ms`
          }} className="text-center p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll border-none group hover:-translate-y-1 bg-white glassmorphism">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg transform group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="font-heading font-bold text-4xl text-gray-800 mb-2 animate-count-up">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section with Auto-scrolling Carousel */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/10 to-amber-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-200/10 to-cyan-300/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-gradient bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <AutoplayCarousel testimonials={[{
            quote: "Orange Office Technologies has transformed our operations. Their team is professional, responsive, and truly understands the freight forwarding industry.",
            author: "John Smith",
            position: "CEO",
            company: "Global Shipping Ltd"
          }, {
            quote: "The documentation services provided by Orange Office have reduced our processing time by 40%. Their attention to detail is impeccable.",
            author: "Sarah Johnson",
            position: "Operations Director",
            company: "Pacific Logistics"
          }, {
            quote: "We've been working with Orange Office for 5 years, and their consistent quality and innovation have helped us stay ahead in a competitive market.",
            author: "Michael Chang",
            position: "Managing Director",
            company: "EastWest Freight Services"
          }, {
            quote: "Their digital marketing solutions have transformed our online presence. We've seen a 200% increase in qualified leads since partnering with them.",
            author: "Anna Martinez",
            position: "Marketing Head",
            company: "Express Cargo Systems"
          }]} />
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};

// Auto-scrolling testimonial carousel component
const AutoplayCarousel = ({
  testimonials
}) => {
  const [api, setApi] = useState(null);
  const isMobile = useIsMobile();
  useEffect(() => {
    if (!api) return;

    // Set up autoplay
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);
  return <Carousel className="w-full" setApi={setApi} opts={{
    align: "start",
    loop: true
  }}>
      <CarouselContent>
        {testimonials.map((testimonial, index) => <CarouselItem key={index} className={isMobile ? "basis-full" : "basis-1/2"}>
            <div className="p-4">
              <Card className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white/80 backdrop-blur-sm">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    <div className="text-6xl text-orange-300 opacity-50">"</div>
                  </div>
                  <blockquote className="text-lg text-center italic mb-8 flex-grow text-gray-700">
                    {testimonial.quote}
                  </blockquote>
                  <div className="text-center mt-auto">
                    <p className="font-heading font-bold text-lg text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <p className="text-orange-500 font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-6">
        <CarouselPrevious className="static relative transform-none bg-white hover:bg-gray-100 border-orange-200 text-orange-500 mx-2" />
        <CarouselNext className="static relative transform-none bg-white hover:bg-gray-100 border-orange-200 text-orange-500 mx-2" />
      </div>
    </Carousel>;
};
export default Index;
