import React, { useState } from 'react'
import { data } from './data'
import Collapsable from './Collapsable'

const Accordion = () => {
    const [activeIdx, setActiveIdx] = useState(-1);

    const handleClick = (idx) => {
        setActiveIdx(idx === activeIdx ? -1 : idx);
    }

    return (
        <>
            Accordian
            <div className='accordion-container'>
                {data.map((item, idx) => <Collapsable key={item.title} isOpen={activeIdx === idx} handler={() => handleClick(idx)}>{item}</Collapsable>)}
            </div>
        </>
    )
}

export default Accordion