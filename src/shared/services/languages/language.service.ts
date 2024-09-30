import spanish from './spanish/translation.json';
import english from './english/translation.json';
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n
   .use(initReactI18next)
   // init i18next
   // for all options read: https://www.i18next.com/overview/configuration-options
   .init({
      debug: false,
      lng: 'es',
      fallbackLng: 'es',
      interpolation: {
         escapeValue: false // not needed for react as it escapes by default
      },
      resources: {
         es: {
            translation: spanish
         },
         en: {
            translation: english
         }
      },
      react: {
         useSuspense: false
      }
   });

export default i18n;
