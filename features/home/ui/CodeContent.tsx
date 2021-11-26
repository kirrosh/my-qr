import React from 'react';
import QRCode from 'qrcode.react';
import { Button } from 'tailwind-mobile/react';
import { MdModeEdit } from 'react-icons/md';
import { useAtom } from 'jotai';
import { codeInFormAtom, ICode } from '../../atoms';
import DeleteCodeButton from './DeleteCodeButton';
import ShareCodeButton from '../../form/ui/ShareCodeButton';
import { useRouter } from 'next/dist/client/router';
import { ROUTES } from 'lib/router';

type Props = {
    code: ICode;
};

const DEFAULT_SIZE = 200;

const CodeContent = ({ code }: Props) => {
    const [__, setCodeInForm] = useAtom(codeInFormAtom);
    const { push } = useRouter();
    const onEditClick = () => {
        push(ROUTES.FORM);
        setCodeInForm(code);
    };
    return (
        <div className="w-full grid place-items-center">
            <div className="grid p-4 gap-4 rounded-md">
                <div className="grid place-items-center text-3xl">{code.title}</div>
                <div
                    style={{
                        width: DEFAULT_SIZE,
                        height: DEFAULT_SIZE
                    }}
                >
                    <QRCode value={code.src} level="Q" size={DEFAULT_SIZE} bgColor="#212121" fgColor="#efeff4" />
                </div>
                <div className="flex gap-4">
                    <DeleteCodeButton id={code.id} />
                    <ShareCodeButton code={code} />
                    <Button onClick={onEditClick}>
                        <MdModeEdit />
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default CodeContent;
