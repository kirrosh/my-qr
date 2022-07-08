import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import React, { FC, useEffect, useState } from 'react'
import { App, Link, Navbar, Page, Popup } from 'tailwind-mobile/react'
import { initAmplitude } from '../lib/amplitude'
import { initSentry } from '../lib/sentry'
import { useRouter } from 'next/dist/client/router'
import MetaData from 'features/MetaData'
import { Home } from 'features/home'
import { ROUTES } from 'lib/router'

initSentry()

function MyApp({ Component, pageProps, router }: AppProps) {
  React.useEffect(() => {
    initAmplitude()
  }, [])
  const { pathname } = router

  if (pathname === ROUTES.ABOUT) {
    return <Component {...pageProps} />
  }

  return (
    <App theme="ios" dark>
      <AnimatedPopup>
        <Component {...pageProps} />
      </AnimatedPopup>
    </App>
  )
}

const AnimatedPopup: FC = ({ children }) => {
  const { push, pathname } = useRouter()
  const show = pathname !== ROUTES.HOME

  return (
    <>
      <MetaData />
      <Home />
      <Popup opened={show} onBackdropClick={() => push(ROUTES.HOME)}>
        <Page>
          <Navbar
            right={
              <Link navbar onClick={() => push(ROUTES.HOME)}>
                Close
              </Link>
            }
          />
          {pathname !== ROUTES.HOME && children}
        </Page>
      </Popup>
    </>
  )
}

export default MyApp
