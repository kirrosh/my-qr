import Head from 'next/head';
import React from 'react';

const MetaData = () => {
    return (
        <Head>
            <title>My QR</title>
            <meta name="description" content="Offline QR list" />
            <link rel="icon" href="/favicon.ico" />

            <meta name="application-name" content="My QR" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="My QR" />
            <meta name="description" content="Быстрый доступ к QR коду" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="msapplication-config" content="/icons/browserconfig.xml" />
            <meta name="msapplication-TileColor" content="#cfdef5" />
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="theme-color" content="#212121" />

            <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
            <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

            <link rel="manifest" href="/manifest.json" />
            <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="shortcut icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:url" content="https://my-qr.vercel.app" />
            <meta name="twitter:title" content="My QR" />
            <meta name="twitter:description" content="Быстрый доступ к QR коду" />
            <meta name="twitter:image" content="/icons/myqr.png" />
            <meta name="twitter:creator" content="@DavidWShadow" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="My QR" />
            <meta property="og:description" content="Быстрый доступ к QR коду" />
            <meta property="og:site_name" content="My QR" />
            <meta property="og:url" content="https://my-qr.vercel.app" />
            <meta property="og:image" content="/icons/myqr.png" />
        </Head>
    );
};

export default MetaData;
