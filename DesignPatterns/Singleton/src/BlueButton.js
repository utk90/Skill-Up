import singletonCounter from "./Counter";

const blueButton = document.getElementById('blue');
blueButton.addEventListener('click', () => {
    singletonCounter.increment();
    console.log('Counter total: ', singletonCounter.getCount());
})

export default blueButton;