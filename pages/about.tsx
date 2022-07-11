import CodeContent from 'features/home/ui/CodeContent'
import { Footer } from 'features/layout/ui/Footer'
import Link from 'next/link'

export default function About() {
  return (
    <div className="relative flex flex-col justify-between min-h-screen overflow-hidden bg-page-ios-dark">
      <div className="relative flex flex-1 pt-6 pb-16 sm:pb-24">
        <main className="flex flex-col w-full gap-16 px-4 mx-auto mt-16 max-w-7xl sm:mt-24 md:flex-row">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-100 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Scan and save any</span>{' '}
              <span className="block text-primary xl:inline">QR codes</span>
            </h1>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Don&apos;t need to install anything to scan QR codes. Just use
              your camera with this website. Go to the App and save it to your{' '}
              <b className="text-primary">home screen</b> and you can scan QR
              codes anytime offline.
            </p>
            <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/">
                  <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white border border-transparent rounded-md bg-primary hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Open
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mockup-phone border-primary">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <div className="flex flex-col justify-between w-full h-full">
                    <div className="grid flex-1 place-items-center">
                      <CodeContent
                        demo
                        code={{
                          id: 'my-qr-app',
                          src: 'https://my-qr.vercel.app/',
                          title: 'My QR',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
