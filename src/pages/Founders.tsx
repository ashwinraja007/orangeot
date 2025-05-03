
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Award, Calendar, Mail, MapPin, Phone, Star, Linkedin, FileText, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Founders = () => {
  const leadership = [
    {
      name: "Mr. Sudhir KU",
      position: "CEO & Founder",
      image: "/lovable-uploads/dcab3f93-8fa0-480c-b028-e34b3d358821.png",
      bio: "With over 35 years of experience in the logistics industry, Mr. Sudhir KU has pioneered specialized back-office services that have transformed how freight forwarding companies operate globally. His vision has guided Orange Office Technologies to become a leading KPO service provider, serving clients across multiple continents with innovative solutions tailored to the logistics industry.",
      achievements: [
        "Pioneer in logistics KPO services",
        "35+ years industry expertise",
        "Expanded operations to 30+ countries",
        "Built partnerships with 50+ global freight forwarders"
      ],
      contact: {
        email: "sudhir@orangeoffice.com",
        phone: "+91 98765 43210",
        linkedin: "linkedin.com/in/sudhirku"
      },
      quote: "Innovation in logistics isn't just about technology—it's about understanding the human elements that drive global trade."
    },
    {
      name: "Ms. Anita Sharma",
      position: "COO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
      bio: "Ms. Anita Sharma brings 20+ years of operational excellence to Orange Office Technologies. With her background in supply chain management and digital transformation, she has been instrumental in streamlining our service delivery processes and ensuring consistent quality across all our offerings.",
      achievements: [
        "Implemented ISO 9001:2015 quality standards",
        "Led digital transformation initiatives",
        "Reduced operational costs by 30%",
        "Established 24/7 customer support operations"
      ],
      contact: {
        email: "anita@orangeoffice.com",
        phone: "+91 98765 43211",
        linkedin: "linkedin.com/in/anitasharma"
      },
      quote: "Operational excellence is achieved through constant refinement and an unwavering commitment to client satisfaction."
    }
  ];

  const milestones = [
    { year: "2008", title: "Company Founded", description: "Orange Office Technologies was established with a vision to transform logistics back-office operations." },
    { year: "2012", title: "Global Expansion", description: "Expanded services to international markets, establishing presence in Europe and Asia." },
    { year: "2015", title: "Digital Innovation", description: "Launched proprietary software solutions for freight documentation and customer service management." },
    { year: "2018", title: "ISO Certification", description: "Achieved ISO 9001:2015 certification for quality management systems." },
    { year: "2021", title: "Cloud Transformation", description: "Migrated all services to cloud infrastructure, enhancing scalability and security." },
    { year: "2023", title: "AI Integration", description: "Incorporated AI and machine learning capabilities into our service offerings." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <GradientBackground className="pt-32 pb-20" variant="primary" intensity="medium" animated={true}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              Meet Our Leadership Team
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              The visionaries behind Orange Office Technologies who have revolutionized how logistics companies operate
            </p>
          </div>
        </div>
      </GradientBackground>

      {/* Founders Grid */}
      <section className="py-20 -mt-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {leadership.map((leader, index) => (
              <Card key={index} className="mb-12 border-none shadow-xl hover:shadow-2xl transition-duration-300 overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                    {/* Image Section - 5 columns on desktop */}
                    <div className="md:col-span-5 relative">
                      <div className="w-full h-full min-h-[300px] md:min-h-full relative">
                        <img 
                          src={leader.image} 
                          alt={leader.name} 
                          className="w-full h-full object-cover object-center absolute inset-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:bg-gradient-to-r"></div>
                        <div className="absolute bottom-0 left-0 p-6 text-white md:hidden">
                          <h2 className="text-2xl font-bold mb-1">{leader.name}</h2>
                          <p className="text-white/90">{leader.position}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section - 7 columns on desktop */}
                    <div className="md:col-span-7 p-6 md:p-8 lg:p-10">
                      <div className="hidden md:block mb-6">
                        <h2 className="text-3xl font-bold mb-1 text-gray-900">{leader.name}</h2>
                        <p className="text-orange-600 font-medium">{leader.position}</p>
                      </div>
                      
                      <div className="mb-6">
                        <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-lg font-semibold mb-3 text-gray-800">Key Achievements</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {leader.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start">
                              <Star className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-8 p-6 bg-orange-50 rounded-lg border border-orange-100">
                        <div className="flex items-start">
                          <Quote className="h-8 w-8 text-orange-400 mr-3 flex-shrink-0" />
                          <p className="text-gray-700 italic">{leader.quote}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-800">Contact Information</h3>
                        <div className="grid grid-cols-1 gap-3">
                          <div className="flex items-center">
                            <Mail className="h-5 w-5 text-gray-500 mr-3" />
                            <span>{leader.contact.email}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-5 w-5 text-gray-500 mr-3" />
                            <span>{leader.contact.phone}</span>
                          </div>
                          <div className="flex items-center">
                            <Linkedin className="h-5 w-5 text-gray-500 mr-3" />
                            <span>{leader.contact.linkedin}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Journey Timeline */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Our Company Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Milestones that have shaped our growth and innovation in the logistics industry
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[21px] md:left-1/2 ml-[2px] md:ml-0 w-0.5 h-full bg-orange-200 transform md:-translate-x-1/2"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className={`absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-white border-4 ${index % 2 === 0 ? 'border-orange-500' : 'border-blue-500'} transform md:-translate-x-1/2 mt-1.5`}></div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right md:ml-auto' : 'md:pl-16'} animate-on-scroll`} style={{ animationDelay: `${index * 150}ms` }}>
                      <div className={`p-6 rounded-lg shadow-lg bg-white ${index % 2 === 0 ? 'border-l-4 border-orange-500' : 'border-l-4 border-blue-500'}`}>
                        <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium mb-3 ${index % 2 === 0 ? 'bg-orange-500' : 'bg-blue-500'}`}>
                          <Calendar className="inline-block h-4 w-4 mr-1" />
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GradientBackground className="py-16" variant="accent" intensity="strong" animated={true}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
              Join Our Journey
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Be a part of our vision to revolutionize logistics operations globally
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="shadow-lg" asChild>
                <Link to="/careers" className="flex items-center gap-2">
                  Explore Careers
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </GradientBackground>

      <Footer />
    </div>
  );
};

export default Founders;
