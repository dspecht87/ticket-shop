import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import deJson from "@/locale/de.json";

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: "de",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    de: { ...deJson },
  },
});

export default i18n;
