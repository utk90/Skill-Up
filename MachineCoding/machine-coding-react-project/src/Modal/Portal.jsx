import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import './Modal.css';

const Portal = ({ setIsOpen }) => {
    useEffect(() => {
        const portalContainer = document.querySelector('.overlay-container');
        portalContainer.addEventListener('click', () => setIsOpen(false));
    }, [])
    return ReactDOM.createPortal(
        <div className='portal-container' />
        , document.getElementById('portal'))
}

export default Portal