import React from 'react';
import QRCode from 'qrcode.react';
import { Button } from 'tailwind-mobile/react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { useAtom } from 'jotai';
import { deleteCodeAtom } from './atoms';

type Props = {
    src: string;
    title: string;
    id: string;
};
const CodeContent = ({ src, title, id }: Props) => {
    const [_, deleteCode] = useAtom(deleteCodeAtom);
    return (
        <div className="w-8/12 grid place-items-center">
            <div className="grid p-4 gap-4 rounded-md">
                <div className="grid place-items-center text-3xl">{title}</div>
                <div
                    style={{
                        width: 200,
                        height: 200
                    }}
                >
                    <QRCode value={src} level="Q" size={200} />
                </div>
                <div className="flex gap-4">
                    <Button
                        onClick={() => deleteCode(id)}
                        colors={{
                            //   text: 'text-red-500',
                            border: 'border-red-500',
                            bg: 'bg-red-500',
                            activeBg: 'active:bg-red-500',
                            activeBgDark: 'active:bg-red-600'
                        }}
                    >
                        <MdDelete />
                    </Button>
                    <Button>
                        <MdModeEdit />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CodeContent;
