import { atom, useAtom } from 'jotai';
import QrScanner from 'qr-scanner';
import React, { useEffect, useRef } from 'react';
import { MdAdd, MdOpenInNew } from 'react-icons/md';
import { Popup, Page, Navbar, Link, Block, Fab } from 'tailwind-mobile/react';
import isURL from 'validator/lib/isURL';
import { setSrcAtom, showCodeFormAtom, webCameraPopupAtom } from './atoms';

const cameraResultAtom = atom('', (get, set, value) => {
    const current = get(cameraResultAtom);
    if (current !== value) {
        set(cameraResultAtom, value);
    }
});

const WebCameraPopup = () => {
    const [popupOpened, setPopupOpened] = useAtom(webCameraPopupAtom);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [cameraResult, setCameraResult] = useAtom(cameraResultAtom);
    const [editPopupOpened, setEditPopupOpened] = useAtom(showCodeFormAtom);
    const [src, setSrc] = useAtom(setSrcAtom);
    const scannerRef = useRef<QrScanner>();

    const onSaveClick = () => {
        setEditPopupOpened(true);
        setPopupOpened(false);
        setSrc(cameraResult);
    };

    useEffect(() => {
        if (!videoRef.current) {
            return;
        }
        scannerRef.current = new QrScanner(videoRef.current, (result) => {
            setCameraResult(result);
        });
    }, [videoRef.current]);

    useEffect(() => {
        if (!popupOpened) {
            scannerRef.current?.stop();
        } else {
            setCameraResult('');
            scannerRef.current?.start();
        }
    }, [popupOpened]);
    return (
        <Popup opened={popupOpened} onBackdropClick={() => setPopupOpened(false)}>
            <Page>
                <Navbar
                    title="Сканирование"
                    right={
                        <Link navbar onClick={() => setPopupOpened(false)}>
                            Закрыть
                        </Link>
                    }
                />
                <Block>
                    <video ref={videoRef} />
                </Block>
                <Block>
                    {isURL(cameraResult) ? (
                        <a href={cameraResult} target="_blank" className="underline">
                            {cameraResult}
                        </a>
                    ) : (
                        <p>{cameraResult}</p>
                    )}
                </Block>
                {cameraResult && (
                    <Fab
                        className="fixed left-1/2 bottom-4-safe transform -translate-x-1/2 z-20"
                        icon={<MdAdd />}
                        text="Добавить"
                        onClick={onSaveClick}
                    />
                )}
                {isURL(cameraResult) && (
                    <Fab
                        className="fixed right-4-safe bottom-4-safe z-20"
                        colors={{ bg: 'bg-secondary', activeBg: 'active:bg-secondary' }}
                        icon={<MdOpenInNew />}
                        href={cameraResult}
                        //@ts-ignore
                        target="_blank"
                    />
                )}
            </Page>
        </Popup>
    );
};

export default WebCameraPopup;
