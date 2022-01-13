import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from "react-native-localize";
import en from "./locals/en.json";
import es from "./locals/es.json"

const locales = RNLocalize.getLocales();

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: cb => {
        return cb(Array.isArray(locales)? locales[0].languageCode: 'en');
    },
    init: () => { },
    cacheUserLanguage: () => { },
};

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation: en
            },
            es: {
                translation: es
            },
        },
    });
