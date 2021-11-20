import type { NextPage } from 'next';
import Head from 'next/head';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import React from 'react';
import { Page, Fab } from 'tailwind-mobile/react';
import CodeContent from '../features/CodeContent';
import { useAtom } from 'jotai';
import { savedCodesAtom, showCodeFormAtom } from '../features/atoms';
import { MdAdd } from 'react-icons/md';
import FormPopup from '../features/FormPopup';

const Home: NextPage = () => {
    const [popupOpened, setPopupOpened] = useAtom(showCodeFormAtom);
    const [codes] = useAtom(savedCodesAtom);

    return (
        <Page>
            <FormPopup />
            <Head>
                <title>My QR</title>
                <meta name="description" content="Save your QR" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-full h-full">
                <Swiper
                    className="w-full h-full"
                    spaceBetween={50}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {codes.map((code) => (
                        <SwiperSlide className="grid place-items-center" key={code.id}>
                            <CodeContent src={code.src} title={code.title} id={code.id} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Fab
                className="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
                icon={<MdAdd />}
                onClick={() => setPopupOpened(true)}
            />
        </Page>
    );
};

export default Home;
