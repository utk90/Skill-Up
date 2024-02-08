import { useReducer } from "react"

const HookUseReducer = () => {
    const countReducer = (state, action) => {
        switch (action.type) {
            case 'add':
                return state + 1;
            case 'subtract':
                return state - action.payload;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(countReducer, 0);

    return (
        <>
            <button onClick={() => dispatch({ type: 'subtract', payload: 5 })}>-</button>
            <span>{state}</span>
            <button onClick={() => dispatch({ type: 'add' })}>+</button>
        </>
    )
}

export default HookUseReducer;