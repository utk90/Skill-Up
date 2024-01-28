// execute the function immediatedly without any further delay, 
// after initial execution it won't run til the delay
// using an immediate flag

const debounce = (delay, fn, immediate) => {
    let timerId;

    return function () {
        const context = this;
        const args = arguments;
        const callNow = immediate && !timerId;
        clearTimeout(timerId);

        if (!immediate)
            timerId = setTimeout(() => {
                timerId = null;
                fn.apply(context, args);
            }, delay);

        if (callNow) {
            fn.apply(context, args);
        }
    };
};

// input
// print mouse position
const onMouseMove = (e) => {
    console.clear();
    console.log(e.x, e.y);
};

// const debounceMouseMove = debounce(1000, onMouseMove, false);
const debounceMouseMoveImmediate = debounce(100, onMouseMove, false);

window.addEventListener('mousemove', debounceMouseMoveImmediate);