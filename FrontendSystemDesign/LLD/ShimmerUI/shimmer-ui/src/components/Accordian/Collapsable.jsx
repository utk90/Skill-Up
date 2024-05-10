import React from 'react'
import './styles.css'

const Collapsable = ({ isOpen, children, handler }) => {
    return (
        <>
            <h1>{children.title}</h1>
            <div className={`${isOpen ? 'open-box': 'close-box'}`} onClick={handler}>
                {children.description}
            </div>
        </>
    )
}

export default Collapsable