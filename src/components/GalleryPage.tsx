import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import Footer from './Footer';

export default function GalleryPage() {
  const { assetType } = useParams<{ assetType: string }>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryData: Record<
    string,
    { title: string; description: string; images: string[] }
  > = {
    residential: {
      title: t('gallery.residential.title'),
      description: t('gallery.residential.description'),
      images: Array.from({ length: 8 }, (_, i) => `/residential/${i + 1}.jpeg`),
    },
    commercial: {
      title: t('gallery.commercial.title'),
      description: t('gallery.commercial.description'),
      images: Array.from({ length: 6 }, (_, i) => `/commercial/${i + 1}.jpeg`),
    },
    industrial: {
      title: t('gallery.industrial.title'),
      description: t('gallery.industrial.description'),
      images: Array.from({ length: 4 }, (_, i) => `/industrial/${i + 1}.jpeg`),
    },
  };

  const currentGallery = assetType ? galleryData[assetType] : null;

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleBackToPortfolio = () => {
    navigate('/');
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!currentGallery) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#2C3E50] mb-4">
            {t('gallery.notFound')}
          </h1>
          <Link
            to="/"
            className="text-[#3498DB] hover:text-[#F39C12] transition-colors"
          >
            {t('gallery.returnHome')}
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
          <button
            onClick={handleBackToPortfolio}
            className="inline-flex items-center gap-2 text-[#3498DB] hover:text-[#F39C12] transition-colors mb-8 font-semibold"
          >
            <ArrowLeft size={20} />
            {t('gallery.backToPortfolio')}
          </button>

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
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square cursor-move"
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  className="absolute inset-0 transition-transform duration-100 ease-out"
                  style={{
                    transform:
                      hoveredIndex === index
                        ? `scale(2) translate(${50 - mousePosition.x}%, ${
                            50 - mousePosition.y
                          }%)`
                        : 'scale(1) translate(0, 0)',
                  }}
                >
                  <img
                    src={image}
                    alt={`${currentGallery.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
