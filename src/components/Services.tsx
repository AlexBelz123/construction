import { Card, CardContent } from "@/components/ui/card";
import { Hammer, PaintBucket, Grid3x3, Layers, DoorOpen, Home } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Hammer,
      titleKey: "services.drywall.title",
      descriptionKey: "services.drywall.description",
    },
    {
      icon: PaintBucket,
      titleKey: "services.painting.title",
      descriptionKey: "services.painting.description",
    },
    {
      icon: Grid3x3,
      titleKey: "services.tiling.title",
      descriptionKey: "services.tiling.description",
    },
    {
      icon: Layers,
      titleKey: "services.laminate.title",
      descriptionKey: "services.laminate.description",
    },
    {
      icon: DoorOpen,
      titleKey: "services.windows.title",
      descriptionKey: "services.windows.description",
    },
    {
      icon: Home,
      titleKey: "services.turnkey.title",
      descriptionKey: "services.turnkey.description",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] text-center mb-6">
          {t('services.title')}
        </h2>
        <div className="w-24 h-1 bg-[#F39C12] mx-auto mb-12" />
        
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
          {t('services.subtitle')}
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
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t(service.descriptionKey)}
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