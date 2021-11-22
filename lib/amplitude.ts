import amplitude from 'amplitude-js';
import { v4 } from 'uuid';

export enum AMPLITUDE_EVENTS {
    ADD_CODE = 'ADD_CODE',
    EDIT_CODE = 'EDIT_CODE',
    DELETE_CODE = 'DELETE_CODE',
    OPEN_POPUP = 'OPEN_POPUP',
    CLOSE_POPUP = 'CLOSE_POPUP'
}

export const initAmplitude = () => {
    const userId = v4();
    if (process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY) {
        amplitude?.getInstance().init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY, userId);
    }
};

export const logEvent = (event: AMPLITUDE_EVENTS, data?: Record<string, any>) => {
    amplitude?.getInstance().logEvent(event, data);
};
