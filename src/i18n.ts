import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import pl from './locales/pl.json';

// Get saved language from localStorage or default to 'en'
const savedLanguage = localStorage.getItem('language') || 'pl';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    pl: { translation: pl },
  },
  lng: savedLanguage,
  fallbackLng: 'pl',
  interpolation: {
    escapeValue: false,
  },
});

// Save language to localStorage whenever it changes
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
