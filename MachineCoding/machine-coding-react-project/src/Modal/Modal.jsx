import React, { useState } from 'react'
import './Modal.css';
import Portal from './Portal';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={'main-container'}>
                <button onClick={() => setIsOpen(false)} disabled={!isOpen}>Close</button>
                <button onClick={() => setIsOpen(true)} disabled={isOpen}>Open</button>
            </div>
            {isOpen && <Portal setIsOpen={setIsOpen} />}
            {isOpen && <div className='overlay-container'></div>}
        </>
    )
}

export default Modal