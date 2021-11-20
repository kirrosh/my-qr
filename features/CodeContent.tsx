import React from 'react';
import QRCode from 'qrcode.react';

type Props = {
    src: string;
    title: string;
};
const CodeContent = ({ src, title }: Props) => {
    return (
        <div className="w-8/12 py-4 grid place-items-center gap-4 rounded-md bg-blue-500 text-white">
            <div>{title}</div>
            <QRCode value={src} level="Q" size={200} />
        </div>
    );
};

export default CodeContent;
