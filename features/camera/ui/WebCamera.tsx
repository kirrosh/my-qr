import { setSrcAtom } from 'features/atoms';
import { atom, useAtom } from 'jotai';
import { ROUTES } from 'lib/router';
import { useRouter } from 'next/dist/client/router';
import QrScanner from 'qr-scanner';
import React, { useEffect, useRef } from 'react';
import { MdAdd, MdOpenInNew } from 'react-icons/md';
import { Block, Fab } from 'tailwind-mobile/react';
import isURL from 'validator/lib/isURL';

const cameraResultAtom = atom('', (get, set, value) => {
    const current = get(cameraResultAtom);
    if (current !== value) {
        set(cameraResultAtom, value);
    }
});

const WebCamera = () => {
    const { push } = useRouter();
    const videoRef = useRef<HTMLVideoElement>(null);
    const [cameraResult, setCameraResult] = useAtom(cameraResultAtom);
    const [src, setSrc] = useAtom(setSrcAtom);
    const scannerRef = useRef<QrScanner>();

    const onSaveClick = () => {
        setSrc(cameraResult);
        push(ROUTES.FORM);
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
        setCameraResult('');
        scannerRef.current?.start();
        return () => {
            setCameraResult('');
            scannerRef.current?.stop();
        };
    }, [scannerRef.current]);
    return (
        <>
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
                    text="Add"
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
        </>
    );
};

export default WebCamera;
