import type { NextPage } from 'next';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import React from 'react';
import { Page, Fab } from 'tailwind-mobile/react';
import { useAtom } from 'jotai';
import { MdAdd, MdCameraAlt, MdShare } from 'react-icons/md';
import { Pagination } from 'swiper';
import { useRouter } from 'next/dist/client/router';
import { savedCodesAtom } from 'features/atoms';
import CodeContent from 'features/home/ui/CodeContent';
import { logEvent, AMPLITUDE_EVENTS } from 'lib/amplitude';
import { ROUTES } from 'lib/router';

const Home: NextPage = () => {
    const [codes] = useAtom(savedCodesAtom);
    const { push } = useRouter();

    const onShareAppClick = async () => {
        try {
            await navigator.share({
                url: '/'
            });
            logEvent(AMPLITUDE_EVENTS.SHARE_APP);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Page>
            <div className="w-full h-full grid place-items-center">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="w-full"
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {codes.map((code) => (
                        <SwiperSlide className="grid place-items-center" key={code.id}>
                            <CodeContent code={code} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Fab
                className="fixed left-4-safe bottom-4-safe z-20"
                icon={<MdShare />}
                onClick={onShareAppClick}
                colors={{ bg: 'bg-secondary', activeBg: 'active:bg-secondary' }}
            />
            <Fab
                className="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
                icon={<MdAdd />}
                text="Add"
                onClick={() => push(ROUTES.FORM)}
            />
            <Fab
                icon={<MdCameraAlt />}
                className="fixed right-4-safe bottom-4-safe z-20"
                onClick={() => push(ROUTES.CAMERA)}
            />
        </Page>
    );
};

export default Home;
