import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'

export const initSentry = () => {
  Sentry.init({
    dsn: 'https://1868c08f577f46a6abd15065e99fafdb@o1076876.ingest.sentry.io/6079198',
    integrations: [
      new Sentry.Integrations.Breadcrumbs({
        console: false,
      }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  })
}

// Sentry.init({
//     ...initOptions,
//     integrations: [
//       new Sentry.Integrations.Breadcrumbs({
//         console: false
//       })
//     ],
//     tracesSampler: () => (process.env.NODE_ENV === 'production' ? 1 : 0.2)
//   })
