import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, ArrowRight, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const About = () => {
  return <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-primary/10 to-accent/10 text-center py-[26px]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-600">Empowering the Logistics Industry Through Smart Back-Office and Digital Solutions

        </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">Orange Office Technologies (OOT Pvt. Ltd.) is a specialized back-office service provider catering exclusively to the global shipping, freight forwarding, and third-party warehousing (3PL) industries. With a strong foundation in logistics domain expertise and digital innovation, OOT delivers integrated operational support and IT solutions that streamline processes, enhance productivity, and drive sustainable growth across the logistics value chain.</p>
            <p className="text-gray-600">We support our clients by managing their core non-customer-facing functions  including documentation, sales support, customer service, accounting, and digital services allowing them to focus on their core logistics operations. Our deep industry knowledge combined with a skilled workforce ensures service excellence, operational efficiency, and real-time adaptability in today’s dynamic market. In addition to our back-office services, OOT offers tailored software solutions and digital transformation tools designed specifically for logistics businesses. Our IT capabilities include Freight Management Systems (FMS), Warehouse Management Systems (WMS), and Transport Management Systems (TMS), enabling clients to digitize their operations and gain competitive advantage.</p>
          </div>
          <div className="relative flex justify-center lg:justify-end my-[5px]">
            <div className="w-4/5 max-w-sm overflow-hidden rounded-2xl shadow-xl border-4 border-white">
              <AspectRatio ratio={1} className="bg-muted">
                <img src="aboutus.avif" alt="Modern Office" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply my-0" />
              </AspectRatio>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-3 max-w-xs">
              <div className="flex items-center gap-2">
                <Award className="h-7 w-7 text-amber-500" />
                <p className="font-medium text-gray-800 text-sm">Industry Leader Since 2012</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            title: "Excellence",
            description: "Delivering high-quality solutions that exceed expectations."
          }, {
            title: "Innovation",
            description: "Pioneering new approaches to logistics challenges."
          }, {
            title: "Integrity",
            description: "Operating with transparency, honesty, and accountability."
          }, {
            title: "Collaboration",
            description: "Working together to achieve shared success."
          }, {
            title: "Agility",
            description: "Adapting quickly to changing market conditions."
          }, {
            title: "Client Focus",
            description: "Placing client needs at the center of our operations."
          }].map((value, index) => <div key={index} className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow bg-slate-200 text-orange-500">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Logistics Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Partner with Orange Office Technologies for innovative solutions that drive efficiency and growth.
          </p>
          <Button size="lg" variant="outline" className="border-white hover:bg-white text-orange-500">
            <Link to="/contact" className="flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;
