import React from 'react'
import './Accordian.css'

const ResizeBucket = ({ isOpen, name, handleBucket, index }) => {
    return (
        <div className={isOpen ? 'open-container' : 'close-container'} onClick={() => handleBucket(index)}>{name}</div>
    )
}

export default ResizeBucket