
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { GlobalImpact } from "@/components/GlobalImpact";

const clientLogos = [
  { name: "OECL", industry: "Logistics", logo: "/62fb7958e1cf7.png" },
  { name: "GC", industry: "Shipping", logo: "/62fb78ee5cd45.png" },
  { name: "Amass", industry: "Freight Forwarding", logo: "/62fb77880f0df.png" },
  { name: "Oneglobal", industry: "Supply Chain", logo: "/62fb79231e921.png" },
  { name: "Citygen", industry: "Transportation", logo: "/62fb77c2d5890.png" },
  { name: "Futurenet", industry: "Warehousing", logo: "/62fb783408cd1.png" },
  { name: "GGL", industry: "Distribution", logo: "/62fb7890bc643.png" },
  { name: "Primeshiping", industry: "Export/Import", logo: "/62fb79b61d0c8.png" }
];

const testimonials = [
  {
    quote: "The digital marketing services provided by OOT have significantly boosted our online presence...",
    author: "Buddhika Liyanage",
    position: "Director Business Development",
    company: "GC Singapore",
    image: "/62fb78ee5cd45.png"
  },
  {
    quote: "Orange Office Technologies has been a game-changer for us...",
    author: "June Koh",
    position: "Director",
    company: "GGL",
    image: "/62fb7890bc643.png"
  },
  {
    quote: "The customer service and nomination handling provided by OOT are exceptional...",
    author: "Philip Sinnappan",
    position: "Director",
    company: "OECL Malaysia",
    image: "/62fb7958e1cf7.png"
  },
  {
    quote: "OOT's process mapping and consultation services have revolutionized our logistics operations...",
    author: "Ellath Pramodh",
    position: "Country Manager",
    company: "OECL Thailand",
    image: "/62fb7958e1cf7.png"
  }
];

const Clients = () => {
  const [api, setApi] = useState(null);
  const [clientsApi, setClientsApi] = useState(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (!clientsApi) return;
    const interval = setInterval(() => clientsApi.scrollNext(), 3000);
    return () => clearInterval(interval);
  }, [clientsApi]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-[#333333] to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] transform translate-x-1/3 -translate-y-1/4">
            <div className="w-full h-full bg-[#F58220]/20 transform rotate-45" />
          </div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] transform -translate-x-1/3 translate-y-1/4">
            <div className="w-full h-full bg-[#FFC78E]/20 transform -rotate-45" />
          </div>
          <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-[#FF7F50]/30 rounded-full" />
          <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-[#F58220]/20 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Trusted By Leading Organizations
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Our client portfolio spans across various industries, with a strong focus on freight forwarding and logistics companies who trust us with their business operations.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F58220]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFC78E]/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 text-gray-800">Our Clients</h2>
          <div className="max-w-6xl mx-auto">
            <Carousel setApi={setClientsApi} opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {clientLogos.map((client, index) => (
                  <CarouselItem key={index} className={`${isMobile ? 'basis-1/2' : 'basis-1/4'} p-2`}>
                    <div className="rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center h-full transform hover:-translate-y-1 border border-gray-100 bg-slate-200">
                      <img src={client.logo} alt={client.name} className="h-16 w-auto mb-4 opacity-80 hover:opacity-100 transition-opacity" />
                      <h3 className="font-heading font-bold text-lg text-center text-gray-800">{client.name}</h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-2">
                <CarouselPrevious className="relative static translate-y-0 left-0" />
                <CarouselNext className="relative static translate-y-0 right-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <GlobalImpact />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 text-gray-800">What Our Clients Say</h2>
          <div className="max-w-5xl mx-auto">
            <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {testimonials.map((t, index) => (
                  <CarouselItem key={index} className={isMobile ? "basis-full" : "basis-1/2"}>
                    <div className="p-4">
                      <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                        <CardContent className="p-0">
                          <div className="bg-gradient-to-br from-[#F58220]/10 to-white p-8 h-full flex flex-col relative">
                            <div className="mb-6">
                              <p className="font-heading font-bold text-lg text-gray-800">{t.author}</p>
                              <p className="text-[#F58220]">{t.position}</p>
                              <p className="text-gray-600 text-sm">{t.company}</p>
                            </div>
                            <div className="text-6xl text-[#F58220]/20 absolute top-4 right-4">"</div>
                            <blockquote className="text-gray-700 italic mb-6 relative z-10 flex-grow">
                              {t.quote}
                            </blockquote>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-2">
                <CarouselPrevious className="relative static translate-y-0 left-0" />
                <CarouselNext className="relative static translate-y-0 right-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-[#2C2C2C] to-[#444444] text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] transform translate-x-1/3 -translate-y-1/4">
            <div className="w-full h-full bg-[#F58220]/30 transform rotate-45" />
          </div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] transform -translate-x-1/3 translate-y-1/4">
            <div className="w-full h-full bg-[#FFC78E]/30 transform -rotate-45" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Ready to Join Our Client List?</h2>
            <p className="text-lg mb-8 text-gray-300">Let us show you how we can transform your operations and help your business grow.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" className="border-white/30 hover:border-white/50 text-slate-950 bg-slate-50">
                <Link to="/services">Learn More</Link>
              </Button>
              <Button className="bg-[#F58220] hover:bg-[#F58220]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
