import type { NextPage } from 'next';
import Head from 'next/head';
import QRCode from 'qrcode.react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import React, { useState } from 'react';
import { Page, Navbar, Block, List, Button, Popup, Link, ListInput, Fab } from 'tailwind-mobile/react';
import QRCodeFileUpload from '../features/QRCodeFileUpload';
import CodeContent from '../features/CodeContent';
import AddCode from '../features/AddCode';
import { useAtom } from 'jotai';
import { addCodeAtom, showAddCodeAtom } from '../features/atoms';
import { v4 } from 'uuid';
import { MdAdd } from 'react-icons/md';

const Placeholder: React.FC = ({ children }) => {
    return <div className=" m-5">{children}</div>;
};

const Home: NextPage = () => {
    const [popupOpened, setPopupOpened] = useAtom(showAddCodeAtom);
    const [codes, addCode] = useAtom(addCodeAtom);
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const onAddClick = () => {
        addCode({
            src: url,
            title,
            id: v4()
        });
        setPopupOpened(false);
    };
    return (
        <Page>
            <Head>
                <title>My QR</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Block className="w-full h-full">
                <Swiper
                    className="w-full h-full"
                    spaceBetween={50}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {codes.map((code) => (
                        <SwiperSlide className="grid place-items-center" key={code.id}>
                            <CodeContent src={code.src} title={code.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Block>
            <Fab
                className="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
                icon={<MdAdd />}
                onClick={() => setPopupOpened(true)}
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
                    <Block>
                        <Button onClick={onAddClick}>Add</Button>
                    </Block>
                    <List hairlines={true}>
                        <ListInput
                            label="Title"
                            floatingLabel
                            type="text"
                            placeholder="Title"
                            value={title}
                            // @ts-ignore
                            onChange={(e) => setTitle(e.target.value)}
                        />
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
                        <QRCodeFileUpload src={url} setSrc={setUrl} />
                    </Block>
                    <Block>
                        <Placeholder>{url && <QRCode value={url} level="Q" size={200} />}</Placeholder>
                    </Block>
                </Page>
            </Popup>
        </Page>
    );
};

export default Home;
