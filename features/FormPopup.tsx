import { useAtom } from 'jotai';
import React from 'react';
import { Block, Button, Link, List, ListInput, Navbar, Page, Popup } from 'tailwind-mobile/react';
import { v4 } from 'uuid';
import { addCodeAtom, codeInFormAtom, editCodeAtom, setSrcAtom, setTitleAtom, showCodeFormAtom } from './atoms';
import QRCodeFileUpload from './QRCodeFileUpload';
import QRCode from 'qrcode.react';

const INACTIVE_BUTTON_COLORS = {
    text: 'text-red-500',
    border: 'border-red-500',
    bg: 'bg-red-500',
    activeBg: 'active:bg-red-500',
    activeBgDark: 'active:bg-red-600',
    touchRipple: 'touch-ripple-red-500'
};

const Placeholder: React.FC = ({ children }) => {
    return <div className="h-[100px] w-[100px]">{children}</div>;
};
const useSubmitComponent = () => {
    const [code] = useAtom(codeInFormAtom);
    const [_, editCode] = useAtom(editCodeAtom);
    const [__, addCode] = useAtom(addCodeAtom);
    const [___, setPopupOpened] = useAtom(showCodeFormAtom);
    const disabled = !(code?.src && code.title);
    if (code?.id) {
        const onEditClick = () => {
            if (disabled) {
                return;
            }
            editCode({
                src: code.src || '',
                title: code.title || '',
                id: code.id || ''
            });
            setPopupOpened(false);
        };
        return (
            <Button onClick={onEditClick} colors={disabled ? INACTIVE_BUTTON_COLORS : {}} large>
                Сохранить
            </Button>
        );
    }
    const onAddClick = () => {
        if (disabled) {
            return;
        }
        addCode({
            title: code?.title || '',
            src: code?.src || '',
            id: v4()
        });
        setPopupOpened(false);
    };
    return (
        <Button onClick={onAddClick} colors={disabled ? INACTIVE_BUTTON_COLORS : {}} large>
            Добавить
        </Button>
    );
};

const FormPopup = () => {
    const [popupOpened, setPopupOpened] = useAtom(showCodeFormAtom);
    const [url, setUrl] = useAtom(setSrcAtom);
    const [title, setTitle] = useAtom(setTitleAtom);
    const submitComponent = useSubmitComponent();

    return (
        <Popup opened={popupOpened} onBackdropClick={() => setPopupOpened(false)}>
            <Page>
                <Navbar
                    title="Заполните поля"
                    right={
                        <Link navbar onClick={() => setPopupOpened(false)}>
                            Закрыть
                        </Link>
                    }
                />

                <List inset>
                    <ListInput
                        required
                        label="Название кода"
                        floatingLabel
                        type="text"
                        placeholder="Название"
                        value={title}
                        // @ts-ignore
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <ListInput
                        required
                        label="Содержание кода"
                        floatingLabel
                        type="text"
                        placeholder="http:// ..."
                        value={url}
                        // @ts-ignore
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <QRCodeFileUpload src={url} setSrc={setUrl} />
                </List>
                <Block>{submitComponent}</Block>
                <Block>
                    <p>
                        Введенные данные сохраняются <b>только</b> на вашем устройстве!
                        <br />
                        Добавьте приложение на главный экран, тогда им можно будет пользоваться
                        <b> без подключения к интернету.</b>
                    </p>
                </Block>
                <Block>
                    В QR код можно поместить любой текст. Обычно это ссылка на какой-нибудь вебсайт.
                    <br />
                    Например:{' '}
                    <a className="underline cursor-pointer" onClick={() => setUrl('https://my-qr.vercel.app')}>
                        https://my-qr.vercel.app
                    </a>
                </Block>

                <Block className="grid place-items-center">
                    <Placeholder>{url && <QRCode value={url} level="Q" size={100} />}</Placeholder>
                </Block>
            </Page>
        </Popup>
    );
};

export default FormPopup;
