
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Calendar, Briefcase, MapPin, Globe } from "lucide-react";

const Founders = () => {
  const achievements = [
    "35+ years of industry experience",
    "Pioneered specialized back-office services for freight forwarding",
    "Expanded operations across multiple global locations",
    "Led digital transformation initiatives in logistics sector"
  ];

  const milestones = [
    {
      year: "1991",
      event: "Started professional journey in the courier industry"
    },
    {
      year: "1990s-2000s",
      event: "Advanced into logistics and freight forwarding sector"
    },
    {
      year: "2012",
      event: "Founded Orange Office Technologies Pvt Ltd"
    },
    {
      year: "Present",
      event: "Leading global expansion and digital transformation initiatives"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text text-[#ff6a00]">
                Our Leadership
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Meet the visionary behind Orange Office Technologies
              </p>
            </div>

            {/* Founder Profile */}
            <div className="max-w-6xl mx-auto">
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Image Section */}
                    <div className="h-full relative overflow-hidden">
                      <img
                        src="/lovable-uploads/dcab3f93-8fa0-480c-b028-e34b3d358821.png"
                        alt="Mr. Sudhir KU"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-3xl font-bold mb-1">Mr. Sudhir KU</h3>
                        <p className="text-white/90 text-xl">Director, Orange Office Technologies Pvt Ltd</p>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8">
                      <div className="prose max-w-none">
                        <h2 className="text-2xl font-bold mb-4 text-gray-900">A Visionary Leader</h2>
                        <p className="text-gray-600 mb-4">
                          Mr. Sudhir KU, the visionary Director of Orange Office Technologies Pvt Ltd, brings with him a rich professional 
                          journey that spans over 35 years, his career reflects a rare blend of perseverance, adaptability, and forward-thinking leadership.
                        </p>
                        <p className="text-gray-600 mb-4">
                          Starting his professional journey in 1991, Mr. Sudhir began in the courier industry and gradually advanced into the 
                          logistics and freight forwarding sector. His career has taken him across various regions of India and extended globally 
                          to business hubs such as Dubai and Singapore. This diverse exposure enabled him to develop a deep understanding of global 
                          supply chain operations and the unique challenges of international logistics.
                        </p>
                        <p className="text-gray-600 mb-4">
                          In 2012, recognizing a major gap in operational support for logistics companies, Mr. Sudhir laid the foundation of 
                          Orange Office Technologies Pvt Ltd, one of the pioneering companies to introduce specialized back-office services tailored 
                          for the freight forwarding industry. What began as a focused support center has since evolved into a multi-service organization 
                          offering end-to-end solutions across Freight Forwarding Back-office Services, IT Support, Digital Marketing, and Digital 
                          Sales Enablement.
                        </p>
                        <p className="text-gray-600">
                          Mr. Sudhir is known for his practical approach to leadership, nurturing a people-first culture while driving operational 
                          excellence. His deep domain expertise, global perspective, and commitment to innovation continue to shape the company's 
                          journey toward becoming a preferred partner for logistics businesses worldwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Legacy and Impact */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Key Achievements */}
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold flex items-center gap-2 text-gray-900">
                        <Award className="h-6 w-6 text-[#ff6a00]" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-4">
                        {achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <Star className="h-5 w-5 text-[#ff6a00]" />
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Career Milestones */}
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <h4 className="text-xl font-semibold flex items-center gap-2 text-gray-900">
                        <Calendar className="h-6 w-6 text-[#ff6a00]" />
                        Career Milestones
                      </h4>
                      <ul className="space-y-4">
                        {milestones.map((milestone, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="min-w-[60px] text-center bg-orange-100 rounded-full px-2 py-1 text-sm text-[#ff6a00] font-medium">
                              {milestone.year}
                            </div>
                            <span className="text-gray-600 pt-1">{milestone.event}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Legacy and Vision */}
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white mt-8">
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900">Legacy and Vision</h4>
                  <p className="text-gray-600 mb-4">
                    His strategic foresight has not only expanded Orange Office Technologies into a global service provider 
                    but also helped the company stay ahead in a highly competitive industry by embracing technology, automation, 
                    and digital transformation.
                  </p>
                  <p className="text-gray-600">
                    Today, under his guidance, Orange Office Technologies serves clients across the globe, empowering businesses 
                    with efficient, scalable, and reliable solutions—all while staying rooted in values of integrity, quality, and 
                    continuous improvement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Founders;
