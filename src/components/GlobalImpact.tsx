
import { Card, CardContent } from "@/components/ui/card";
import { Globe, TrendingUp, Users, Building2, MapPin, HeartHandshake } from "lucide-react";

export const GlobalImpact = () => {
  const impactStats = [
    {
      icon: Globe,
      title: "Continental Presence",
      value: "3",
      description: "Continents with active operations"
    },
    {
      icon: TrendingUp,
      title: "Client Growth",
      value: "45%",
      description: "Average client business growth"
    },
    {
      icon: Users,
      title: "Professional Team",
      value: "75+",
      description: "Logistics specialists worldwide"
    },
    {
      icon: Building2,
      title: "Enterprise Clients",
      value: "50+",
      description: "Trusted partnerships worldwide"
    },
    {
      icon: MapPin,
      title: "Global Network",
      value: "25+",
      description: "Countries with active service"
    },
    {
      icon: HeartHandshake,
      title: "Client Satisfaction",
      value: "98%",
      description: "Retention rate over 5 years"
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-200/5 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-200/5 blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            Our Global Impact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming logistics operations across continents with innovative solutions and exceptional service
          </p>
        </div>
        
        {/* World Map Background with Stats */}
        <div className="relative">
          <div className="mx-auto mb-12 max-w-4xl opacity-20 hidden lg:block">
            <img 
              src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?auto=format&fit=crop&q=80&w=1200" 
              alt="World Map" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 relative -mt-0 lg:-mt-96">
            {impactStats.map((stat, index) => (
              <Card 
                key={index} 
                className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white/90 backdrop-blur-sm animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center
                      ${index % 3 === 0 ? 'bg-blue-100 text-blue-600' : 
                        index % 3 === 1 ? 'bg-orange-100 text-orange-600' : 
                        'bg-green-100 text-green-600'}
                    `}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {stat.title}
                  </h3>
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-gray-600">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
