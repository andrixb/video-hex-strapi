import React from 'react';
import type { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';
import { Suspense, useEffect, useState } from 'react';
import { Color } from '../src/Shared/infrastructure/enums';
import { CircularProgress, Container, ThemeProvider } from '@mui/material';

import i18n, { configureTranslations } from '../src/Shared/infrastructure/helpers/i18nUtils';
import { MainAppHeaderComponent } from '../src/Shared/ui/components/Header';
import { appTheme } from '../src/Shared/ui/styles/appTheme';


export default function Root({ Component, pageProps }: AppProps) {
    const DEFAULT_LANGUAGE = 'en';
    const [ready, isReady] = useState<boolean>(false);

    useEffect(() => {
        configureTranslations();
        detectAppLanguage();
    }, []);

    const detectAppLanguage = (): void => {
        const language = window.location.href.split('/')[3] || DEFAULT_LANGUAGE;

        i18n.changeLanguage(language).then(() => {
            isReady(true);
        });
    };

    return (
        <ThemeProvider theme={appTheme}>
            <MainAppHeaderComponent favico={process.env.FAVICO} />
            <Container>
                <Suspense fallback={<CircularProgress variant={'indeterminate'} color={Color.primary} />}>
                    <Container maxWidth="lg">
                        <I18nextProvider i18n={i18n}>
                            {ready && <Component {...pageProps} />}
                        </I18nextProvider>
                    </Container>
                </Suspense>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
            </Container >
        </ThemeProvider >
    );
};
