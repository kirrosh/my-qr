import { useAtom } from 'jotai';
import React from 'react';
import { MdAdd } from 'react-icons/md';
import { showAddCodeAtom } from './atoms';
import { v4 } from 'uuid';

const AddCode = () => {
    const [popupOpened, setPopupOpened] = useAtom(showAddCodeAtom);

    return (
        <div
            className="w-8/12 py-9 grid place-items-center gap-4 rounded-md bg-blue-500 text-white"
            onClick={() => setPopupOpened(true)}
        >
            <MdAdd />
        </div>
    );
};

export default AddCode;
