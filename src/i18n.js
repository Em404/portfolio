import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// Configurazione iniziale di i18n
i18n
  .use(HttpBackend) // Permette il caricamento delle traduzioni tramite HTTP
  // .use(LanguageDetector) // Rileva automaticamente la lingua del browser
  .use(initReactI18next) // Passa i18n a react-i18next
  .init({
    fallbackLng: 'en', // Lingua di riserva
    debug: true, // Abilita la modalità debug
    interpolation: {
      escapeValue: false, // React già fa l'escape di valori
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Percorso dei file di traduzione
    },
  });

export default i18n;
