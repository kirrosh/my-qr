import type { NextPage } from 'next'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import React from 'react'
import { Page, Fab } from 'konsta/react'
import { useAtom } from 'jotai'
import { MdAdd, MdCameraAlt, MdInfo } from 'react-icons/md'
import { Pagination } from 'swiper'
import { useRouter } from 'next/dist/client/router'
import { activeCodeIndexAtom, savedCodesAtom } from 'features/atoms'
import CodeContent from 'features/home/ui/CodeContent'
import { ROUTES } from 'lib/router'
import { Footer } from 'features/layout'

const Home: NextPage = () => {
  const [codes] = useAtom(savedCodesAtom)
  const [activeIndex, setActiveIndex] = useAtom(activeCodeIndexAtom)
  const { push } = useRouter()

  return (
    <Page>
      <div className="flex flex-col justify-between w-full h-full">
        <div className="grid flex-1 place-items-center">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="w-full"
            initialSlide={activeIndex}
            scrollbar={{ draggable: true }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex)
            }}
          >
            {codes.map((code) => (
              <SwiperSlide className="grid place-items-center" key={code.id}>
                <CodeContent code={code} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Footer />
      </div>
      <Fab
        className="fixed z-20 left-4-safe bottom-16-safe"
        icon={<MdInfo />}
        onClick={() => push(ROUTES.HOME)}
        colors={{
          bg: 'bg-emerald-700',
          activeBg: 'bg-emerald-800',
        }}
      />
      <Fab
        className="fixed z-20 transform -translate-x-1/2 left-1/2 bottom-16-safe"
        icon={<MdAdd />}
        text="Add"
        onClick={() => push(ROUTES.FORM)}
      />
      <Fab
        icon={<MdCameraAlt />}
        className="fixed z-20 right-4-safe bottom-16-safe"
        onClick={() => push(ROUTES.CAMERA)}
      />
    </Page>
  )
}

export default Home
