import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export type ICode = {
    id: string;
    title: string;
    src: string;
};
// Popup form atoms
export const showCodeFormAtom = atom(false, (get, set, value: boolean) => {
    set(codeInFormAtom, undefined);
    set(showCodeFormAtom, value);
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
        const codes = get(savedCodesAtom);
        set(savedCodesAtom, [...codes, qr]);
    }
);
export const editCodeAtom = atom(
    (get) => get(savedCodesAtom),
    (get, set, qr: ICode) => {
        const codes = get(savedCodesAtom);
        const newCodes = codes.map((code) => (code.id === qr.id ? qr : code));
        set(savedCodesAtom, newCodes);
    }
);
export const deleteCodeAtom = atom(
    (get) => get(savedCodesAtom),
    (get, set, id: string) => {
        const codes = get(savedCodesAtom);
        set(
            savedCodesAtom,
            codes.filter((c) => c.id !== id)
        );
    }
);
