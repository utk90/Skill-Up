import { useContext } from "react"
import HookDemo from "../Context";

const HookUseContext = () => {
    const [count, setCount] = useContext(HookDemo);

    const handleAdd = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }
    const handleSubtract = () => {
        setCount((prev) => prev - 1);
    }

    return (
        <>
            <p>HELLO</p>
            <button onClick={handleAdd}>+</button>
            {count}
            <button onClick={handleSubtract}>-</button>
        </>
    )
}

export default HookUseContext;