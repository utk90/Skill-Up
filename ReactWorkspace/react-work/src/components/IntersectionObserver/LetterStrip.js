import React from 'react'
import './Letter.css'

const LetterStrip = ({ letterInView }) => {
    console.log('LETTER STRIP');
    return (
        <>
            {Array(26).fill(0).map((item, index) => <div key={65 + index} className={letterInView === String.fromCharCode(65 + index) ? 'active' : ''} > {String.fromCharCode(65 + index)}</div >)
            }
        </>
    )
}

export default LetterStrip