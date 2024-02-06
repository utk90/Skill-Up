import { useEffect, useRef, useState } from "react";

function HookUseRef() {
    const [count, setCount] = useState({
        num: 1,
        id: 'abcd'
    });

    // will display previous state of input tag
    const countRef = useRef();

    const handleAdd = () => {
        setCount((prev) => {
            return {
                ...prev,
                num: prev.num + 1
            }
        })
    }

    const handleSubtract = () => {
        setCount((prev) => {
            return {
                ...prev,
                num: prev.num - 1
            }
        })
    }

    const [name, setName] = useState('');

    useEffect(() => {
        countRef.current = name;
    }, [name]);

    return (
        <>
            <button onClick={handleSubtract}>-</button>
            <span>{count.num}</span>
            <span>{count.id}</span>
            <button onClick={handleAdd}>+</button>

            <input ref={countRef} onChange={(e) => setName(e.target.value)} />

            <p>{name} is state -- {countRef.current} is ref</p>
        </>
    )
}

export default HookUseRef;