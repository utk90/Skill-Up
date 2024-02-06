import { useEffect, useState } from "react"

const HookUseEffect = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [])

    return (
        <>
            <h1>Clock</h1>
            <p>{currentTime.toLocaleTimeString()}</p>
        </>
    )
}

export default HookUseEffect;