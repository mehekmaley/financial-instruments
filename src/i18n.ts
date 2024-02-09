import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        financialInstrumentsTable: 'Financial Instruments Table',
        loading: 'Loading',
        tableHeaders: {
            assetClass: 'Asset Class',
            price: 'Price',
            ticker: 'Ticker',
        }
      },
    },
  },
  lng: 'en', 
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;