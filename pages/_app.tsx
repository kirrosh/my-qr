import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { App } from 'tailwind-mobile/react';
import { initAmplitude } from '../lib/amplitude';

function MyApp({ Component, pageProps }: AppProps) {
    React.useEffect(() => {
        initAmplitude();
    }, []);
    return (
        <App theme="ios" dark>
            <Component {...pageProps} />
        </App>
    );
}

export default MyApp;
