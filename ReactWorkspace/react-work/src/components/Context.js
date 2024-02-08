import { createContext, useState } from "react"

export const HookDemo = createContext();

const Context = ({ children }) => {
    const [count, setCount] = useState({
        id: 'abcd',
        num: 1
    });

    <HookDemo.Provider value={{ count, setCount }}>{children}</HookDemo.Provider>
}

export default Context;