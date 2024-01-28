// implement fn. to control the rate at which function is called or executes
// eg. limit API request on button clicks
// first event ----------limit----------> checks if to execute the event

const throttle = (fn, limit) => {
    let canExecute = true;

    return function () {
        let context = this;
        let args = arguments;

        if (canExecute) {
            fn.apply(context, args);
            canExecute = false;

            setTimeout(() => {
                canExecute = true;
            }, limit);
        }
    }
}

const print = () => {
    console.log('hello after ', Date.now());
}

const throttled = throttle(print, 2500);

window.addEventListener('mousemove', throttled, false);