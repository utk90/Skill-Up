let count = 0;

const create = (n = 2) => {
    if (count <= 0) {
        return;
    }

    const root = document.getElementById('root');
    const ele = document.createElement('div');
    ele.style.transition = `width ${n}s ease`;
    ele.classList.add('progressBar');
    root.appendChild(ele);

    setTimeout(() => {
        ele.classList.add('loaded');
    }, 1000)

    if (count > 0) {
        ele.addEventListener('transitionend', () => {
            create(--count);
        })
    }
    ele.removeEventListener('transitionend', () => { });
}

function add() {
    if (count === 0) {
        count = 5;
        create(--count);
    }
}