import { Card, CardContent } from "@/components/ui/card";
import { Hammer, PaintBucket, Home, Wrench, Building2, Ruler } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Hammer,
      title: "Wall Repair & Installation",
      description: "Expert drywall installation, repair, and finishing for flawless walls in your home or business.",
    },
    {
      icon: PaintBucket,
      title: "Professional Painting",
      description: "Interior and exterior painting services with premium materials and meticulous attention to detail.",
    },
    {
      icon: Home,
      title: "Complete Renovations",
      description: "Full-scale home and commercial renovations that transform spaces into your dream environment.",
    },
    {
      icon: Wrench,
      title: "Flooring Installation",
      description: "Hardwood, tile, laminate, and vinyl flooring installation with precision and care.",
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Reliable commercial construction services for offices, retail spaces, and industrial facilities.",
    },
    {
      icon: Ruler,
      title: "Custom Carpentry",
      description: "Bespoke carpentry work including cabinets, trim, and custom woodwork tailored to your needs.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] text-center mb-6">
          Our Services
        </h2>
        <div className="w-24 h-1 bg-[#F39C12] mx-auto mb-12" />
        
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
          We offer a comprehensive range of construction services to meet all your residential and commercial needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-none bg-white"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3498DB] to-[#F39C12] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-4 group-hover:text-[#3498DB] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}