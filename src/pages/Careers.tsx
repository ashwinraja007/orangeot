
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Briefcase, Users, Clock, MapPin, GraduationCap, Coffee, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Careers = () => {
  const jobs = [
    {
      title: "Full Stack Developer",
      location: "Chennai (Anna Nagar)",
      type: "Full Time",
      experience: "3+ years",
      description: "We're looking for an experienced Full Stack Developer to join our tech team and help build innovative solutions for the logistics industry.",
      skills: ["React.js", "Node.js", "TypeScript", "MongoDB", "AWS"]
    }, 
    {
      title: "Ocean Freight- Export Customer Service",
      location: "Chennai",
      type: "Full Time",
      experience: "5+ years",
      description: "Join our customer service team to manage export documentation, client communication, and ensure smooth operations for our ocean freight services.",
      skills: ["Logistics Knowledge", "Customer Service", "Documentation", "Communication", "Problem Solving"]
    },
    {
      title: "Digital Marketing Specialist",
      location: "Kochi",
      type: "Full Time",
      experience: "2+ years",
      description: "Help grow our online presence through SEO, content marketing, and social media campaigns tailored for B2B logistics services.",
      skills: ["SEO", "Content Marketing", "Social Media", "Analytics", "B2B Marketing"]
    }
  ];
  
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with Royal Styling */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#9b87f5]/20 to-[#D6BCFA]/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#9b87f5]/20 text-[#6E59A5] mb-6 animate-fade-in text-sm font-medium px-4 py-2">
              <Sparkles className="h-4 w-4" />
              <span>Join Our Royal Team</span>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 animate-fade-in text-gradient bg-gradient-to-r from-[#7E69AB] via-[#9b87f5] to-[#6E59A5] bg-clip-text text-transparent">
              Build Your Career With Us
            </h1>
            <p className="text-xl text-[#403E43] mb-8 animate-fade-in">
              Be part of a team that's reshaping the future of logistics technology with royal excellence
            </p>
            <div className="flex justify-center">
              <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white w-full max-w-4xl">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&h=400&q=80" 
                  alt="Team working together" 
                  className="rounded-xl w-full object-cover h-64 animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#6E59A5]/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us - Enhanced with Royal Theme */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading font-bold text-3xl mb-4 text-gradient bg-gradient-to-r from-[#7E69AB] to-[#9b87f5] bg-clip-text text-transparent">Why Join Orange Office Technologies?</h2>
            <p className="text-[#403E43] max-w-2xl mx-auto">
              We offer a royal environment where your talents are valued and your career can flourish
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#F8F7FF] to-[#EFE9FF] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-[#D6BCFA]/30">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#D6BCFA]/50 rounded-full mb-6">
                <Users className="h-8 w-8 text-[#6E59A5]" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#403E43]">Royal Treatment</h3>
              <p className="text-[#403E43]">Work alongside talented professionals who are treated with respect and dignity</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#F8F7FF] to-[#EFE9FF] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-[#D6BCFA]/30">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#D6BCFA]/50 rounded-full mb-6">
                <GraduationCap className="h-8 w-8 text-[#6E59A5]" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#403E43]">Growth & Learning</h3>
              <p className="text-[#403E43]">Continuous professional development and clear advancement paths</p>
            </div>
            
            <div className="bg-gradient-to-br from-[#F8F7FF] to-[#EFE9FF] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center border border-[#D6BCFA]/30">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-[#D6BCFA]/50 rounded-full mb-6">
                <Coffee className="h-8 w-8 text-[#6E59A5]" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-[#403E43]">Premium Benefits</h3>
              <p className="text-[#403E43]">Exceptional benefits package and work-life balance for your wellbeing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Current Openings with Royal Theme */}
      <section className="py-16 bg-[#F8F7FF]">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl mb-6 text-center text-gradient bg-gradient-to-r from-[#7E69AB] to-[#9b87f5] bg-clip-text text-transparent">Current Openings</h2>
          <p className="text-center text-[#403E43] mb-12 max-w-2xl mx-auto">
            Explore our open positions and find where your skills and passion can make an impact
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {jobs.map((job, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none animate-fade-in bg-white overflow-hidden" style={{
                animationDelay: `${index * 100}ms`
              }}>
                <CardContent className="p-0">
                  <div className="h-2 bg-gradient-to-r from-[#7E69AB] to-[#9b87f5]"></div>
                  <div className="p-8 space-y-6">
                    <div className="flex justify-between items-start">
                      <h3 className="font-heading font-bold text-xl group-hover:text-[#6E59A5] transition-colors text-[#1A1F2C]">
                        {job.title}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#D6BCFA] text-[#6E59A5]">
                        New
                      </span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-[#403E43]">
                        <MapPin className="h-4 w-4 text-[#6E59A5]" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#403E43]">
                        <Clock className="h-4 w-4 text-[#6E59A5]" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-[#403E43]">
                        <Users className="h-4 w-4 text-[#6E59A5]" />
                        <span>{job.experience} experience</span>
                      </div>
                    </div>

                    <p className="text-[#403E43] border-t border-[#D6BCFA]/20 pt-4">{job.description}</p>
                    
                    <div>
                      <p className="text-sm font-medium text-[#403E43] mb-2">Required skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, i) => (
                          <span key={i} className="bg-[#F8F7FF] px-2 py-1 rounded-md text-xs text-[#6E59A5] border border-[#D6BCFA]/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full mt-2 bg-gradient-to-r from-[#7E69AB] to-[#9b87f5] text-white hover:from-[#6E59A5] hover:to-[#7E69AB]" asChild>
                      <Link to="/contact">Apply Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section with Royal Theme */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-3xl mb-12 text-center text-gradient bg-gradient-to-r from-[#7E69AB] to-[#9b87f5] bg-clip-text text-transparent">Our Royal Selection Process</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-[#D6BCFA]"></div>
              
              {/* Timeline items */}
              <div className="space-y-12">
                {[
                  {
                    step: "Application Review",
                    description: "We carefully review your resume and application to match your skills with our requirements.",
                    icon: BadgeCheck,
                    color: "bg-[#7E69AB]"
                  },
                  {
                    step: "Initial Interview",
                    description: "A conversation to get to know you better and discuss your experience and expectations.",
                    icon: Users,
                    color: "bg-[#9b87f5]"
                  },
                  {
                    step: "Technical Assessment",
                    description: "A role-specific evaluation to understand your technical capabilities and problem-solving approach.",
                    icon: Briefcase,
                    color: "bg-[#6E59A5]"
                  },
                  {
                    step: "Final Interview",
                    description: "Meet with team leads to discuss how you'll contribute to our goals and culture.",
                    icon: Sparkles,
                    color: "bg-[#D6BCFA]"
                  },
                  {
                    step: "Welcome Aboard",
                    description: "Receive your offer and join our team of logistics technology innovators!",
                    icon: BadgeCheck,
                    color: "bg-[#9F9EA1]"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex flex-col lg:flex-row gap-6 lg:gap-0">
                    {/* Timeline dot */}
                    <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 w-10 h-10 rounded-full border-4 border-white shadow-md z-10 flex items-center justify-center bg-white">
                      <div className={`w-6 h-6 rounded-full ${item.color}`}></div>
                    </div>
                    
                    {/* Content box */}
                    <div className={`lg:w-1/2 ml-16 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:ml-auto'}`}>
                      <div className="bg-[#F8F7FF] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-[#D6BCFA]/30">
                        <div className="flex items-center gap-3 mb-3 lg:justify-start">
                          <item.icon className={`h-5 w-5 text-white p-1 rounded-full ${item.color}`} />
                          <h3 className="font-bold text-lg text-[#403E43]">{item.step}</h3>
                        </div>
                        <p className="text-[#403E43]">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Royal Theme */}
      <section className="py-16 bg-gradient-to-r from-[#6E59A5] to-[#9b87f5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Royal Journey With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our prestigious team and be part of creating innovative solutions for the logistics industry
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#6E59A5]">
            <Link to="/contact">View All Openings</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};

export default Careers;
