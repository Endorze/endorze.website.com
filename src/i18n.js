import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import svJSON from "../public/locales/sv.json"


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "sv",
        detection: {
            order: ['cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            caches: ['cookie', 'localStorage']
        },
        react: {
            useSuspense: false
        },
        resources: {
            sv: { translation: {...svJSON} },
        }
    })

    export default i18n;