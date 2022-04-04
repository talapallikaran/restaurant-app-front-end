import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enTranslations } from "./locales/en";
import { spTranslations } from "./locales/sp";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    sp: {
      translation: spTranslations,
    },
  },
  // we init with resources
  lng: "en",
  fallbackLng: "en",

  keySeparator: ".", // we use content as keys
  // have a common nmespace used around the full app
  debug: false,
  // keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
});

export default i18n;
