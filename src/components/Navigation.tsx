import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.portfolio'), href: '#portfolio' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2C3E50]/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-2xl font-bold text-white hover:text-[#F39C12] transition-colors flex items-center gap-1"
            >
              <img src="/logo-large.png" alt="logo" className="size-16" />
              SH.REMONTPRO
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-[#F39C12] transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}

            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-[#F39C12] hover:bg-transparent"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  {i18n.language.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage('en')}>
                  English (EN)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage('pl')}>
                  Polski (PL)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-[#F39C12] transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-in slide-in-from-top duration-300">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 text-white hover:bg-[#F39C12]/20 rounded transition-colors"
              >
                {item.name}
              </button>
            ))}

            {/* Mobile Language Switcher */}
            <div className="px-4 pt-2 flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => changeLanguage('en')}
                className={`flex-1 ${
                  i18n.language === 'en'
                    ? 'bg-[#F39C12] text-white'
                    : 'text-black border-white'
                }`}
              >
                EN
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => changeLanguage('pl')}
                className={`flex-1 ${
                  i18n.language === 'pl'
                    ? 'bg-[#F39C12] text-white'
                    : 'text-black border-white'
                }`}
              >
                PL
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
