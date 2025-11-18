import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/sh.remontpro?igsh=aThmZTJsOG13emo%3D&utm_source=qr',
      label: 'Instagram',
    },
  ];

  return (
    <footer className="bg-[#2C3E50] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold mb-4 text-[#F39C12]">
              <a
                href="/"
                className="text-xl font-bold text-[#F39C12] hover:text-[#F39C12] transition-colors flex items-center gap-1"
              >
                <img src="/logo-large.png" alt="logo" className="size-12" />
                SH.REMONTPRO
              </a>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {[
                { name: t('nav.home'), href: 'home' },
                { name: t('nav.services'), href: 'services' },
                { name: t('nav.portfolio'), href: 'portfolio' },
                { name: t('nav.contact'), href: 'contact' },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={`#${item.href}`}
                    className="text-gray-300 hover:text-[#F39C12] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t('footer.followUs')}
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-[#3498DB] hover:bg-[#F39C12] rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} SH.REMONTPRO Services. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
