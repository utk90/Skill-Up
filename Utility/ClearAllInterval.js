// implement a clearAllInterval function that will stop all the running
// setInterval at once

// input
// setInterval(() => console.log('Hello'), 2000);
// setInterval(() => console.log('Hello2'), 500);
// clearAllInterval(); // clears first two intervals
// setInterval(() => {
//     console.log("Hello3")
// }, 1000);
// output
// Hello3 // last one, after every ~ 1 sec

const CLEAR_ALL_INTERVAL = {
    timerIds: [],
    setInterval: function (fn, delay) {
        const timerId = setInterval(fn, delay);
        this.timerIds.push(timerId);
        return timerId;
    },
    clearAllInterval: function () {
        while (this.timerIds.length > 0) {
            const timerIdToPop = this.timerIds.pop();
            clearInterval(timerIdToPop);
        }
    }
}

CLEAR_ALL_INTERVAL.setInterval(() => console.log('Hello'), 2000);
CLEAR_ALL_INTERVAL.setInterval(() => console.log('Hello2'), 500);
CLEAR_ALL_INTERVAL.clearAllInterval(); // clears first two intervals
CLEAR_ALL_INTERVAL.setInterval(() => {
    console.log("Hello3")
}, 1000);