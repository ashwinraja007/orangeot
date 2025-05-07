import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const Contact = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600">We'd love to hear from you! Get in touch using the form below.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input type="text" id="name" placeholder="Enter your name" required={true} />
              </div>
              <div>
                <Label htmlFor="email">Your Email</Label>
                <Input type="email" id="email" placeholder="Enter your email" required={true} />
              </div>
              <div>
                <Label htmlFor="phone">Your Phone</Label>
                <Input type="tel" id="phone" placeholder="Enter your phone number" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Write your message here..." rows={4} required={true} />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Our Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-600">
                    "KAIZEN" 2nd & 3rd Floor, Anna Nagar East, Chennai: 600102
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-600">+91 44 4796 5437</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">info@orangeot.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button variant="outline" className="w-full">
                <Link to="/" className="flex items-center justify-center gap-2">
                  Back to Homepage
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;
