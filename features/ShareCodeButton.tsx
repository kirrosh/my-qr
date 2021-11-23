import { useAtom } from 'jotai';
import React from 'react';
import { MdShare } from 'react-icons/md';
import { Button } from 'tailwind-mobile/react';
import { AMPLITUDE_EVENTS, logEvent } from '../lib/amplitude';
import { setSrcAtom } from './atoms';

const ShareCodeButton = () => {
    const [src] = useAtom(setSrcAtom);
    const onShareClick = async () => {
        try {
            const res = await navigator.share({
                url: src
            });
            logEvent(AMPLITUDE_EVENTS.SHARE_CODE);
            console.log(res);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Button
            onClick={onShareClick}
            colors={{
                border: 'bg-secondary',
                bg: 'bg-secondary',
                activeBg: 'bg-secondary',
                activeBgDark: 'bg-secondary'
            }}
        >
            <MdShare />
        </Button>
    );
};

export default ShareCodeButton;
