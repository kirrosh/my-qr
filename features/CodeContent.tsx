import React from 'react';
import QRCode from 'qrcode.react';
import { Button } from 'tailwind-mobile/react';
import { MdModeEdit } from 'react-icons/md';
import { useAtom } from 'jotai';
import { codeInFormAtom, showCodeFormAtom } from './atoms';
import DeleteCodeButton from './DeleteCodeButton';
import ShareCodeButton from './ShareCodeButton';

type Props = {
    src: string;
    title: string;
    id: string;
};

const DEFAULT_SIZE = 200;

const CodeContent = ({ src, title, id }: Props) => {
    const [__, setCodeInForm] = useAtom(codeInFormAtom);
    const [___, setPopupOpened] = useAtom(showCodeFormAtom);
    const onEditClick = () => {
        setPopupOpened(true);
        setCodeInForm({
            src,
            title,
            id
        });
    };
    return (
        <div className="w-full grid place-items-center">
            <div className="grid p-4 gap-4 rounded-md">
                <div className="grid place-items-center text-3xl">{title}</div>
                <div
                    style={{
                        width: DEFAULT_SIZE,
                        height: DEFAULT_SIZE
                    }}
                >
                    <QRCode value={src} level="Q" size={DEFAULT_SIZE} />
                </div>
                <div className="flex gap-4">
                    <DeleteCodeButton id={id} />
                    <ShareCodeButton />
                    <Button onClick={onEditClick}>
                        <MdModeEdit />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CodeContent;
