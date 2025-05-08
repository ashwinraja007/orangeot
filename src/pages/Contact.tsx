
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, User, Clock, ExternalLink, ChevronRight, ContactIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { GradientBackground } from "@/components/GradientBackground";
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // Animation states
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  useEffect(() => {
    setIsPageLoaded(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    // Show success toast with enhanced styling
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  // Map locations for Chennai and Kochi offices
  const officeLocations = [{
    title: "Chennai - Headquarters",
    description: "KAIZEN" 2nd & 3rd Floor ,New No.G3 (Old No.G1), G Block, Plot No.565Q, 18th Street, Chinthamani, Anna Nagar East, Chennai: 600102",
    coordinates: [80.2707, 13.0827],
    timing: "Mon - Fri: 9:00 AM - 6:00 PM",
    phone: "+91 44 4796 5437",
    email: "info@orangeot.com"
  }, {
    title: "Kochi Office",
    description: "No 34/656, Neelima, Toll Jn,Edappally , Ernakulam , Kochi, Kerala 682024,(Landmark : OPP Metro Pillar 394",
    coordinates: [76.3219, 9.9816],
    timing: "Mon - Fri: 9:00 AM - 6:00 PM",
    phone: "+91 44 4796 5437",
    email: "info@orangeot.com"
  }];

  // Social media icons
  const socialIcons = {
    facebook: <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 bg-inherit"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>,
    twitter: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>,
    linkedin: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd"></path></svg>,
    instagram: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
  };

  return <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-orange-50">
      <Header />
      
      {/* Enhanced Hero Section with Gradient */}
      <GradientBackground variant="primary" intensity="medium" animated={true} className="pt-28 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className={cn("inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4 transform transition-all duration-700", isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}>
              <ContactIcon size={16} />
              <span className="font-medium">Get in Touch</span>
            </div>
            
            <h1 className={cn("font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent transform transition-all duration-700", isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}>
              Let's Start a Conversation
            </h1>
            
            <p className={cn("text-xl mb-6 text-gray-700 max-w-2xl mx-auto transform transition-all duration-700 delay-100", isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}>
              Discover how our innovative solutions can transform your logistics operations 
              and drive business growth
            </p>
          </div>
        </section>
      </GradientBackground>

      {/* Contact Form & Info Section */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form - Wider */}
            <div className={cn("lg:col-span-3 transform transition-all duration-700 delay-200", isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}>
              <Card className="overflow-hidden border-none rounded-2xl shadow-2xl backdrop-blur-lg bg-white/90 hover:shadow-orange-200/20 hover:shadow-2xl transition-all duration-500">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2"></div>
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-heading font-bold text-2xl md:text-3xl mb-5 text-gray-800">Send Us a Message</h2>
                  
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1 group">
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-700 transition-colors group-focus-within:text-primary">
                          First Name
                        </label>
                        <div className="relative">
                          <Input id="firstName" name="firstName" placeholder="John" className="pl-10 bg-gray-50/50 border-gray-200 focus:border-primary transition-all h-11" value={formData.firstName} onChange={handleInputChange} required />
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                      
                      <div className="space-y-1 group">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-700 transition-colors group-focus-within:text-primary">
                          Last Name
                        </label>
                        <div className="relative">
                          <Input id="lastName" name="lastName" placeholder="Doe" className="pl-10 bg-gray-50/50 border-gray-200 focus:border-primary transition-all h-11" value={formData.lastName} onChange={handleInputChange} required />
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-1 group">
                      <label htmlFor="email" className="text-sm font-medium text-gray-700 transition-colors group-focus-within:text-primary">
                        Email Address
                      </label>
                      <div className="relative">
                        <Input id="email" name="email" placeholder="you@example.com" type="email" className="pl-10 bg-gray-50/50 border-gray-200 focus:border-primary transition-all h-11" value={formData.email} onChange={handleInputChange} required />
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="space-y-1 group">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700 transition-colors group-focus-within:text-primary">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Input id="phone" name="phone" placeholder="+91 98765 43210" type="tel" className="pl-10 bg-gray-50/50 border-gray-200 focus:border-primary transition-all h-11" value={formData.phone} onChange={handleInputChange} />
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                        Subject
                      </label>
                      <Input id="subject" name="subject" placeholder="How can we help you?" className="bg-gray-50/50 border-gray-200 focus:border-primary transition-all h-11" value={formData.subject} onChange={handleInputChange} required />
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Your Message
                      </label>
                      <Textarea id="message" name="message" placeholder="Please provide details about your inquiry..." className="bg-gray-50/50 border-gray-200 focus:border-primary transition-all min-h-[120px] resize-none" value={formData.message} onChange={handleInputChange} required />
                    </div>
                    
                    <Button type="submit" className="w-full h-11 text-base group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                      <span className="relative z-10 flex items-center gap-2">
                        Send Message
                        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information - Narrower */}
            <div className={cn("lg:col-span-2 space-y-6", isPageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5")}>
              <div>
                <h2 className="font-heading font-bold text-2xl mb-5 text-gray-800">Our Offices</h2>
                
                <div className="space-y-5 mb-6">
                  {officeLocations.map((office, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group">
                      <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      <CardContent className="p-5">
                        <h3 className="font-bold text-lg mb-2 flex items-center text-gray-800 group-hover:text-orange-500 transition-colors">
                          <MapPin className="h-5 w-5 text-orange-500 mr-2 flex-shrink-0" />
                          {office.title}
                        </h3>
                        <div className="pl-7">
                          <p className="text-gray-600 mb-2 text-sm">
                            {office.description}
                          </p>
                          
                          <div className="flex items-center text-gray-500 mb-1">
                            <Clock className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="text-sm">{office.timing}</span>
                          </div>
                          
                          <div className="flex items-center text-gray-500 mb-1">
                            <Phone className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="text-sm">{office.phone}</span>
                          </div>
                          
                          <div className="flex items-center text-gray-500">
                            <Mail className="h-4 w-4 mr-2 text-gray-400" />
                            <span className="text-sm">{office.email}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>)}
                </div>
              </div>
              
              {/* Connect With Us - Social Media */}
              <Card className="border-none shadow-lg overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600 text-white">
                <CardContent className="p-5">
                  <h2 className="font-bold text-xl mb-3">Connect With Us</h2>
                  <p className="text-white/90 mb-4 text-sm">Follow us on social media to stay updated with our latest news and offers</p>
                  
                  <div className="flex space-x-3 bg-inherit">
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                      {socialIcons.facebook}
                    </a>
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                      {socialIcons.twitter}
                    </a>
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                      {socialIcons.linkedin}
                    </a>
                    <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                      {socialIcons.instagram}
                    </a>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Contact Card */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-1"></div>
                
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width with Proper Styling */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-4 mb-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3 text-gray-800">Visit Our Locations</h2>
            <p className="text-lg text-gray-600">Find us at our convenient office locations in Chennai and Kochi</p>
          </div>
        </div>
        
        <div className="relative w-full h-[450px] overflow-hidden shadow-2xl rounded-none md:rounded-lg mx-auto max-w-7xl">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1544442225477!2d80.22267627572437!3d13.089396612283391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52642e68adc059%3A0x44809bfe043deede!2sOrange%20Office%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1746282320085!5m2!1sen!2sin" width="100%" height="100%" style={{
          border: 0
        }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Orange Office Technologies Location" className="absolute inset-0" />
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;
