
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img src="/lovable-uploads/c80361a7-f9e6-4b5d-a689-95904676a926.png" alt="Orange Office Technologies" className="h-12 w-auto mb-4" />
            <p className="text-gray-600 text-sm">
              Orange Office Technologies Pvt Ltd. is a Neutral KPO Service Provider offering expert services in logistics operations.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Chennai - Headquarters</h4>
            <address className="text-gray-600 text-sm not-italic">
              "KAIZEN" 2nd & 3rd Floor<br />
              New No.G3 (Old No.G1), G Block,<br />
              Plot No.565Q, 18th Street,<br />
              Chinthamani, Anna Nagar East,<br />
              Chennai: 600102
            </address>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Kochi Office</h4>
            <address className="text-gray-600 text-sm not-italic">
              No 34/656, Neelima,<br />
              Toll Jn, Edappally,<br />
              Ernakulam, Kochi,<br />
              Kerala 682024<br />
              (Landmark: OPP Metro Pillar 394)
            </address>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Subscribe</h4>
            <form className="space-y-4">
              <Input placeholder="Email" type="email" />
              <Input placeholder="Your Name" type="text" />
              <Button className="w-full bg-primary hover:bg-primary/90">Submit</Button>
            </form>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-gray-600 text-sm">
          <p>© 2024 Orange Office Technologies Pvt Ltd - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
