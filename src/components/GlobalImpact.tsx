import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Smile, ThumbsUp, CheckCircle } from "lucide-react";

export const GlobalImpact = () => {
  const impactStats = [
    {
      icon: Briefcase,
      title: "Years of Experience",
      value: "20+",
      description: ""
    },
    {
      icon: Smile,
      title: "Happy Employees",
      value: "150+",
      description: ""
    },
    {
      icon: ThumbsUp,
      title: "Satisfied Clients",
      value: "100+",
      description: ""
    },
    {
      icon: CheckCircle,
      title: "Completed Projects",
      value: "1000+",
      description: ""
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            Our Global Impact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transforming logistics operations across continents with innovative solutions and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {impactStats.map((stat, index) => (
            <Card
              key={index}
              className="border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group bg-white/90 backdrop-blur-sm animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
