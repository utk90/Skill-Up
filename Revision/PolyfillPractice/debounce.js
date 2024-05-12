// no further event triggered within a certain time frame
// d delay after last action

const debounce = function (cb, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        let startTime = new Date().getTime();
        timer = setTimeout(() => {
            console.log('end: ', new Date().getTime() - startTime);
            cb(...args);
        }, delay)
    }
}

const handleClick = () => {
    console.log('NORMAL CLICK ACTION');
}

const debounceClick = () => {
    console.log('DEBOUNCE CLICK ACTION');
}

const debounceFn = debounce(debounceClick, 1000);

const btnEl = document.getElementById('debounce-btn');
btnEl.addEventListener('click', handleClick);
btnEl.addEventListener('click', debounceFn);