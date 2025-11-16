import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
      title: "Modern Kitchen Renovation",
      category: "Residential",
    },
    {
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
      title: "Living Room Remodel",
      category: "Residential",
    },
    {
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      title: "Luxury Bathroom Design",
      category: "Residential",
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      title: "Office Space Construction",
      category: "Commercial",
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      title: "Custom Home Build",
      category: "Residential",
    },
    {
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      title: "Exterior Renovation",
      category: "Residential",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] text-center mb-6">
          Our Portfolio
        </h2>
        <div className="w-24 h-1 bg-[#F39C12] mx-auto mb-12" />
        
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Take a look at some of our recently completed projects showcasing our commitment to quality and excellence
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/90 via-[#2C3E50]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#F39C12] text-sm font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#F39C12] transition-colors"
            >
              <X size={32} />
            </button>
            {selectedImage !== null && (
              <div className="relative">
                <img
                  src={projects[selectedImage].image}
                  alt={projects[selectedImage].title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2C3E50]/90 to-transparent p-6 rounded-b-lg">
                  <span className="text-[#F39C12] text-sm font-semibold">
                    {projects[selectedImage].category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mt-2">
                    {projects[selectedImage].title}
                  </h3>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}