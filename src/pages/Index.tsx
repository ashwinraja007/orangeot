import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, FileCheck, Globe, Headset, Play, Shield, Users, ArrowLeft, Star, Sparkles, HeartHandshake, TrendingUp, Quote } from "lucide-react";
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

// Testimonials data
const testimonials = [
  {
    content: "Orange Office Technologies has transformed our document management process. Their team is responsive, detail-oriented, and delivers exceptional quality every time.",
    author: "James Wilson",
    position: "Operations Manager",
    company: "Global Freight Solutions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "The customer service team at Orange Office Technologies is remarkable. They've significantly improved our client satisfaction ratings with their prompt and efficient support.",
    author: "Sarah Chen",
    position: "Customer Relations Head",
    company: "Oceanic Shipping Co.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "Their digital marketing services have dramatically increased our online visibility. We've seen a 65% growth in leads since partnering with Orange Office Technologies.",
    author: "David Mehta",
    position: "Marketing Director",
    company: "Express Logistics International",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  },
  {
    content: "The software solutions provided by Orange Office Technologies have streamlined our operations and saved us countless hours of manual work. Their team is innovative and reliable.",
    author: "Emma Rodriguez",
    position: "IT Manager",
    company: "Global Cargo Systems",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
  }
];

// Global impact statistics
const impactStats = [
  { value: "15+", label: "Years of Excellence", icon: Star },
  { value: "250+", label: "Global Clients", icon: Globe },
  { value: "500+", label: "Completed Projects", icon: FileCheck },
  { value: "30+", label: "Countries Reached", icon: Building2 }
];

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
      
      {/* Enhanced Hero Section - Updated with a properly visible office building image */}
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
              {/* Hero Image with improved visibility */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border-4 border-white">
                <img 
                  src="/office.png" 
                  alt="Orange Office Technologies Building" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/30 to-transparent mix-blend-multiply"></div>
                <div className="absolute bottom-6 left-6 text-white">
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

      {/* Global Impact Section - NEW */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white relative overflow-hidden">
        <svg className="absolute top-0 left-0 w-full text-white" style={{
          transform: "translateY(-1px)"
        }} fill="currentColor" viewBox="0 0 1440 40">
          <path d="M0,32L120,26.7C240,21,480,11,720,10.7C960,11,1200,21,1320,26.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>
        
        <div className="absolute top-0 right-0 opacity-10">
          <svg width="400" height="400" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(300,300)">
              <path d="M131.1,-191.3C167.3,-163.4,192.3,-119.2,204.6,-73.2C217,-27.1,216.8,20.8,201.6,62.9C186.3,105,156,141.2,119.2,165.5C82.3,189.8,38.9,202.1,-6.4,210.9C-51.8,219.7,-99.1,224.9,-139.2,208C-179.3,191,-212.2,152,-226.9,107.9C-241.6,63.8,-238,14.7,-222.3,-27.8C-206.5,-70.3,-178.5,-106.2,-144.4,-134.9C-110.4,-163.7,-70.2,-185.3,-27.5,-191.2C15.3,-197,82.7,-186.9,131.1,-191.3Z" fill="#FFA94D" />
            </g>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Our Global Impact
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Transforming logistics operations across continents with innovative solutions
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {impactStats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-lg border border-amber-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-orange-500/20 to-amber-400/20 mx-auto">
                  <stat.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* World Map Visualization */}
          <div className="mb-16 relative rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-[16/9] bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
              {/* World map illustration - using a gradient layered effect */}
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 1026 626" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1025.53 620.536C1017.53 618.059 1009.12 615.091 999.272 610.864C984.421 604.563 968.15 599.236 951.808 593.892C850.733 559.965 744.941 533.436 641.504 535.187C624.533 535.54 607.491 527.022 590.586 517.533C572.875 507.572 558.25 491.338 546.6 473.223C530.065 447.99 519.436 417.987 516.649 387.224C511.761 337.098 530.784 286.212 529.246 235.853C528.33 205.721 513.998 173.939 491.258 156.543C470.104 140.377 440.518 138.253 414.091 145.184C351.964 160.189 298.664 206.47 279.23 268.974C270.465 296.397 267.498 326.403 255.329 352.708C239.81 386.167 209.238 405.734 179.973 424.119C151.81 441.801 122.491 458.255 99.0879 482.359C77.3357 504.75 60.8865 532.559 50.5402 562.671C40.1938 592.783 36.4024 624.925 40.3058 625.459C73.9050 629.988 118.39 608.537 151.913 590.196C179.233 575.263 207.193 561.404 235.704 548.653C301.788 520.285 371.038 498.026 442.083 485.081C490.754 476.453 545.584 472.466 593.914 458.09C607.256 453.676 619.263 444.994 633.075 440.76C650.112 43
