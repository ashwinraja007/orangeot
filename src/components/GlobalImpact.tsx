
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Smile, ThumbsUp, CheckCircle } from "lucide-react";

export const GlobalImpact = () => {
  const impactStats = [
    {
      icon: Briefcase,
      title: "Years of Experience",
      value: "14+",
      description: ""
    }, 
    {
      icon: Smile,
      title: "Happy Employees",
      value: "200+",
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
      title: "Successful transactions per month",
      value: "10000+",
      description: ""
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 text-gray-800">Our Global Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 bg-orange-100 rounded-full p-3 w-16 h-16 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
