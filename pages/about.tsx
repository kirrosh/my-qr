import { Footer } from 'features/layout'
import Link from 'next/link'

export default function About() {
  return (
    <div className="relative flex flex-col justify-between min-h-screen overflow-hidden bg-page-ios-dark">
      <div className="relative grid flex-1 pt-6 pb-16 sm:pb-24 place-items-center">
        <main className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-100 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Scan and save any</span>{' '}
              <span className="block text-indigo-600 xl:inline">QR codes</span>
            </h1>
            {/* <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Description
            </p> */}
            <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link href="/">
                  <a className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                    Go to app
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
