import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { Block, List, ListButton, ListInput } from 'tailwind-mobile/react';
import { codeInFormAtom, setSrcAtom, setTitleAtom } from 'features/atoms';
import QRCodeFileUpload from './QRCodeFileUpload';
import QRCode from 'qrcode.react';
import { MdCameraAlt } from 'react-icons/md';
import { useSubmitComponent } from './useSubmitComponent';
import { useRouter } from 'next/dist/client/router';
import { ROUTES } from 'lib/router';

const AddForm = () => {
    const [url, setUrl] = useAtom(setSrcAtom);
    const [title, setTitle] = useAtom(setTitleAtom);
    const [_, setCode] = useAtom(codeInFormAtom);
    const submitComponent = useSubmitComponent();
    const { push } = useRouter();

    const onScanWithCameraClick = () => {
        push(ROUTES.CAMERA);
    };

    useEffect(() => {
        return () => setCode();
    }, []);

    return (
        <>
            <List inset>
                <ListInput
                    required
                    label="Name"
                    floatingLabel
                    type="text"
                    placeholder="Name"
                    value={title}
                    // @ts-ignore
                    onChange={(e) => setTitle(e.target.value)}
                />
                <ListInput
                    required
                    label="Text"
                    floatingLabel
                    type="text"
                    placeholder="http:// ..."
                    value={url}
                    // @ts-ignore
                    onChange={(e) => setUrl(e.target.value)}
                />
                <QRCodeFileUpload src={url} setSrc={setUrl} />
                <ListButton onClick={onScanWithCameraClick}>
                    <MdCameraAlt />
                    &nbsp;Scan QR code with camera
                </ListButton>
            </List>
            <Block>{submitComponent}</Block>
            <Block>
                {/* <p>
                    Введенные данные сохраняются <b>только</b> на вашем устройстве!
                    <br />
                    Добавьте приложение на главный экран, тогда им можно будет пользоваться
                    <b> без подключения к интернету.</b>
                </p> */}
            </Block>
            <Block className="grid place-items-center">
                {url && <QRCode value={url} level="Q" size={100} bgColor="#212121" fgColor="#efeff4" />}
            </Block>
            {/* <Block>
                В QR код можно поместить любой текст. Обычно это ссылка на какой-нибудь вебсайт.
                <br />
                Например:{' '}
                <a className="underline cursor-pointer" onClick={() => setUrl('https://my-qr.vercel.app')}>
                    https://my-qr.vercel.app
                </a>
            </Block> */}
        </>
    );
};

export default AddForm;
