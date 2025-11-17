import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function GalleryPage() {
  const { assetType } = useParams<{ assetType: string }>();

  const galleryData: Record<string, { title: string; description: string; images: string[] }> = {
    residential: {
      title: "Residential Projects",
      description: "Custom homes, renovations, and remodeling projects that transform living spaces",
      images: Array(12).fill("/placeholder-image.jpg"),
    },
    commercial: {
      title: "Commercial Projects",
      description: "Office spaces, retail stores, and business facilities built for success",
      images: Array(12).fill("/placeholder-image.jpg"),
    },
    industrial: {
      title: "Industrial Projects",
      description: "Warehouses, factories, and industrial complexes engineered for efficiency",
      images: Array(12).fill("/placeholder-image.jpg"),
    },
    renovation: {
      title: "Renovation Projects",
      description: "Complete makeovers and restoration projects breathing new life into spaces",
      images: Array(12).fill("/placeholder-image.jpg"),
    },
    landscaping: {
      title: "Landscaping Projects",
      description: "Outdoor spaces, gardens, and hardscaping that enhance property value",
      images: Array(12).fill("/placeholder-image.jpg"),
    },
    infrastructure: {
      title: "Infrastructure Projects",
      description: "Roads, bridges, and public works projects building community foundations",
      images: Array(12).fill("/placeholder-image.jpg"),
    },
  };

  const currentGallery = assetType ? galleryData[assetType] : null;

  if (!currentGallery) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">Gallery Not Found</h1>
          <Link to="/" className="text-[#3498DB] hover:text-[#F39C12] transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 text-[#3498DB] hover:text-[#F39C12] transition-colors mb-8 font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-[#2C3E50] mb-4">
            {currentGallery.title}
          </h1>
          <div className="w-24 h-1 bg-[#F39C12] mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mb-12">
            {currentGallery.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentGallery.images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
              >
                <img
                  src={image}
                  alt={`${currentGallery.title} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#2C3E50]/0 group-hover:bg-[#2C3E50]/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
