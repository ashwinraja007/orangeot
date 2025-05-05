
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Calendar, Briefcase, MapPin, Globe, Mail, Phone, Linkedin, Twitter, ArrowRight, Trophy, Target, Ship, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Founders = () => {
  const achievements = ["35+ years of industry experience", "Pioneered specialized back-office services for freight forwarding", "Expanded operations across multiple global locations", "Led digital transformation initiatives in logistics sector"];
  
  const milestones = [
    { year: "1991", event: "Started professional journey in the courier industry" },
    { year: "1990s-2000s", event: "Advanced into logistics and freight forwarding sector" },
    { year: "2012", event: "Founded Orange Office Technologies Pvt Ltd" },
    { year: "Present", event: "Leading global expansion and digital transformation initiatives" }
  ];
  
  const expertises = ["Back-office operations", "Supply chain management", "Digital transformation", "Global logistics", "Strategic partnerships"];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Banner */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/80 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=2000&h=1000" 
            alt="Leadership" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 mb-6 animate-fade-in text-sm font-medium backdrop-blur-sm">
              <Star className="w-4 h-4" />
              <span>Leadership Excellence</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in leading-tight">
              Meet Our <span className="text-gradient bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text text-transparent">Visionary</span> Leaders
            </h1>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in delay-75">
              The driving forces behind Orange Office Technologies' innovation, growth, and industry-leading solutions
            </p>
          </div>
        </div>
        
        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#ffffff" preserveAspectRatio="none">
            <path d="M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,58.7C672,64,768,64,864,69.3C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      <main className="flex-grow bg-white">
        {/* Founder Profile - Enhanced with better visuals */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            
            <div className="max-w-6xl mx-auto">
              <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden rounded-3xl">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
                    {/* Image Column - 5/12 width */}
                    <div className="lg:col-span-5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-amber-400/10 mix-blend-multiply"></div>
                      <img 
                        src="/lovable-uploads/dcab3f93-8fa0-480c-b028-e34b3d358821.png" 
                        alt="Mr. Sudhir KU" 
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Floating badge */}
                      <div className="absolute top-6 left-6 bg-gradient-to-r from-orange-600 to-amber-500 text-white px-4 py-2 rounded-lg shadow-lg">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-5 w-5" />
                          <span className="font-medium">Founder & Director</span>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent h-32"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h2 className="text-3xl font-bold mb-1">Mr. Sudhir KU</h2>
                        <div className="flex items-center gap-2 text-gray-200 text-sm">
                          <MapPin className="h-4 w-4 text-orange-400" />
                          <span>Global Operations</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Column - 7/12 width */}
                    <div className="lg:col-span-7 p-8 lg:p-12 bg-gradient-to-br from-white to-gray-50">
                      <div className="prose max-w-none">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="h-1 w-14 bg-orange-500"></div>
                          <span className="text-orange-600 font-medium text-lg">Leadership Profile</span>
                        </div>
                        
                        <h2 className="text-3xl font-bold mb-6 text-gray-900">A Visionary Leader</h2>
                        
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Mr. Sudhir KU, the visionary Director of Orange Office Technologies Pvt Ltd, brings a rich professional 
                          journey spanning over 35 years. His career reflects a rare blend of perseverance, adaptability, and forward-thinking leadership.
                        </p>
                        
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          Starting his professional journey in 1991 in the courier industry, Mr. Sudhir gradually advanced into the 
                          logistics and freight forwarding sector. His career has taken him across various regions of India and extended globally 
                          to business hubs such as Dubai and Singapore.
                        </p>
                        
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          In 2012, recognizing a major gap in operational support for logistics companies, Mr. Sudhir founded 
                          Orange Office Technologies Pvt Ltd, pioneering specialized back-office services tailored 
                          for the freight forwarding industry.
                        </p>
                        
                        <h3 className="text-xl font-semibold mb-5 text-gray-800">Areas of Expertise</h3>
                        <div className="flex flex-wrap gap-3 mb-8">
                          {expertises.map((expertise, index) => (
                            <span key={index} className="bg-gradient-to-r from-orange-100 to-amber-50 text-orange-600 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                              {index === 0 && <Package size={16} />}
                              {index === 1 && <Truck size={16} />}
                              {index === 2 && <Globe size={16} />}
                              {index === 3 && <Ship size={16} />}
                              {index === 4 && <Target size={16} />}
                              {expertise}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Journey and Impact - Better organized with consistent visuals */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center mb-3">
                <div className="h-1 w-10 bg-orange-500 mx-2"></div>
                <span className="text-orange-600 font-medium text-sm uppercase tracking-wider">Professional Journey</span>
                <div className="h-1 w-10 bg-orange-500 mx-2"></div>
              </div>
              
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gradient bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Career Milestones & Achievements
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Decades of expertise and innovation transforming the logistics industry
              </p>
            </div>
            
            {/* Legacy and Impact - Card Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Key Achievements */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm hover:-translate-y-1 rounded-2xl bg-gradient-to-br from-amber-50 to-white">
                <CardContent className="p-8 md:p-10">
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-orange-400 mb-4 shadow-lg">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    
                    <h4 className="text-2xl font-bold text-gray-900">
                      Key Achievements
                    </h4>
                    
                    <ul className="space-y-4">
                      {achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-4">
                          <div className="min-w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                            <Star className="h-5 w-5 text-orange-500" />
                          </div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Career Milestones - Enhanced Timeline */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-blue-50 to-white hover:-translate-y-1 rounded-2xl">
                <CardContent className="p-8 md:p-10">
                  <div className="space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mb-4 shadow-lg">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                    
                    <h4 className="text-2xl font-bold text-gray-900">
                      Career Timeline
                    </h4>
                    
                    <div className="relative border-l-2 border-blue-200 pl-8 space-y-8 mt-8">
                      {milestones.map((milestone, i) => (
                        <div key={i} className="relative">
                          <div className="absolute -left-[40px] w-8 h-8 rounded-full bg-white border-4 border-blue-400 flex items-center justify-center shadow-md">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          
                          <div>
                            <div className="bg-blue-100 rounded-xl px-4 py-2 text-blue-700 font-medium inline-block mb-2">
                              {milestone.year}
                            </div>
                            <p className="text-gray-700">{milestone.event}</p>
                          </div>
                        </div>
                      ))}
                      
                      {/* Connected line to indicate continuation */}
                      <div className="absolute bottom-0 left-[-1px] w-[2px] h-20 bg-gradient-to-b from-blue-200 to-transparent"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Legacy and Vision - Enhanced Card */}
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-amber-50 to-white mt-8 max-w-5xl mx-auto rounded-2xl">
              <CardContent className="p-8 md:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-400 mb-4 shadow-lg">
                      <Globe className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Legacy</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      His strategic foresight has expanded Orange Office Technologies into a global service provider, 
                      helping the company stay ahead in a highly competitive industry by embracing technology, automation, 
                      and digital transformation.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Today, under his guidance, Orange Office Technologies serves clients across the globe, empowering businesses 
                      with efficient, scalable, and reliable solutions.
                    </p>
                  </div>
                  
                  <div className="text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mb-4 shadow-lg">
                      <Target className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Vision</h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Mr. Sudhir envisions a future where logistics companies can focus on their core business growth while entrusting 
                      their operational complexities to specialized partners like Orange Office Technologies.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      His commitment to quality, innovation, and customer satisfaction continues to drive the company's strategic 
                      direction and expansion into new markets and services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl mb-6">Ready to Experience Our Expertise?</h2>
              <p className="text-gray-600 mb-8">
                Connect with our leadership team to discuss how we can help optimize your logistics operations
              </p>
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl shadow-lg">
                <Link to="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Founders;
