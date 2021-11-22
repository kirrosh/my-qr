import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { AMPLITUDE_EVENTS, logEvent } from '../lib/amplitude';

export type ICode = {
    id: string;
    title: string;
    src: string;
};
// Popup form atoms
export const showCodeFormAtom = atom(false, (get, set, value: boolean) => {
    set(codeInFormAtom, undefined);
    set(showCodeFormAtom, value);
    if (value) {
        logEvent(AMPLITUDE_EVENTS.OPEN_POPUP);
    } else {
        logEvent(AMPLITUDE_EVENTS.CLOSE_POPUP);
    }
});
export const codeInFormAtom = atom<Partial<ICode> | undefined>(undefined);
export const setTitleAtom = atom(
    (get) => get(codeInFormAtom)?.title || '',
    (get, set, title: string) => {
        const code = get(codeInFormAtom);
        set(codeInFormAtom, { ...code, title });
    }
);
export const setSrcAtom = atom(
    (get) => get(codeInFormAtom)?.src || '',
    (get, set, src: string) => {
        const code = get(codeInFormAtom);
        set(codeInFormAtom, { ...code, src });
    }
);

// List of saved codes atoms
export const savedCodesAtom = atomWithStorage<ICode[]>('qr_codes', []);
export const addCodeAtom = atom(
    (get) => get(savedCodesAtom),
    (get, set, qr: ICode) => {
        logEvent(AMPLITUDE_EVENTS.ADD_CODE);
        const codes = get(savedCodesAtom);
        set(savedCodesAtom, [...codes, qr]);
    }
);
export const editCodeAtom = atom(
    (get) => get(savedCodesAtom),
    (get, set, qr: ICode) => {
        logEvent(AMPLITUDE_EVENTS.EDIT_CODE);
        const codes = get(savedCodesAtom);
        const newCodes = codes.map((code) => (code.id === qr.id ? qr : code));
        set(savedCodesAtom, newCodes);
    }
);
export const deleteCodeAtom = atom(
    (get) => get(savedCodesAtom),
    (get, set, id: string) => {
        logEvent(AMPLITUDE_EVENTS.DELETE_CODE);
        const codes = get(savedCodesAtom);
        set(
            savedCodesAtom,
            codes.filter((c) => c.id !== id)
        );
    }
);
