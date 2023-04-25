import i18next, { FallbackLng, Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import detector, { DetectorOptions } from "i18next-browser-languagedetector";

import translationFR from "@translations/fr/translation.json";
import translationEN from "@translations/en/translation.json";
import translationAR from "@translations/ar/translation.json";

/* The fallback language */
const fallbackLng: FallbackLng | false = ["en"];

/* The available languages */
const availableLanguages: false | readonly string[] = ["en", "ar", "fr"];

/* The translations resources */
const resources: Resource = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  ar: {
    translation: translationAR,
  },
};

/* The language detection options used */
const DETECTION_OPTIONS: DetectorOptions = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
};

/* Setting up the dictionary/translator */
const i18n = i18next
  .use(detector)
  .use(initReactI18next); /* Passes i18n down to react-i18next */

/** i18n configuration initialization */
i18n.init({
  resources /** An object containing all translations resources for each language*/,
  fallbackLng /** Add fallback language in case something went wrong */,
  supportedLngs: availableLanguages /** Set the list of supported languages */,
  debug:
    process.env.NODE_ENV ===
    "development" /** Debug only when in a development environment */,
  interpolation: {
    escapeValue: false /** No need for react. it escapes by default */,
  },
  detection:
    DETECTION_OPTIONS /** Using detection options to cache the selected language options. WARNING: setting the default 'lng' will not let the language detection work properly */,
});

export default i18n;
