import type { NextPage } from 'next';
import Head from 'next/head';
import QRCode from 'qrcode.react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import React, { useState } from 'react';
import { Page, Navbar, Block, List, Button, Fab, Popup, Link, ListInput } from 'tailwind-mobile/react';
import { MdAdd } from 'react-icons/md';

const Placeholder: React.FC = ({ children }) => {
    return <div className="w-full m-5">{children}</div>;
};

const Content = ({ text }: { text: string }) => {
    return <div className="w-8/12 py-4 grid place-items-center gap-4 rounded-md bg-gray-500"></div>;
};

const Home: NextPage = () => {
    const [popupOpened, setPopupOpened] = useState(false);
    const [url, setUrl] = useState('');
    return (
        <Page>
            <Head>
                <title>My QR</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Block className="h-full">
                <Swiper
                    className="w-full h-full"
                    spaceBetween={50}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide className="grid place-items-center">
                        <Content text="1" />
                    </SwiperSlide>
                    <SwiperSlide className="grid place-items-center">
                        <Content text="2" />
                    </SwiperSlide>
                </Swiper>
            </Block>
            <Fab
                className="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
                icon={<MdAdd />}
                onClick={() => setPopupOpened(true)}
                text="Add"
                textPosition="after"
            />
            <Popup opened={popupOpened} onBackdropClick={() => setPopupOpened(false)}>
                <Page>
                    <Navbar
                        title="Add QR"
                        right={
                            <Link navbar onClick={() => setPopupOpened(false)}>
                                Close
                            </Link>
                        }
                    />
                    <List hairlines={true}>
                        <ListInput label="Title" floatingLabel type="text" placeholder="Title" />
                        <ListInput
                            label="Url"
                            floatingLabel
                            type="text"
                            placeholder="url"
                            value={url}
                            // @ts-ignore
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </List>
                    <Block>
                        <Placeholder>{url && <QRCode value={url} level="Q" size={300} />}</Placeholder>
                    </Block>
                    <Block>
                        <Button>Add</Button>
                    </Block>
                </Page>
            </Popup>
        </Page>
    );
};

export default Home;
