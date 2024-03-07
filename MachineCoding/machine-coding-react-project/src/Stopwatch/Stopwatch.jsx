import React, { useState } from 'react'

const Stopwatch = () => {
    const [timer, setTimer] = useState(0);
    const [timerId, setTimerId] = useState(0);

    const startHandler = () => {
        const id = setInterval(() => {
            setTimer((prev) => prev + 1);
        }, 1000);
        setTimerId(id);
    }

    const stopHandler = () => {
        clearInterval(timerId);
        setTimerId(undefined);
    }

    const resetHandler = () => {
        stopHandler();
        setTimer(0);
    }

    return (
        <>
            <div>{timer}</div>
            <button onClick={startHandler}>Start</button>
            <button onClick={stopHandler}>Stop</button>
            <button onClick={resetHandler}>Reset</button>
        </>

    )
}

export default Stopwatch