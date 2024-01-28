// takes an initial value, steps as input and increments the initial value with given steps every second
// incrementer can be paused and resumed back

// concepts used -> Timers, Closures

const autoIncrementer = (initialValue, step) => {
    let currentVal = initialValue;
    let intervalId;

    const start = () => {
        if (!intervalId) {
            intervalId = setInterval(() => {
                console.log('Current value', currentVal);
                currentVal += step;
            }, 1000);
        }
    }

    const stop = () => {
        clearInterval(intervalId);
        intervalId = null;
    }

    return {
        start, stop
    }
}

const timerObj = autoIncrementer(10, 10);
// start
timerObj.start();

// stop
setTimeout(() => {
    timerObj.stop();
}, 10000);

