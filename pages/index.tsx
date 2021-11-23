import type { NextPage } from 'next';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import React, { useEffect } from 'react';
import { Page, Fab } from 'tailwind-mobile/react';
import CodeContent from '../features/CodeContent';
import { useAtom } from 'jotai';
import { savedCodesAtom, showCodeFormAtom } from '../features/atoms';
import { MdAdd } from 'react-icons/md';
import FormPopup from '../features/FormPopup';
import MetaData from '../features/MetaData';
import { Pagination } from 'swiper';

const Home: NextPage = () => {
    const [popupOpened, setPopupOpened] = useAtom(showCodeFormAtom);
    const [codes] = useAtom(savedCodesAtom);

    useEffect(() => {
        if (codes.length === 0) {
            setPopupOpened(true);
        }
    }, []);

    return (
        <Page className="bg-[#efeff4]">
            <FormPopup />
            <MetaData />

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
                            <CodeContent src={code.src} title={code.title} id={code.id} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Fab
                className="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
                icon={<MdAdd />}
                text="Добавить"
                onClick={() => setPopupOpened(true)}
            />
        </Page>
    );
};

export default Home;
