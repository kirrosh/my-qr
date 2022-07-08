import type { NextPage } from 'next'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import React from 'react'
import { Page, Fab } from 'tailwind-mobile/react'
import { useAtom } from 'jotai'
import { MdAdd, MdCameraAlt, MdShare } from 'react-icons/md'
import { Pagination } from 'swiper'
import { useRouter } from 'next/dist/client/router'
import { activeCodeIndexAtom, savedCodesAtom } from 'features/atoms'
import CodeContent from 'features/home/ui/CodeContent'
import { logEvent, AMPLITUDE_EVENTS } from 'lib/amplitude'
import { ROUTES } from 'lib/router'

const Home: NextPage = () => {
  const [codes] = useAtom(savedCodesAtom)
  const [activeIndex, setActiveIndex] = useAtom(activeCodeIndexAtom)
  const { push } = useRouter()

  const onShareAppClick = async () => {
    try {
      await navigator.share({
        url: '/',
      })
      logEvent(AMPLITUDE_EVENTS.SHARE_APP)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Page>
      <div className="grid w-full h-full place-items-center">
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
      <Fab
        className="fixed z-20 left-4-safe bottom-4-safe"
        icon={<MdShare />}
        onClick={onShareAppClick}
        colors={{ bg: 'bg-secondary', activeBg: 'active:bg-secondary' }}
      />
      <Fab
        className="fixed z-20 transform -translate-x-1/2 left-1/2 bottom-4-safe"
        icon={<MdAdd />}
        text="Add"
        onClick={() => push(ROUTES.FORM)}
      />
      <Fab
        icon={<MdCameraAlt />}
        className="fixed z-20 right-4-safe bottom-4-safe"
        onClick={() => push(ROUTES.CAMERA)}
      />
    </Page>
  )
}

export default Home
