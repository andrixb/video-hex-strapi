import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';

const REMOTE_URL = `${process.env.CDN_URL}/${process.env.MICRO_FOLDER_NAME}/${process.env.ASSETS_VERSION}`;
const LOCAL_URL = `${process.env.ASSETS_PATH}`;

const backend = {
    loadPath: `${process.env.ASSETS_VERSION ? REMOTE_URL : LOCAL_URL}/locales/{{lng}}.json`,
};

export function configureTranslations() {
    i18n.use(initReactI18next)
        .use(XHR)
        .init({
            backend,
            ns: ['translation'],
            fallbackLng: 'en',
            fallbackNS: 'default',
            interpolation: {
                escapeValue: false,
            },
            react: {
                useSuspense: false,
            //     wait: true,
            },
            returnNull: false,
        });
}

export default i18n;
