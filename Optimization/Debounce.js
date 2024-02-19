// d delay after the last mouse click stroke trigger action
// execute a function when it is made sure that no further repeated event will be triggered in a given frame of time
// last event triggered ----------delay----------> fn is called
// eg. to limit api request call on search

let clickTrigger = 0;
let actionTrigger = 0;
const debounceDelay = 1000;

const btnEl = document.getElementById('action-btn');
const clickCountEl = document.getElementById('click-count');
const actionCountEl = document.getElementById('action-count');

const clickHandler = () => {
    clickTrigger++;
    setCount();
    actionHandler();
    console.log('button clicked!!');
}

const customDebounce = (cb, d) => {
    let timer;

    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            cb(args);
        }, d);
    }
}

const actionHandler = customDebounce(() => {
    actionTrigger++;
    setCount();
}, debounceDelay);


btnEl.addEventListener('click', clickHandler);

clickCountEl.innerText = clickTrigger;
actionCountEl.innerText = actionTrigger;


const setCount = () => {
    clickCountEl.innerText = clickTrigger;
    actionCountEl.innerText = actionTrigger;
}