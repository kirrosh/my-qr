import type { NextPage } from 'next';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import React, { useEffect } from 'react';
import { Page, Fab } from 'tailwind-mobile/react';
import CodeContent from '../features/CodeContent';
import { useAtom } from 'jotai';
import { savedCodesAtom, showCodeFormAtom, webCameraPopupAtom } from '../features/atoms';
import { MdAdd, MdCameraAlt, MdShare } from 'react-icons/md';
import FormPopup from '../features/FormPopup';
import MetaData from '../features/MetaData';
import { Pagination } from 'swiper';
import { AMPLITUDE_EVENTS, logEvent } from '../lib/amplitude';
import WebCameraPopup from '../features/WebCameraPopup';

const Home: NextPage = () => {
    const [popupOpened, setPopupOpened] = useAtom(showCodeFormAtom);
    const [cameraPopup, setWebCameraPopupOpened] = useAtom(webCameraPopupAtom);
    const [codes] = useAtom(savedCodesAtom);

    useEffect(() => {
        if (codes.length === 0) {
            setPopupOpened(true);
        }
    }, []);

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
            <MetaData />
            <FormPopup />
            <WebCameraPopup />

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
                text="Добавить"
                onClick={() => setPopupOpened(true)}
            />
            <Fab
                icon={<MdCameraAlt />}
                className="fixed right-4-safe bottom-4-safe z-20"
                colors={{ bg: 'bg-secondary', activeBg: 'active:bg-secondary' }}
                onClick={() => setWebCameraPopupOpened(true)}
            />
        </Page>
    );
};

export default Home;
