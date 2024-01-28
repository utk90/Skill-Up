// execute a function when it is made sure that no further repeated event will be triggered in a given frame of time
// last event triggered ----------delay----------> fn is called
// eg. to limit api request call on search

const debounce = (delay, fn) => {
    let timerId;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(timerId);

        timerId = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    }
}

// input
// print mouse position
const onMouseMove = (e) => {
    console.clear();
    console.log(e.x, e.y);
}

const debounceMouseMove = debounce(1000, onMouseMove);

window.addEventListener('mousemove', debounceMouseMove);
