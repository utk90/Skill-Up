import { useState } from "react"

const HookUseState = () => {
    const [count, setCount] = useState(0);
    // will update the count twice synchoronously
    const handleAdd = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }
    const handleSubtract = () => {
        setCount((prev) => prev - 1);
    }

    return (
        <>
            <button onClick={handleAdd}>+</button>
            {count}
            <button onClick={handleSubtract}>-</button>
        </>
    )
}

export default HookUseState;