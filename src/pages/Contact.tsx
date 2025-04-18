
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in">
              Let's discuss how we can help transform your operations
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input placeholder="First Name" className="bg-gray-50" />
                      <Input placeholder="Last Name" className="bg-gray-50" />
                    </div>
                    <Input placeholder="Email" type="email" className="bg-gray-50" />
                    <Input placeholder="Phone" type="tel" className="bg-gray-50" />
                    <Input placeholder="Subject" className="bg-gray-50" />
                    <Textarea placeholder="Your Message" className="bg-gray-50 min-h-[150px]" />
                    <Button className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="font-heading font-bold text-2xl mb-6">Our Offices</h2>
                
                <div className="space-y-6">
                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">Chennai - Headquarters</h3>
                      <p className="text-gray-600">
                        "KAIZEN", 2nd & 3rd Floor<br />
                        New No.G3 (Old No.G1), G Block, Plot No.565Q,<br />
                        18th Street, Chinthamani, Anna Nagar East,<br />
                        Chennai: 600102
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2">Kochi Office</h3>
                      <p className="text-gray-600">
                        No 34/656, Neelima, Toll Jn, Edappally,<br />
                        Ernakulam, Kochi, Kerala 682024<br />
                        (Landmark: OPP Metro Pillar 394)
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+91 44 4796 5437</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@orangeot.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
