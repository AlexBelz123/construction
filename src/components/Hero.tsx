import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50]/95 to-[#2C3E50]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Building Your Dreams
          <span className="block text-[#F39C12] mt-2">One Project at a Time</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Professional construction services with over 15 years of experience in residential and commercial projects
        </p>
        <Button 
          size="lg"
          onClick={scrollToContact}
          className="bg-[#F39C12] hover:bg-[#E67E22] text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-2xl transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
        >
          Get a Free Quote
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}