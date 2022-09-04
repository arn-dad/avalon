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
            welcome: 'Welcome to Avalon Dental'
          },
          navLink: {
            home: 'About us',
            gallery: 'Gallery',
            services: 'Our Services',
            contact: 'Contact'
          },
          intro: {
            innovation: '',
            trainer: '',
            insurance: '',
            client: ''
          },
          services: {
            title: 'Our services',
            desc: 'Application of innovative methods, equipments and materials, Abroad trained experienced dentists, Insurance and social packages, Individual approach to every client.',
            implantation: 'Implantation',
            surgery: 'Surgery',
            cosmetic: 'Cosmetic tooth restoration',
            orthopedics: 'Orthopedics',
            therapy: 'Therapy',
            pediatric: 'Pediatric Dentistry',
            orthodontics: 'Orthodontics'
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
          },
          intro: {
            innovation: '',
            trainer: '',
            insurance: '',
            client: ''
          },
          services: {
            title: 'Наши услуги',
            desc: 'Мы используем инновационные методы, технику, препараты, У нас работают специалисты получившие квалификацию за границей, происходит обслуживание страховых и социальных пакетов( или полюсов). Мы обеспечиваем индивидуальный подход к каждому пациенту.',
            implantation: 'Имплантация',
            surgery: 'Хирургия',
            cosmetic: 'Косметическая реставрация зубов',
            orthopedics: 'Ортопедия',
            therapy: 'Терапия',
            pediatric: 'Детская стоматология',
            orthodontics: 'Ортодонтия'
          }
        }
      },
      arm: {
        translation: {
          titles: {
            welcome: 'Բարի գալուստ Ավալոն Դենտալ'

          },
          navLink: {
            home: 'Մեր մասին',
            services: 'Ծառայություններ',
            contact: 'կոնտակտներ'
          },
          intro: {
            innovation: '',
            trainer: '',
            insurance: '',
            client: ''
          },
          services: {
            title: 'Մեր ծառայությունները՝',
            desc: 'Նորարարական մեթողների, սարքավորումների և նյութերի կիրառում, Արտերկրում վերապատրաստված փորձառու մասնագետներ, Ապահովագրական և սոցիալական փաթեթների սպասարկում, Ինդիվիդուալ մոտեցում յուրաքանչյուր հաճախորդին։',
            implantation: 'Իմպլանտացիա',
            surgery: 'Վիրաբուժություն',
            cosmetic: 'Ատամների Կոսմետիկ վերականգնում',
            orthopedics: 'Օրթոպեդիա',
            therapy: 'Թերապիա',
            pediatric: 'Մանկական Ստոմատոլոգիա',
            orthodontics: 'Օրթոդոնտիա'
          }
        }
      }
    }
  });

  window.i18n = i18n

export default i18n;