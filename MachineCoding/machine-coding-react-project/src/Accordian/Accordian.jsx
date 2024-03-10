import React, { useState } from 'react'
import ResizeBucket from './ResizeBucket'

const accordianItem = [
    { name: "lorem asd asdas dsads dsegrsg" },
    { name: "lasasfbrbnrd fdbdbrbrb" },
    { name: "ymfthe rsgr ntdg ege g" },
    { name: "wqrd thrgqg tnrhsg qe aegsdg dge" },
]

const Accordian = () => {
    const [activeIdx, setActiveIdx] = useState(-1);

    const handleContainerClick = (idx) => {
        setActiveIdx(activeIdx === idx ? null : idx);
    }

    return (
        <div>
            {accordianItem?.map((item, index) => <ResizeBucket isOpen={activeIdx === index} key={item.name} index={index} name={item.name} handleBucket={handleContainerClick} />)}
        </div>
    )
}

export default Accordian