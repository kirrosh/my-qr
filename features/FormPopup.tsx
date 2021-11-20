import { useAtom } from 'jotai';
import React from 'react';
import { Block, Button, Link, List, ListInput, Navbar, Page, Popup } from 'tailwind-mobile/react';
import { v4 } from 'uuid';
import { addCodeAtom, codeInFormAtom, editCodeAtom, setSrcAtom, setTitleAtom, showCodeFormAtom } from './atoms';
import QRCodeFileUpload from './QRCodeFileUpload';
import QRCode from 'qrcode.react';

const Placeholder: React.FC = ({ children }) => {
    return <div className=" m-5">{children}</div>;
};
const useSubmitComponent = () => {
    const [code] = useAtom(codeInFormAtom);
    const [_, editCode] = useAtom(editCodeAtom);
    const [__, addCode] = useAtom(addCodeAtom);
    const [___, setPopupOpened] = useAtom(showCodeFormAtom);
    if (code?.id) {
        const onEditClick = () => {
            editCode({
                src: code.src || '',
                title: code.title || '',
                id: code.id || ''
            });
            setPopupOpened(false);
        };
        return <Button onClick={onEditClick}>Save</Button>;
    }
    const onAddClick = () => {
        addCode({
            title: code?.title || '',
            src: code?.src || '',
            id: v4()
        });
        setPopupOpened(false);
    };
    return <Button onClick={onAddClick}>Add</Button>;
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
                    title="Add QR"
                    right={
                        <Link navbar onClick={() => setPopupOpened(false)}>
                            Close
                        </Link>
                    }
                />
                <Block>
                    {/* <Button onClick={onAddClick}>Add</Button> */}
                    {submitComponent}
                </Block>
                <List hairlines={true}>
                    <ListInput
                        label="Title"
                        floatingLabel
                        type="text"
                        placeholder="Title"
                        value={title}
                        // @ts-ignore
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <ListInput
                        label="Url"
                        floatingLabel
                        type="text"
                        placeholder="url"
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
