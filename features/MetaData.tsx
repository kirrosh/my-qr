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
            <meta name="theme-color" content="#000000" />

            <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
            <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
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

            {/* <link rel='apple-touch-startup-image' href='/images/apple_splash_2048.png' sizes='2048x2732' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1668.png' sizes='1668x2224' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1536.png' sizes='1536x2048' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1125.png' sizes='1125x2436' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_1242.png' sizes='1242x2208' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_750.png' sizes='750x1334' />
<link rel='apple-touch-startup-image' href='/images/apple_splash_640.png' sizes='640x1136' /> */}
        </Head>
    );
};

export default MetaData;
