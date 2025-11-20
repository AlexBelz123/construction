import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Portfolio() {
  const { t } = useTranslation();

  const portfolioCategories = [
    {
      slug: 'residential',
      title: t('portfolio.residential.title'),
      description: t('portfolio.residential.description'),
      image:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
      slug: 'commercial',
      title: t('portfolio.renovation.title'),
      description: t('portfolio.renovation.description'),
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] text-center mb-6">
          {t('portfolio.title')}
        </h2>
        <div className="w-24 h-1 bg-[#F39C12] mx-auto mb-12" />

        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
          {t('portfolio.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-[904px] gap-6 mx-auto">
          {portfolioCategories.map((category) => (
            <div
              key={category.slug}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E50]/95 via-[#2C3E50]/60 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">
                  {category.description}
                </p>
                <Link
                  to={`/${category.slug}`}
                  className="inline-flex items-center gap-2 text-[#F39C12] font-semibold hover:gap-3 transition-all duration-300"
                >
                  {t('portfolio.viewGallery')}
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
