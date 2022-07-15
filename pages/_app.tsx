import 'styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import React, { PropsWithChildren } from 'react'
import { initAmplitude } from 'lib/amplitude'
import { initSentry } from 'lib/sentry'
import { ROUTES } from 'lib/router'
import dynamic from 'next/dynamic'
import MetaData from 'features/MetaData'

//@ts-ignore
const App = dynamic(() => import('konsta/react').then((mod) => mod.App))

const AnimatedPopup = dynamic<PropsWithChildren>(() =>
  import('features/layout/ui/AnimatedPopup')
)

initSentry()

function MyApp({ Component, pageProps, router }: AppProps) {
  React.useEffect(() => {
    initAmplitude()
  }, [])
  const { pathname } = router

  if (pathname === ROUTES.HOME) {
    return (
      <>
        <MetaData />
        <Component {...pageProps} />
      </>
    )
  }

  return (
    <App theme="ios" dark>
      <AnimatedPopup>
        <Component {...pageProps} />
      </AnimatedPopup>
    </App>
  )
}

export default MyApp
