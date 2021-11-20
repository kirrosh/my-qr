import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export type QR_Data = {
    title: string;
    src: string;
    id: string;
};

export const showAddCodeAtom = atom(false);
export const savedCodes = atomWithStorage<QR_Data[]>('qr_codes', []);

export const addCodeAtom = atom(
    (get) => get(savedCodes),
    (get, set, qr: QR_Data) => {
        const codes = get(savedCodes);
        set(savedCodes, [...codes, qr]);
    }
);
