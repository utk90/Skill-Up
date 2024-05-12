const throttle = function(cb, delay){
    let lastTime = 0;

    return function(...args){
        const currTime = new Date().getTime();

        if (currTime > lastTime + delay){
            cb(...args);
            lastTime = currTime;
        }
    }
}

const normalClick = () => {
    console.log('NORMAL CLICK ACTION');
}

const throttleClick = () => {
    console.log('THROTTLE CLICK ACTION');
}

const throttleFn = throttle(throttleClick, 1000);

const btEl = document.getElementById('throttle-btn');
btEl.addEventListener('click', normalClick);
btEl.addEventListener('click', throttleFn);     