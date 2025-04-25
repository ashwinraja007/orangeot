
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star } from "lucide-react";

const Founders = () => {
  const founders = [
    {
      name: "John Smith",
      position: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      description: "With over 15 years of experience in logistics and technology, John leads our vision for transforming the industry.",
      achievements: ["Forbes 30 Under 30", "Innovation Award 2023"]
    },
    {
      name: "Sarah Johnson",
      position: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80",
      description: "A tech visionary with expertise in building scalable solutions for the logistics sector.",
      achievements: ["Tech Leader of the Year 2022", "Women in Tech Award"]
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
                Our Founders
              </h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Meet the visionaries behind Orange Office Technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {founders.map((founder, index) => (
                <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white group hover:-translate-y-2">
                  <CardContent className="p-0">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                        <p className="text-white/90">{founder.position}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-6">{founder.description}</p>
                      <div className="space-y-3">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Award className="h-5 w-5 text-[#ff6a00]" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {founder.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <Star className="h-4 w-4 text-[#ff6a00]" />
                              <span className="text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Founders;
