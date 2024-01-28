// implement a ClearAllTimeout function that will stop all the running setTimeout at once

// input
// setTimeout(()=>console.log("hello"), 2000);
// setTimeout(()=>console.log("hello1"), 3000);
// setTimeout(()=>console.log("hello2"), 4000);
// setTimeout(()=>console.log("hello3"), 5000);
// clearAllTimeout();
// setTimeout(()=>console.log("hello4"), 5000);

// output
// hello4

// timeoutIds = [];
// const actualTimoutFn = setTimeout;
// // over-writing original timeout method
// setTimeout = function (fn, delay) {
//     const timerId = actualTimoutFn(fn, delay);
//     timeoutIds.push(timerId);
// }

// clearAllTimeout = function () {
//     while (timeoutIds.length > 0) {
//         const timerIdToPop = timeoutIds.pop();
//         clearTimeout(timerIdToPop);
//     }
// }

// setTimeout(() => console.log("hello"), 2000);
// setTimeout(() => console.log("hello1"), 3000);
// setTimeout(() => console.log("hello2"), 4000);
// setTimeout(() => console.log("hello3"), 5000);
// clearAllTimeout();
// setTimeout(() => console.log("hello4"), 5000);

// better way using objects (exposing timeoutIds outside not good practice)
const MY_TIMER = {
    timeoutIds: [], // global timeout id arrays
    // create a MY_TIMER's timeout
    setTimeout: function (fn, delay) {
        const timerId = setTimeout(fn, delay);
        this.timeoutIds.push(timerId);
        return timerId;
    },
    clearAllTimeout: function () {
        while (this.timeoutIds.length > 0) {
            const timerIdToPop = this.timeoutIds.pop();
            clearTimeout(timerIdToPop);
        }
    }
}

// input
const id = MY_TIMER.setTimeout(() => console.log('hello'), 1000);
console.log(id);
MY_TIMER.clearAllTimeout();