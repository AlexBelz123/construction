import { CheckCircle, Users, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const stats = [
    { icon: CheckCircle, value: '50+', label: t('aboutUs.stats.completed') },
    { icon: Users, value: '5+', label: t('aboutUs.stats.experience') },
    { icon: Award, value: '100%', label: t('aboutUs.stats.satisfaction') },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] text-center mb-6">
            {t('aboutUs.title')}
          </h2>
          <div className="w-24 h-1 bg-[#F39C12] mx-auto mb-12" />

          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            {t('aboutUs.p1')}
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center">
            {t('aboutUs.p2')}
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
                  <div className="text-4xl font-bold text-[#2C3E50] mb-2">
                    {stat.value}
                  </div>
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
