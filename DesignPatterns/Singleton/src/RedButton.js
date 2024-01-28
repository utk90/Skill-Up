import singletonCounter from "./Counter";

const redButton = document.getElementById('red');
redButton.addEventListener('click', () => {
    singletonCounter.increment();
    console.log('Counter total: ', singletonCounter.getCount());
})

export default redButton;