import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Globe, Home, MapPin, Target, Users } from "lucide-react";
import { GradientBackground } from "@/components/GradientBackground";
import { AboutOfficeImages } from "@/components/about/AboutOfficeImages";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Client-Centricity",
      description: "We prioritize our clients' needs, delivering tailored solutions that drive their success."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "We embrace diversity and operate with a global mindset, serving clients worldwide."
    },
    {
      icon: Home,
      title: "Innovation",
      description: "We foster a culture of innovation, continuously seeking new ways to improve and excel."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "We believe in the power of collaboration, working together to achieve common goals."
    }
  ];

  const milestones = [
    {
      year: 2012,
      event: "Founded Orange Office Technologies with a vision to transform logistics operations."
    },
    {
      year: 2015,
      event: "Expanded service offerings to include digital marketing and IT solutions."
    },
    {
      year: 2018,
      event: "Reached 100+ clients globally, establishing a strong international presence."
    },
    {
      year: 2020,
      event: "Launched a proprietary software platform to streamline back-office processes."
    },
    {
      year: 2023,
      event: "Celebrated a decade of innovation and client success in the logistics industry."
    }
  ];

  const teamMembers = [
    {
      name: "Sudhir KU",
      position: "Director & Founder",
      image: "/lovable-uploads/dcab3f93-8fa0-480c-b028-e34b3d358821.png",
      bio: "Visionary leader with 35+ years of experience in logistics and technology."
    },
    {
      name: "Anil Kumar",
      position: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200",
      bio: "Expert in software development and IT infrastructure, driving our technological advancements."
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200",
      bio: "Experienced operations manager ensuring seamless service delivery and client satisfaction."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section with enhanced background */}
      <GradientBackground 
        className="pt-32 pb-20 min-h-[50vh] flex items-center" 
        variant="primary" 
        intensity="medium"
        animated={true}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6">
              About <span className="text-gradient bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Orange Office Technologies</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Pioneering specialized back-office solutions for the logistics and freight forwarding industry since 2012
            </p>
          </div>
        </div>
      </GradientBackground>
      
      {/* Office Building Images Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Facilities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Modern workspaces designed to foster innovation and excellence in service delivery
              </p>
            </div>
            
            <AboutOfficeImages />
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Story</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From a humble beginning to a global leader in logistics KPO services
              </p>
            </div>
            
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Founded in 2012, Orange Office Technologies started as a small team of logistics experts with a shared vision: to revolutionize back-office operations for freight forwarders.
              </p>
              <p>
                We recognized the challenges faced by logistics companies in managing complex documentation, sales support, and customer service. With a commitment to innovation, we set out to create comprehensive solutions that would streamline processes and drive growth.
              </p>
              <p>
                Over the years, we have expanded our service offerings, embraced cutting-edge technologies, and built a global presence. Today, we are proud to be a trusted partner to leading logistics companies worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Guiding principles that shape our culture and drive our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4 mx-auto">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Milestones Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Key Milestones</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Significant moments in our journey of growth and innovation
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 -ml-0.5"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-1/2 text-right pr-4">
                    <div className="font-bold text-xl text-gray-800">{milestone.year}</div>
                  </div>
                  <div className="w-1/2 text-left pl-4">
                    <div className="text-gray-700">{milestone.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals driving our success and delivering exceptional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative overflow-hidden rounded-full h-32 w-32 mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2 text-center">{member.name}</h3>
                  <p className="text-gray-600 text-center mb-2">{member.position}</p>
                  <p className="text-gray-700 text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">Join Our Journey</h2>
            <p className="text-white/90 text-lg mb-8 max-w-3xl mx-auto">
              Partner with Orange Office Technologies and experience the difference our specialized services can make for your logistics operations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10" asChild>
                <Link to="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
