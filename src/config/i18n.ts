import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Fetch translations before initializing i18n
const loadTranslations = async () => {
  const languages = ['es', 'en', 'ca'];
  const resources: Record<string, { translation: any }> = {};

  await Promise.all(
    languages.map(async (lang) => {
      try {
        const response = await fetch(`/locales/${lang}/translation.json`);
        const translations = await response.json();
        resources[lang] = { translation: translations };
      } catch (error) {
        console.error(`Failed to load ${lang} translations:`, error);
      }
    })
  );

  return resources;
};

// Initialize i18n with preloaded translations
const initPromise = loadTranslations().then((resources) => {
  return i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'es',
      supportedLngs: ['es', 'en', 'ca'],
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
      },
      interpolation: {
        escapeValue: false,
      },
    });
});

// Export both i18n instance and the initialization promise
export { initPromise };
export default i18n;
