import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GradientBackground } from "@/components/GradientBackground";
import { Users, ArrowRight, BarChart, CheckCircle, Target, Globe, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
const SalesSupport = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
    <GradientBackground className="pt-32 pb-16 min-h-[50vh] flex items-center justify-center" variant="secondary" intensity="medium" animated={true}>
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-center gap-8">
        <div className="flex-1 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-primary mb-6">
            <Users className="h-7 w-7" />
            <span className="font-medium">Sales Support</span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl mb-6 animate-fade-in">
            Boost Your Sales Performance
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Our Sales Support Desk functions as an extension of your team, offering centralized support to manage leads, client inquiries, and CRM tasks.
          </p>
          <Button className="mt-2" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
    </GradientBackground>

    {/* Key Benefits Section */}
    <section className="py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Key Benefits</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        How our sales support services can transform your business operations
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[{
            icon: <Target className="h-12 w-12 text-primary" />,
            title: "Targeted Lead Generation",
            description: "Identify and qualify potential customers based on your specific business criteria and industry focus."
          }, {
            icon: <MessageSquare className="h-12 w-12 text-primary" />,
            title: "Consistent Communication",
            description: "Maintain regular contact with prospects and customers through multiple channels to build relationships."
          }, {
            icon: <CheckCircle className="h-12 w-12 text-primary" />,
            title: "Qualified Pipeline",
            description: "Focus your sales team on high-quality leads that are more likely to convert into paying customers."
          }, {
            icon: <Globe className="h-12 w-12 text-primary" />,
            title: "Global Coverage",
            description: "Support across different time zones to ensure continuous engagement with your international clients."
          }, {
            icon: <BarChart className="h-12 w-12 text-primary" />,
            title: "Performance Analytics",
            description: "Detailed reporting and analytics to track progress and optimize your sales strategy."
          }, {
            icon: <Users className="h-12 w-12 text-primary" />,
            title: "Cost Efficiency",
            description: "Reduce operational costs while maintaining high-quality sales support functions."
          }].map((benefit, index) => <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 bg-slate-50">
          <CardContent className="p-8 bg-slate-50">
            <div className="mb-6 inline-block p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              {benefit.icon}
            </div>
            <h3 className="font-heading font-bold text-xl mb-4 group-hover:text-primary transition-colors">
              {benefit.title}
            </h3>
            <p className="text-gray-600">
              {benefit.description}
            </p>
          </CardContent>
        </Card>)}
    </div>
  </div>
    </section>


      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              How we integrate with your sales operations to deliver results
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[21px] top-0 bottom-0 w-1 bg-primary/20 hidden md:block"></div>
              
              {[{
              step: "01",
              title: "Initial Assessment",
              description: "We analyze your current sales process, goals, and target audience to develop a customized support strategy."
            }, {
              step: "02",
              title: "Team Integration",
              description: "Our sales support specialists integrate with your existing systems, tools, and processes."
            }, {
              step: "03",
              title: "Lead Management",
              description: "We handle lead qualification, nurturing, and tracking through your preferred CRM system."
            }, {
              step: "04",
              title: "Continuous Improvement",
              description: "Regular performance reviews and strategy adjustments to ensure optimal results."
            }].map((item, index) => <div key={index} className="flex gap-6 mb-12 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg z-10">
                    {item.step}
                  </div>
                  <div className="flex-grow pt-1">
                    <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-primary p-10 text-white">
                    <div className="text-5xl mb-6 opacity-80">"</div>
                    <p className="text-lg mb-8 italic">
                      Orange Office Technologies' sales support desk has transformed how we manage our sales pipeline. Their team's understanding of the freight forwarding industry allows them to qualify leads effectively, resulting in a 40% increase in our conversion rate.
                    </p>
                    <div>
                      <p className="font-bold text-lg">James Wilson</p>
                      <p className="opacity-80">Sales Director, Global Logistics Inc.</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80" alt="Team collaborating" className="w-full h-full object-cover" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GradientBackground className="py-20" variant="primary" intensity="strong" animated={true}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">
              Ready to Enhance Your Sales Operations?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Let us show you how our sales support services can help streamline your sales process and boost your conversion rates.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="shadow-lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </GradientBackground>

      <Footer />
    </div>;
};
export default SalesSupport;