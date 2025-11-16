import { CheckCircle, Users, Award } from "lucide-react";

export default function About() {
  const stats = [
    { icon: CheckCircle, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "15+", label: "Years Experience" },
    { icon: Award, value: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] text-center mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-[#F39C12] mx-auto mb-12" />
          
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            With over 15 years of experience in the construction industry, we pride ourselves on delivering 
            exceptional quality and craftsmanship in every project. Our team of skilled professionals is 
            dedicated to transforming your vision into reality, whether it's a small renovation or a large-scale 
            commercial build.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
            We believe in building lasting relationships with our clients through transparency, reliability, 
            and superior workmanship. Your satisfaction is our top priority, and we go above and beyond to 
            ensure every detail meets your expectations.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center p-6 rounded-lg bg-gradient-to-br from-[#3498DB]/10 to-[#F39C12]/10 hover:shadow-lg transition-shadow"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-[#3498DB]" />
                  <div className="text-4xl font-bold text-[#2C3E50] mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}