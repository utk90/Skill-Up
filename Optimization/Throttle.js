// perform action after every d delay
// implement fn. to control the rate at which function is called or executes
// eg. limit API request on button clicks
// first event ----------limit----------> checks if to execute the event

let clickTrigger = 0;
let actionTrigger = 0;
const throttleDelay = 1000;

const btnEl = document.getElementById('action-btn');
const clickCountEl = document.getElementById('click-count');
const actionCountEl = document.getElementById('action-count');

const clickHandler = () => {
    clickTrigger++;
    setCount();
    actionHandler();
    console.log('button clicked!!');
}

const customThrottle = (cb, d) => {
    let last = 0;

    return (...args) => {
        let eventTime = new Date().getTime();

        if (eventTime - last > d) {
            cb(args);
            last = eventTime;
        }
    }
}

const actionHandler = customThrottle(() => {
    actionTrigger++;
    setCount();
}, throttleDelay);


btnEl.addEventListener('click', clickHandler);

clickCountEl.innerText = clickTrigger;
actionCountEl.innerText = actionTrigger;


const setCount = () => {
    clickCountEl.innerText = clickTrigger;
    actionCountEl.innerText = actionTrigger;
}