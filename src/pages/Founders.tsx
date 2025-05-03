
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Linkedin, Facebook, Instagram, ChevronDown } from "lucide-react";
import { GradientBackground } from "@/components/GradientBackground";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Founders = () => {
  const [expandedBio, setExpandedBio] = useState<string | null>(null);
  
  const toggleBio = (id: string) => {
    if (expandedBio === id) {
      setExpandedBio(null);
    } else {
      setExpandedBio(id);
    }
  };

  // Updated founder data with enhanced bios and better images
  const founders = [
    {
      id: "sudhir",
      name: "Mr. Sudhir KU",
      position: "CEO & Founder",
      image: "/lovable-uploads/dcab3f93-8fa0-480c-b028-e34b3d358821.png",
      shortBio: "With over 35 years of industry experience, Mr. Sudhir KU has pioneered specialized back-office services for the logistics industry.",
      fullBio: "Mr. Sudhir KU brings over three decades of unparalleled expertise in the logistics and freight forwarding industry. After graduating with honors in International Business, he began his career with one of India's largest shipping companies, quickly rising through the ranks due to his innovative approach to operations management. In 2005, he founded Orange Office Technologies with a vision to transform how freight forwarding companies manage their back-office operations. His leadership philosophy centers on continuous innovation, client-centric service, and employee development. Under his guidance, the company has expanded to multiple countries, serving over 200 clients globally. Mr. Sudhir is also an active member of several industry associations and regularly contributes to thought leadership in the logistics sector.",
      expertise: ["Strategic Leadership", "Operations Management", "Global Logistics", "Business Development", "Industry Innovation"],
      accolades: ["Logistics Innovator Award 2018", "Entrepreneur of the Year 2020", "Industry Leadership Excellence 2022"],
      social: {
        linkedin: "#",
        email: "sudhir@orangeot.com",
        phone: "+91 98765 43210"
      },
      color: "from-orange-600 to-amber-500"
    },
    {
      id: "meera",
      name: "Mrs. Meera Rajesh",
      position: "COO & Co-Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=800&q=80",
      shortBio: "Mrs. Meera brings 25+ years of operational expertise and has been instrumental in developing our customer service excellence framework.",
      fullBio: "Mrs. Meera Rajesh serves as the Chief Operations Officer and is a founding member of Orange Office Technologies. With an MBA in Supply Chain Management and over 25 years in the logistics sector, she has spearheaded the development of our award-winning operational frameworks. Prior to co-founding Orange Office Technologies, she held leadership positions at several multinational logistics companies where she specialized in process optimization and quality management. Mrs. Meera has been pivotal in establishing our comprehensive training programs and quality assurance protocols that have become industry benchmarks. Her methodical approach to operations has resulted in consistent 98% client satisfaction ratings and operational efficiency improvements across all service lines. She is passionate about mentoring young professionals, particularly women in logistics, and leads our company's diversity initiatives.",
      expertise: ["Operations Excellence", "Process Optimization", "Quality Management", "Team Development", "Customer Experience"],
      accolades: ["Women in Logistics Leadership Award", "Operations Excellence Award", "Supply Chain Innovator"],
      social: {
        linkedin: "#",
        email: "meera@orangeot.com",
        phone: "+91 98765 43211"
      },
      color: "from-blue-600 to-sky-400"
    },
    {
      id: "ramesh",
      name: "Mr. Ramesh Kumar",
      position: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&h=800&q=80",
      shortBio: "Leading our technology initiatives, Mr. Ramesh brings cutting-edge solutions that have revolutionized logistics operations.",
      fullBio: "Mr. Ramesh Kumar joined Orange Office Technologies in 2010 and has transformed our technological capabilities as Chief Technology Officer. With a background in Computer Science and an MBA in Technology Management, he combines technical expertise with business acumen. Prior to joining our company, he worked with several tech giants, specializing in enterprise software solutions for the logistics industry. Under his leadership, our technology team has developed proprietary software solutions that have reduced processing times by 40% and improved data accuracy by 35%. Mr. Ramesh has led the successful implementation of our cloud migration strategy, ensuring 99.9% uptime for all critical systems while enhancing security protocols to exceed industry standards. He is passionate about emerging technologies and regularly leads workshops on AI and blockchain applications in logistics. His forward-thinking approach ensures our company remains at the forefront of technological innovation in the KPO sector.",
      expertise: ["Software Development", "Digital Transformation", "Cloud Architecture", "AI Integration", "Cybersecurity"],
      accolades: ["Tech Innovator Award", "Digital Transformation Leader", "CTO of the Year Finalist"],
      social: {
        linkedin: "#",
        email: "ramesh@orangeot.com",
        phone: "+91 98765 43212"
      },
      color: "from-emerald-600 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Header />
      
      {/* Hero Section */}
      <GradientBackground className="pt-28 pb-16" variant="primary" intensity="medium" animated={true}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-8 animate-fade-in bg-gradient-to-r from-gray-800 via-gray-600 to-gray-900 bg-clip-text text-transparent">
              Our Leadership Team
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-75 max-w-2xl mx-auto">
              Meet the visionaries behind Orange Office Technologies who drive our mission to transform logistics operations worldwide
            </p>
          </div>
        </div>
      </GradientBackground>
      
      {/* Leadership Profiles Section */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {founders.map((founder, index) => (
              <Card 
                key={founder.id}
                className="border-none rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-${index % 2 === 0 ? '3' : '3 lg:grid-flow-col-dense'}`}>
                    {/* Image Column */}
                    <div className={`lg:col-span-1 relative aspect-square lg:aspect-auto ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${founder.color} opacity-90 mix-blend-multiply`}></div>
                      <img 
                        src={founder.image} 
                        alt={founder.name} 
                        className="w-full h-full object-cover" 
                      />
                      {/* Decorative elements */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-white/30"></div>
                      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-white/30"></div>
                      
                      <div className="absolute bottom-8 left-8 text-white">
                        <div className="flex gap-3 mt-2">
                          {Object.keys(founder.social).map(platform => {
                            let Icon;
                            switch(platform) {
                              case 'linkedin': Icon = Linkedin; break;
                              case 'email': Icon = Mail; break;
                              case 'phone': Icon = Phone; break;
                              default: return null;
                            }
                            return (
                              <a 
                                key={platform} 
                                href={platform === 'email' ? `mailto:${founder.social[platform]}` : 
                                       platform === 'phone' ? `tel:${founder.social[platform]}` : 
                                       founder.social[platform]} 
                                className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                                aria-label={`${platform} for ${founder.name}`}
                              >
                                <Icon size={20} className="text-white" />
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Column */}
                    <div className={`lg:col-span-2 p-8 md:p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`h-1 w-12 bg-gradient-to-r ${founder.color}`}></div>
                        <span className={`text-${founder.color.split(' ')[0].split('-')[0]} font-medium`}>Leadership</span>
                      </div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">{founder.name}</h2>
                      <p className="text-xl text-gray-600 mb-6">{founder.position}</p>
                      
                      <div className={cn("transition-all duration-500 overflow-hidden", 
                        expandedBio === founder.id ? "max-h-[2000px] opacity-100" : "max-h-20 opacity-100"
                      )}>
                        <p className="text-gray-700 mb-6">
                          {expandedBio === founder.id ? founder.fullBio : founder.shortBio}
                        </p>
                        
                        {expandedBio === founder.id && (
                          <div className="space-y-6">
                            <div>
                              <h3 className="font-semibold text-gray-800 mb-3">Areas of Expertise</h3>
                              <div className="flex flex-wrap gap-2">
                                {founder.expertise.map((skill, i) => (
                                  <span key={i} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="font-semibold text-gray-800 mb-3">Accolades & Recognition</h3>
                              <ul className="list-disc list-inside space-y-1 text-gray-700">
                                {founder.accolades.map((accolade, i) => (
                                  <li key={i}>{accolade}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <button 
                        onClick={() => toggleBio(founder.id)}
                        className="flex items-center gap-1 text-primary font-medium mt-4 hover:text-primary/80 transition-colors"
                      >
                        {expandedBio === founder.id ? 'Read Less' : 'Read More'}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", 
                          expandedBio === founder.id ? "rotate-180" : "rotate-0"
                        )} />
                      </button>
                      
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Vision & Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Our Leadership Philosophy
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our leadership team in driving innovation and excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Client-Centric Focus",
                description: "We prioritize understanding and exceeding client expectations at every touchpoint, creating long-lasting partnerships built on trust.",
                icon: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500&q=80",
                color: "from-orange-500 to-amber-400"
              },
              {
                title: "Continuous Innovation",
                description: "We foster a culture of innovation, constantly exploring new technologies and methodologies to enhance our service offerings.",
                icon: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=800&h=500&q=80",
                color: "from-blue-500 to-cyan-400"
              },
              {
                title: "Team Excellence",
                description: "We invest in our people, creating an environment where talent thrives and every team member contributes to our collective success.",
                icon: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=500&q=80",
                color: "from-green-500 to-emerald-400"
              }
            ].map((value, index) => (
              <div key={index} className="group">
                <Card className="border-none rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={value.icon} 
                        alt={value.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-80 mix-blend-multiply`}></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl mb-3 text-gray-800">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <GradientBackground className="py-20" variant="accent" intensity="strong" animated={true}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-white">
              Join Our Growing Team
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence
            </p>
            <a 
              href="/careers" 
              className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Career Opportunities
            </a>
          </div>
        </div>
      </GradientBackground>

      <Footer />
    </div>
  );
};

export default Founders;
