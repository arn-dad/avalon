import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const debug = process.env.NODE_ENV === 'development';
console.log('debug', debug);

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          titles: {
            welcome: 'WELCOME TO AVALON DENTAL'
          },
          navLink: {
            home: 'About us',
            gallery: 'Gallery',
            services: 'Our Services',
            contact: 'Contact'
          }
        }
      },
      ru: {
        translation: {
          titles: {
            welcome: 'ДОБРО ПОЖАЛОВАТЬ В АВАЛОН ДЕНТАЛ'

          },
          navLink: {
            home: 'О нас',
            gallery: 'Галирея',
            services: 'Услуги',
            contact: 'Обратная связь'
          }
        }
      },
      arm: {
        translation: {
          titles: {
            welcome: 'ԲԱՐԻ ԳԱԼՈՒՍՏ ԱՎԱԼՈՆ ԱՏԱՄՆԱԲՈՒԺԱԿԱՆ ԿԼԻՆԻԿԱ'

          },
          navLink: {
            home: 'Մեր մասին',
            services: 'Ծառայություններ',
            contact: 'կոնտակտներ'
          }
        }
      }
    }
  });

  window.i18n = i18n

export default i18n;