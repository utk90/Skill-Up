import { useRef } from "react"
import Counter from "../Counter";

const HookUseImperativeHandle = () => {
    const ref = useRef();
    return (
        <div>
            <button onClick={() => ref.current.handleSubtract()}>-</button>
            <Counter ref={ref} />
            <button onClick={() => ref.current.handleAdd()} > +</button>
        </div >
    )
}

export default HookUseImperativeHandle;