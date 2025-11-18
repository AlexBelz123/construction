import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t('contact.form.success'),
        description: t('contact.form.success'),
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: `${t('contact.info.phone')} (Serhii)`,
      value: '+48 (501) 538-694',
      link: 'tel:+48501538694',
    },
    {
      icon: Phone,
      title: `${t('contact.info.phone')} (Vadim)`,
      value: '+48 (888) 197-962',
      link: 'tel:+48888197962',
    },
    {
      icon: Mail,
      title: t('contact.info.email'),
      value: 'sh.remontpro@gmail.com',
      link: 'mailto:sh.remontpro@gmail.com',
    },
    {
      icon: MapPin,
      title: t('contact.info.address'),
      value: 'Katowice, Poland',
      link: 'https://maps.app.goo.gl/uwuwgJEn7Z971tVb7',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E50] text-center mb-6">
          {t('contact.title')}
        </h2>
        <div className="w-24 h-1 bg-[#F39C12] mx-auto mb-12" />

        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
          {t('contact.subtitle')}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#2C3E50] mb-6">
              {t('contact.info.title')}
            </h3>

            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-md hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <a
                      href={info.link}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#3498DB] to-[#F39C12] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#2C3E50] mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-600 group-hover:text-[#3498DB] transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              );
            })}

            <div className="mt-8 p-6 bg-gradient-to-br from-[#2C3E50] to-[#3498DB] rounded-lg text-white">
              <h4 className="text-xl font-bold mb-2">{t('contact.businessHours.title')}</h4>
              <p className="text-gray-200">
                {t('contact.businessHours.weekdays')}
              </p>
              <p className="text-gray-200">{t('contact.businessHours.saturday')}</p>
              <p className="text-gray-200">{t('contact.businessHours.sunday')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}