import { forwardRef, useImperativeHandle, useState } from "react";

const Counter = forwardRef((props, ref) => {
    const [count, setCount] = useState({
        num: 1,
        id: 'abcd'
    });

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

    useImperativeHandle(ref, () => ({ count, handleAdd, handleSubtract }));

    return <span>{count.num}</span>
});

export default Counter;