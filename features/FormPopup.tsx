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
    return <div className=" m-5">{children}</div>;
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
            <Button onClick={onEditClick} colors={disabled ? INACTIVE_BUTTON_COLORS : {}}>
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
        <Button onClick={onAddClick} colors={disabled ? INACTIVE_BUTTON_COLORS : {}}>
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
                    title="QR"
                    right={
                        <Link navbar onClick={() => setPopupOpened(false)}>
                            Закрыть
                        </Link>
                    }
                />
                <Block>
                    {/* <Button onClick={onAddClick}>Add</Button> */}
                    {submitComponent}
                </Block>
                <List hairlines={true}>
                    <ListInput
                        label="Название"
                        floatingLabel
                        type="text"
                        placeholder="Название"
                        value={title}
                        // @ts-ignore
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <ListInput
                        label="Текст"
                        floatingLabel
                        type="text"
                        placeholder="Текст"
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
    );
};

export default FormPopup;
