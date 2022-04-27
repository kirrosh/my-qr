# My QR

Simple web application for me and my friends to scan and save qr codes during the COVID 19 pandemic. Data is stored only on user device, so there is no any back-end server.

## Purpose

Me and my friends were have to show our qr codes with vaccine certificate every day several times per day. So I decided to write simple pwa, what opens my code with just one click.

I also added qr scanner from file and camera.

Personally I use this app for any interaction with qr-codes.

## Tech Stack

- Nextjs with [Next-pwa](https://github.com/shadowwalker/next-pwa)
- Mobile ui with [Tailwind](https://tailwindcss.com/), tailwind-mobile [(Konsta)](https://github.com/konstaui/konsta), [Swiper](https://swiperjs.com/)
- Best react state lib [Jotai](https://jotai.org/) with persistence in local storage
- Analitics [Amplitude](https://github.com/amplitude/Amplitude-JavaScript), [Sentry](https://sentry.io/),
- Some other libs for scan qr, camera, etc.
