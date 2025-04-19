import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Building2, FileCheck, Globe, Headset, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { GradientBackground } from "@/components/GradientBackground";
import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
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
      
      {/* Hero Section with Video Background */}
      <section className="pt-24 md:pt-28 pb-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden min-h-screen flex items-center">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30">
            <source src="https://cdn.coverr.co/videos/coverr-digital-transformation-in-business-2315/1080p.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#FFC78E]\\n bg-[t#FF6A00] bg-[#ff6a00]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in text-white leading-tight tracking-tight">
                Your <span className="text-silver-gray font-extrabold">Preferred</span><br className="hidden md:block" /> IT Partner
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in delay-75 max-w-lg mx-auto lg:mx-0">
                We deliver comprehensive back-office, IT, digital marketing, and telesales solutions tailored for freight forwarders.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-white text-gray-800 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 btn-hover-effect animate-fade-in delay-100">
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 animate-fade-in delay-150">
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative mt-10 lg:mt-0 animate-slide-in-right">
              <div className="aspect-video glassmorphism rounded-2xl overflow-hidden shadow-2xl animate-float">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                  <source src="https://cdn.coverr.co/videos/coverr-close-up-of-a-security-lock-3453/1080p.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <Shield className="h-16 w-16 mx-auto mb-4 text-silver-gray animate-pulse" />
                    <h3 className="text-xl font-semibold">Secure & Reliable Solutions</h3>
                  </div>
                </div>
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-silver-gray/30 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute -bottom-16 -left-10 w-40 h-40 bg-silver-gray/30 rounded-full blur-3xl animate-float"></div>
            </div>
          </div>
          
          {/* Client logos - Fixed visibility */}
          <div className="mt-16 animate-fade-in delay-200">
            <p className="text-white/80 text-center mb-6 text-sm uppercase tracking-wider font-medium">Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {/* Replace with actual client logos */}
              {["https://flowbite.s3.amazonaws.com/blocks/marketing-ui/clients/spotify-grayscale.svg", "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/clients/microsoft-grayscale.svg", "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/clients/google-grayscale.svg", "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/clients/apple-grayscale.svg", "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/clients/netflix-grayscale.svg"].map((logo, i) => <div key={i} className="h-12 w-auto flex items-center justify-center p-2 backdrop-blur-sm">
                  <img src={logo} alt={`Client logo ${i + 1}`} className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                </div>)}
            </div>
          </div>
        </div>
        
        {/* Enhanced wave divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C50.45,22.39,121.09,43.65,201.77,57.86,248.57,67.43,280.12,65.8,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      {/* Mission & Vision Section with Enhanced Design */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden bg-slate-200">
        <div className="absolute top-0 right-0 w-96 h-96 bg-silver-gray/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-silver-gray/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10 bg-slate-50">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text text-transparent">
              Our Purpose & Vision
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Revolutionizing logistics operations through innovation and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 animate-on-scroll group hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-0 relative">
                <div className="h-48 md:h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" alt="Our Mission" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                </div>
                <div className="p-8 relative z-10 bg-slate-100">
                  
                  <h3 className="font-heading font-bold text-2xl mb-4 text-gray-900 mt-2">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Delivering comprehensive solutions that empower freight forwarders to streamline operations, enhance visibility, and achieve sustainable growth in the digital age.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 animate-on-scroll group hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-0 relative">
                <div className="h-48 md:h-64 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80" alt="Our Vision" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                </div>
                <div className="p-8 relative z-10 bg-gray-50">
                  
                  <h3 className="font-heading font-bold text-2xl mb-4 text-gray-900 mt-2">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the global benchmark in KPO services for freight forwarding and logistics, enabling our partners to focus on growth while we manage their operations seamlessly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Cards */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block px-4 py-2 rounded-full bg-silver-gray/10 text-gray-700 font-medium text-sm mb-4">WHAT WE OFFER</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive solutions tailored for the freight forwarding and logistics industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[{
            icon: FileCheck,
            title: "Documentation",
            description: "Expert documentation services including invoices, credit notes, and job profit statements.",
            image: "https://images.unsplash.com/photo-1582653841981-84d64c067ee5?auto=format&fit=crop&w=600&q=80"
          }, {
            icon: Users,
            title: "Sales Support",
            description: "Centralized sales support desk for lead management and customer relationships.",
            image: "https://images.unsplash.com/photo-1543123289-93c36174a331?auto=format&fit=crop&w=600&q=80"
          }, {
            icon: Globe,
            title: "Digital Marketing",
            description: "Comprehensive digital marketing solutions to boost your online presence.",
            image: "https://images.unsplash.com/photo-1587620962725-ead3750e5b90?auto=format&fit=crop&w=600&q=80"
          }, {
            icon: Building2,
            title: "Accounts Management",
            description: "Professional accounting services for trade and non-trade transactions.",
            image: "https://images.unsplash.com/photo-1507842214779-846420a6bcd3?auto=format&fit=crop&w=600&q=80"
          }, {
            icon: Headset,
            title: "Customer Service",
            description: "Dedicated customer service team for bookings and nominations.",
            image: "https://images.unsplash.com/photo-1551033406-611732b5e7ca?auto=format&fit=crop&w=600&q=80"
          }, {
            icon: Shield,
            title: "Software Solutions",
            description: "Custom software development following industry best practices.",
            image: "https://images.unsplash.com/photo-1518770660439-46493ca4a0db?auto=format&fit=crop&w=600&q=80"
          }].map((service, index) => <Card key={index} className="group border-none rounded-xl shadow-card hover:shadow-xl transition-all duration-500 animate-on-scroll overflow-hidden bg-white" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="h-40 relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800/70 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-gray-700 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center text-gray-700 font-medium hover:underline group">
                    Learn more 
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* About Us Section with Enhanced Layout */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-silver-gray/5 blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll">
              <span className="inline-block px-4 py-2 rounded-full bg-silver-gray/10 text-gray-700 font-medium text-sm mb-4">ABOUT US</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text text-transparent">Orange Office Technologies</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Orange Office Technologies Pvt Ltd. is a Neutral KPO Service Provider who offers the shipping & logistics players worldwide, the competitive edge in the market.
              </p>
              <p className="text-gray-600 mb-8">
                We provide expert service in all the core segments of day-to-day operations starting from Documentation & Operation, sales support, Customer service & Accounting activity.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="mr-4 bg-silver-gray/10 rounded-full p-2">
                    <Shield className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Top Security</h4>
                    <p className="text-gray-600 text-sm">Enterprise-grade security for all data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 bg-silver-gray/10 rounded-full p-2">
                    <Users className="h-6 w-6 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Expert Team</h4>
                    <p className="text-gray-600 text-sm">Qualified professionals in logistics</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="bg-gray-800 hover:bg-gray-700 text-white shadow-md hover:shadow-lg transition-all duration-300 btn-hover-effect">
                <Link to="/about" className="flex items-center gap-2">
                  Learn More About Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 animate-on-scroll">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1551288033-cc57f1700a3b?auto=format&fit=crop&w=800&q=80" alt="Orange Office Technologies Building" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/30 to-transparent"></div>
                </div>
                
                {/* Floating card */}
                <div className="absolute -bottom-10 -right-10 bg-white rounded-lg shadow-xl p-6 max-w-xs animate-float">
                  <div className="flex items-center mb-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <p className="font-medium">Always Available</p>
                  </div>
                  <p className="text-gray-600 text-sm">24/7 customer support for all your logistics needs</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-silver-gray/20 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="absolute -bottom-16 -left-6 w-20 h-20 bg-silver-gray/20 rounded-full blur-xl animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text text-transparent">Our Impact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've built a strong track record of success over the years.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[{
            number: "10+",
            label: "Years Experience",
            icon: Building2
          }, {
            number: "100+",
            label: "Happy Employees",
            icon: Users
          }, {
            number: "50+",
            label: "Satisfied Clients",
            icon: Headset
          }, {
            number: "200+",
            label: "Projects Completed",
            icon: FileCheck
          }].map((stat, index) => <div key={index} className="text-center p-6 md:p-8 glass-card rounded-xl shadow-card hover:shadow-xl transition-all duration-300 animate-on-scroll bg-white border-t-4 border-silver-gray group hover:-translate-y-1" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="w-16 h-16 rounded-full bg-silver-gray/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-silver-gray/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-gray-700" />
                </div>
                <div className="font-heading font-bold text-4xl text-gray-700 mb-2 animate-count-up">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section with Auto-scrolling Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <span className="inline-block px-4 py-2 rounded-full bg-silver-gray/10 text-gray-700 font-medium text-sm mb-4">TESTIMONIALS</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text text-transparent">What Our Clients Say</h2>
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

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-silver-gray/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-silver-gray/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 animate-on-scroll leading-tight text-transparent bg-gradient-to-r from-white to-silver-gray/80 bg-clip-text">
              Ready to Transform Your Logistics Operations?
            </h2>
            <p className="text-xl mb-10 animate-on-scroll max-w-2xl mx-auto text-silver-gray/90">
              Let us help you streamline your processes and boost your business growth with our tailored solutions.
            </p>
            
            <Card className="border-none shadow-2xl backdrop-blur-md p-8 mb-10 animate-on-scroll bg-white/5">
              <CardContent className="p-0 text-left">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="col-span-2">
                    <h3 className="text-white text-2xl font-bold mb-2">Book a Free Consultation</h3>
                    <p className="text-white/80">Get expert advice on how we can help optimize your operations</p>
                  </div>
                  <div className="text-right">
                    <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90 shadow-lg hover:shadow-xl btn-hover-effect w-full md:w-auto">
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        Schedule Now
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-on-scroll">
              <Button size="lg" variant="outline" className="border-silver-gray/30 text-silver-gray hover:bg-white/10 btn-hover-effect">
                <Link to="/services">Explore Services</Link>
              </Button>
              <Button size="lg" className="bg-silver-gray/20 hover:bg-silver-gray/30 text-white shadow-lg hover:shadow-xl btn-hover-effect">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
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
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    <div className="text-6xl text-silver-gray">"</div>
                  </div>
                  <blockquote className="text-lg text-center italic mb-8 flex-grow">
                    {testimonial.quote}
                  </blockquote>
                  <div className="text-center mt-auto">
                    <p className="font-heading font-bold text-lg">{testimonial.author}</p>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <p className="text-gray-700 font-medium">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)}
      </CarouselContent>
      <div className="flex justify-center mt-8 gap-2">
        <CarouselPrevious className="relative static translate-y-0 left-0" />
        <CarouselNext className="relative static translate-y-0 right-0" />
      </div>
    </Carousel>;
};
export default Index;