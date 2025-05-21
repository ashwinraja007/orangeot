import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, FileCheck, Globe, Headset, Shield, Users, HeartHandshake, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Hero } from "@/components/Hero";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import { GlobalImpact } from "@/components/GlobalImpact";

// Client logos data
const clientLogos = [{
  src: "/62fb7958e1cf7.png",
  alt: "OECL"
}, {
  src: "/62fb78ee5cd45.png",
  alt: "GC"
}, {
  src: "/62fb77880f0df.png",
  alt: "Amass"
}, {
  src: "/62fb79231e921.png",
  alt: "Oneglobal"
}, {
  src: "/62fb77c2d5890.png",
  alt: "Citygen"
}, {
  src: "/62fb783408cd1.png",
  alt: "Futurenet"
}, {
  src: "/62fb7890bc643.png",
  alt: "GGL"
}, {
  src: "/62fb79b61d0c8.png",
  alt: "Primeshiping"
}, {
  src: "/62fb79faa960d.png",
  alt: "Shipsoft"
}, {
  src: "/62fb7adfb0edb.png",
  alt: "Haixun"
}, {
  src: "/63048b56bd44e.png",
  alt: "Moltech"
}, {
  src: "/63048c170f81a.png",
  alt: "Aerofreight"
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
      
      {/* Hero Section */}
      <Hero />
      
      {/* Mission & Vision Section with Enhanced Design */}
      <section className="bg-gradient-to-b from-white to-gray-50 relative overflow-hidden py-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-300/10 to-orange-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-cyan-300/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-gradient bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">Mission & Vision</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Revolutionizing logistics operations through innovation and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-none rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 animate-on-scroll group hover:-translate-y-2 overflow-hidden bg-white">
              <CardContent className="p-0 relative">
                <div className="h-56 md:h-64 overflow-hidden">
                  <img src="vision.avif" alt="Our Mission" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  
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
                  <img alt="Our Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/lovable-uploads/80922c9b-79f9-4226-8e07-491c1056064e.jpg" />
                  
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

      {/* Client Logos Carousel */}
      <section className="py-12 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-center mb-4 text-sm uppercase tracking-wider font-medium flex items-center justify-center gap-2 text-gray-600">
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></span>
              Trusted by leading companies
              <span className="h-px w-12 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></span>
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-lg">
            <LogoCarousel logos={clientLogos} className="py-4" />
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden bg-slate-50">
        
        
        
        
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
            title: "Documentation Services",
            description: "Expert documentation handling including invoices, credit notes, and job profit statements.",
            image: "/1.png",
            color: "from-blue-500 to-cyan-400",
            link: "/services/documentation"
          }, {
            icon: Users,
            title: "Sales Support Desk",
            description: "Centralized sales support for lead management and customer relationships.",
            image: "/2.png",
            color: "from-amber-500 to-orange-400",
            link: "/services/salessupport"
          }, {
            icon: Globe,
            title: "Digital Marketing",
            description: "Comprehensive digital marketing solutions to boost your online presence.",
            image: "/10.png",
            color: "from-green-500 to-emerald-400",
            link: "/services/digitalmarketing"
          }, {
            icon: Building2,
            title: "Account Management",
            description: "Professional accounting services for trade and non-trade transactions.",
            image: "/4.png",
            color: "from-purple-500 to-violet-400",
            link: "/services/AccountsManagement"
          }, {
            icon: Headset,
            title: "Customer Service",
            description: "Dedicated customer service team for bookings and nominations.",
            image: "/12.png",
            color: "from-pink-500 to-rose-400",
            link: "/services/customerservice"
          }, {
            icon: Shield,
            title: "Software Solutions",
            description: "Custom software development following industry best practices.",
            image: "/13.png",
            color: "from-cyan-500 to-blue-400",
            link: "/services/SoftwareSolutions"
          }].map((service, index) => <Card key={index} className="group border-none rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-on-scroll overflow-hidden bg-white" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="h-44 relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  <div className="absolute top-0 right-0 m-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 bg-slate-50">
                  <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-gray-700 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center text-orange-500 font-medium group">
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

      {/* Updated Founder Section - More Compact and Mobile Responsive */}
      <section className="py-16 bg-gradient-to-br from-amber-50 via-orange-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-orange-300/5 to-amber-200/10 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-amber-200/5 to-orange-300/10 blur-[80px]"></div>
        </div>
        
        {/* Wave Separator */}
        <svg className="absolute top-0 left-0 w-full text-white" style={{
        transform: "translateY(-1px)"
      }} fill="currentColor" viewBox="0 0 1440 50">
          <path d="M0,40L80,36.7C160,33,320,27,480,23.3C640,20,800,20,960,23.3C1120,27,1280,33,1360,36.7L1440,40L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">Meet Our Director</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">The force behind Orange Office Technologies' innovation and global success</p>
          </div>

          {/* Updated Founder Card */}
          <div className="max-w-6xl mx-auto">
            <div className="border-none overflow-hidden bg-white group animate-on-scroll rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-12 min-h-0">
                {/* Founder Image Section - Now more compact */}
                <div className="relative lg:col-span-5 h-full min-h-[300px] md:min-h-[400px]">
                  {/* Experience Badge - Now on the left corner */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-full font-medium text-sm shadow-lg border border-white/30 backdrop-blur-sm py-[7px] px-[2px]">
                      35+ Years Experience
                    </div>
                  </div>
                  
                  {/* Image without colored overlay */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img src="/lovable-uploads/dcab3f93-8fa0-480c-b028-e34b3d358821.png" alt="Mr. Sudhir KU" className="w-full h-full object-center scale-100 group-hover:scale-105 transition-all duration-1000 ease-out object-contain" />
                    {/* Light bottom gradient for text readability */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  {/* Name Tag */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="text-2xl font-bold text-white mb-0">Mr. Sudhir KU</h3>
                    <p className="text-white/90 text-sm">Director </p>
                  </div>
                </div>
                
                {/* Bio Section - Now more compact */}
                <div className="p-6 lg:p-8 lg:col-span-7 flex flex-col justify-center py-[56px] px-[40px] mx-0 my-[35px]">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-orange-200">
                    A Legacy of Excellence in Global Logistics
                  </h3>
                  
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                    With over <span className="font-semibold text-orange-600">three decades of pioneering expertise</span>, 
                    Mr. Sudhir KU has revolutionized how freight forwarding companies operate globally through 
                    specialized back-office services and technological innovation.
                  </p>
                  
                  {/* Achievements - Now in a more compact row for mobile and desktop */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {[{
                    title: "Global Reach",
                    description: "Operations across 3 continents",
                    icon: "🌍"
                  }, {
                    title: "Client Success",
                    description: "50+ enterprise clients",
                    icon: "🏆"
                  }, {
                    title: "Industry Pioneer",
                    description: "First specialized KPO services",
                    icon: "🚀"
                  }, {
                    title: "Digital Innovation",
                    description: "Leading tech adaptation",
                    icon: "💻"
                  }].map((achievement, index) => <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 flex items-center gap-2">
                        <div className="bg-amber-100 w-8 h-8 rounded-full flex items-center justify-center text-lg shrink-0">
                          {achievement.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800 text-sm">
                            {achievement.title}
                          </h4>
                          <p className="text-gray-600 text-xs">{achievement.description}</p>
                        </div>
                      </div>)}
                  </div>
                  
                  {/* CTA Button */}
                  <div>
                    <Link to="/founders" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-2 px-4 rounded-lg font-medium text-sm transition-all duration-300 shadow-md hover:shadow-lg">
                      Know More  
                      <ArrowRight className="h-4 w-4" />
                    </Link>
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
              <p className="text-gray-600 mb-6 text-lg">Orange Office Technologies (OOT Pvt. Ltd.) is a specialized back-office service provider catering exclusively to the global shipping, freight forwarding, and third-party warehousing (3PL) industries.</p>
              <p className="text-gray-600 mb-8">We support our clients by managing their core non-customer-facing functions  including documentation, sales support, customer service, accounting, and digital services allowing them to focus on their core logistics operations. Our deep industry knowledge combined with a skilled workforce ensures service excellence, operational efficiency, and real-time adaptability in today’s dynamic market

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
                  <img alt="Orange Office Technologies Building" className="w-full h-full object-cover" src="/lovable-uploads/04a753dd-ba7f-4011-8785-b8ca9ae84e26.png" />
                  
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

      {/* Global Impact Section - Added before the footer */}
      <GlobalImpact />

      {/* Enhanced Stats Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden py-0">
        
        {/* Footer */}
        <Footer />
      </section>
    </div>;
};
export default Index;
