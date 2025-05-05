
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Facebook, Globe, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { useState } from "react";
import { MapComponent } from "@/components/MapComponent";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-10 bg-gradient-to-br from-white to-amber-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-gradient bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500 bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-gray-600 text-lg mb-6">
              Have questions about our services or want to discuss how we can help your business? 
              Reach out to us and our team will be happy to assist you.
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-gradient-to-br from-orange-200/20 to-amber-300/10 blur-3xl"></div>
        <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-gradient-to-br from-orange-200/10 to-amber-300/20 blur-3xl"></div>
      </section>
      
      {/* Contact Information and Form Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <Card className="border-none rounded-2xl shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-orange-600 to-amber-500 p-6 text-white">
                    <h2 className="font-heading text-2xl font-semibold">Send Us a Message</h2>
                    <p className="text-white/90">Fill out the form and we'll get back to you as soon as possible</p>
                  </div>
                  <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">Your Name</label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="John Doe" 
                          required 
                          value={formState.name}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
                        <Input 
                          id="email" 
                          name="email" 
                          type="email" 
                          placeholder="john@example.com" 
                          required 
                          value={formState.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                      <Input 
                        id="subject" 
                        name="subject" 
                        placeholder="How can we help you?" 
                        required 
                        value={formState.subject}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">Your Message</label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Please describe your inquiry in detail..." 
                        rows={5}
                        required 
                        value={formState.message}
                        onChange={handleChange}
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-white"></div>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message 
                          <Send className="w-4 h-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Contact Information</h2>
                  <p className="text-gray-600 mb-6">
                    We're here to help! Reach out through any of these channels and we'll respond as quickly as possible.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-orange-100 p-3 rounded-full mr-4">
                        <MapPin className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Our Location</h3>
                        <p className="text-gray-600">MK Insignia, Sector-V, Kolkata, India</p>
                        <p className="text-gray-600">Mk tower, New Delhi, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-orange-100 p-3 rounded-full mr-4">
                        <Mail className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Email Us</h3>
                        <p className="text-gray-600">info@orangeofficetech.com</p>
                        <p className="text-gray-600">support@orangeofficetech.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-orange-100 p-3 rounded-full mr-4">
                        <Phone className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Call Us</h3>
                        <p className="text-gray-600">+91 1234567890</p>
                        <p className="text-gray-600">+1 987-654-3210</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-orange-100 p-3 rounded-full mr-4">
                        <Building className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">Business Hours</h3>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-gray-600">Weekend: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium text-lg mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-600 hover:bg-blue-200 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-sky-100 p-3 rounded-full text-sky-600 hover:bg-sky-200 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-pink-100 p-3 rounded-full text-pink-600 hover:bg-pink-200 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-green-100 p-3 rounded-full text-green-600 hover:bg-green-200 transition-colors">
                      <Globe className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Find Us Here
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our office or send inquiries to our corporate headquarters
            </p>
          </div>
          
          <div className="h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
            <MapComponent showPopup={true} />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold mb-4 text-gradient bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and support
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[{
                question: "What types of logistics services do you offer?",
                answer: "We offer comprehensive back-office solutions for freight forwarders including documentation, accounting, customer service, and sales support."
              }, {
                question: "Do you provide 24/7 customer support?",
                answer: "Yes, our customer service team is available 24/7 to handle inquiries, bookings, and provide assistance for all urgent matters."
              }, {
                question: "How quickly can you implement your solutions?",
                answer: "Implementation timelines vary based on your specific needs, but typically range from 1-4 weeks for most services. Our team works efficiently to ensure a smooth transition."
              }, {
                question: "Can you customize solutions for specific logistics needs?",
                answer: "Absolutely! We pride ourselves on tailoring our services to meet the unique needs of each client in the freight forwarding industry."
              }, {
                question: "How do you ensure data security for clients?",
                answer: "We implement industry-leading security protocols, including end-to-end encryption, secure data centers, regular audits, and strict access controls to protect all client information."
              }].map((faq, index) => (
                <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-medium text-lg mb-2 text-gray-900">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-amber-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Logistics Operations?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Partner with Orange Office Technologies and focus on growing your business while we handle your back-office operations.
            </p>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-500">
              <Link to="/contact" className="flex items-center gap-2">
                Schedule a Consultation
                <Send className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default Contact;
