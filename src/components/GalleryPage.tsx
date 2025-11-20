import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  const galleryData: Record<
    string,
    { title: string; description: string; images: string[] }
  > = {
    residential: {
      title: t('gallery.residential.title'),
      description: t('gallery.residential.description'),
      images: Array.from(
        { length: 17 },
        (_, i) => `/residential/${i + 1}.jpeg`
      ),
    },
    commercial: {
      title: t('gallery.renovation.title'),
      description: t('gallery.renovation.description'),
      images: Array.from({ length: 11 }, (_, i) => `/renovation/${i + 1}.jpeg`),
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

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const goToNext = () => {
    if (!currentGallery) return;
    setCurrentImageIndex((prev) => 
      prev === currentGallery.images.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrevious = () => {
    if (!currentGallery) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentGallery.images.length - 1 : prev - 1
    );
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square cursor-pointer bg-[#2C3E50]/95"
                onClick={() => openLightbox(index)}
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
      <div className="flex-1" />

      <Footer />

      {/* Lightbox */}
      {lightboxOpen && currentGallery && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-[110] w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 z-[110] w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 z-[110] w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={currentGallery.images[currentImageIndex]}
              alt={`${currentGallery.title} ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full text-white text-sm">
            {currentImageIndex + 1} / {currentGallery.images.length}
          </div>
        </div>
      )}
    </div>
  );
}
