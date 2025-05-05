import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Calendar, Briefcase, MapPin, Globe, Mail, Phone, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Founders = () => {
  const achievements = ["35+ years of industry experience", "Pioneered specialized back-office services for freight forwarding", "Expanded operations across multiple global locations", "Led digital transformation initiatives in logistics sector"];
  const milestones = [{
    year: "1991",
    event: "Started professional journey in the courier industry"
  }, {
    year: "1990s-2000s",
    event: "Advanced into logistics and freight forwarding sector"
  }, {
    year: "2012",
    event: "Founded Orange Office Technologies Pvt Ltd"
  }, {
    year: "Present",
    event: "Leading global expansion and digital transformation initiatives"
  }];
  const expertises = ["Back-office operations", "Supply chain management", "Digital transformation", "Global logistics", "Strategic partnerships"];
  return <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-orange-50">
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section - Improved with better spacing and visual elements */}
        <section className="py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-10">
              
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gradient bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent animate-fade-in">
                Meet Our Visionary Founder
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg animate-fade-in delay-75">
                The driving force behind Orange Office Technologies' innovation and success
              </p>
            </div>

            {/* Founder Profile Card - Enhanced with better visuals */}
            <div className="max-w-5xl mx-auto">
              <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-white rounded-3xl animate-fade-in delay-100">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image Section */}
                    <div className="h-full relative overflow-hidden">
                      <img src="/lovable-uploads/dcab3f93-8fa0-480c-b028-e34b3d358821.png" alt="Mr. Sudhir KU" className="w-full h-full object-cover object-center" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent my-px"></div>
                      <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white">
                        <h3 className="text-3xl font-bold mb-1">Mr. Sudhir KU</h3>
                        <p className="text-white/90 text-xl">Director </p>
                        
                        {/* Social Links */}
                        
                      </div>
                    </div>
                    
                    {/* Content Section - Improved with better spacing and organization */}
                    <div className="p-6 md:p-8 bg-gradient-to-br from-white to-orange-50/30">
                      <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">A Visionary Leader</h2>
                        <p className="text-gray-700 mb-4">
                          Mr. Sudhir KU, the visionary Director of Orange Office Technologies Pvt Ltd, brings a rich professional 
                          journey spanning over 35 years. His career reflects a rare blend of perseverance, adaptability, and forward-thinking leadership.
                        </p>
                        <p className="text-gray-700 mb-4">
                          Starting his professional journey in 1991 in the courier industry, Mr. Sudhir gradually advanced into the 
                          logistics and freight forwarding sector. His career has taken him across various regions of India and extended globally 
                          to business hubs such as Dubai and Singapore.
                        </p>
                        <p className="text-gray-700 mb-6">
                          In 2012, recognizing a major gap in operational support for logistics companies, Mr. Sudhir founded 
                          Orange Office Technologies Pvt Ltd, pioneering specialized back-office services tailored 
                          for the freight forwarding industry.
                        </p>
                        
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Areas of Expertise</h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {expertises.map((expertise, index) => <span key={index} className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                              {expertise}
                            </span>)}
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
        <section className="py-12 md:py-16 bg-white relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gradient bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
                Professional Journey & Impact
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Decades of expertise and innovation transforming the logistics industry
              </p>
            </div>
            
            {/* Legacy and Impact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              {/* Key Achievements */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm hover:-translate-y-1 rounded-2xl bg-slate-100">
                <CardContent className="p-6 md:p-8 bg-slate-100">
                  <div className="space-y-4 md:space-y-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-amber-500 to-orange-400 mb-4 shadow-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {achievements.map((achievement, i) => <li key={i} className="flex items-center gap-3">
                          <div className="min-w-6 min-h-6 rounded-full bg-amber-100 flex items-center justify-center">
                            <Star className="h-4 w-4 text-amber-500" />
                          </div>
                          <span className="text-gray-700">{achievement}</span>
                        </li>)}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Career Milestones */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white/80 backdrop-blur-sm hover:-translate-y-1 rounded-2xl">
                <CardContent className="p-6 md:p-8 bg-slate-100">
                  <div className="space-y-4 md:space-y-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 mb-4 shadow-lg">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">
                      Career Milestones
                    </h4>
                    <div className="relative border-l-2 border-gray-200 pl-6 space-y-6">
                      {milestones.map((milestone, i) => <div key={i} className="relative">
                          <div className="absolute -left-[30px] w-6 h-6 rounded-full bg-white border-2 border-orange-400 flex items-center justify-center">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          </div>
                          <div>
                            <div className="bg-orange-100 rounded-full px-3 py-1 text-sm text-orange-500 font-medium inline-block mb-2">
                              {milestone.year}
                            </div>
                            <p className="text-gray-700">{milestone.event}</p>
                          </div>
                        </div>)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Legacy and Vision */}
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-amber-50 to-white mt-8 max-w-5xl mx-auto rounded-2xl">
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Legacy</h3>
                    <p className="text-gray-700 mb-4">
                      His strategic foresight has expanded Orange Office Technologies into a global service provider, 
                      helping the company stay ahead in a highly competitive industry by embracing technology, automation, 
                      and digital transformation.
                    </p>
                    <p className="text-gray-700">
                      Today, under his guidance, Orange Office Technologies serves clients across the globe, empowering businesses 
                      with efficient, scalable, and reliable solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">Vision</h3>
                    <p className="text-gray-700 mb-4">
                      Mr. Sudhir envisions a future where logistics companies can focus on their core business growth while entrusting 
                      their operational complexities to specialized partners like Orange Office Technologies.
                    </p>
                    <p className="text-gray-700">
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
        
      </main>
      <Footer />
    </div>;
};
export default Founders;