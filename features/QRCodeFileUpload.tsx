import QrScanner from 'qr-scanner';
import React, { useState } from 'react';
import { Block } from 'tailwind-mobile/react';
type Props = {
    src: string;
    setSrc: (src: string) => void;
};
const QRCodeFileUpload = ({ src, setSrc }: Props) => {
    const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        QrScanner.scanImage(file)
            .then((result) => setSrc(result))
            .catch((e) => alert('QR код не обнаружен :('));
    };
    return <input type="file" onChange={onUpload} />;
};

export default QRCodeFileUpload;
