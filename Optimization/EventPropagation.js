const gpEl = document.querySelector('#grandparent');
const pEl = document.querySelector('#parent');
const chEl = document.querySelector('#child');

//Event Bubbiling (by default, if no value is paseed for useCapture property)
//Bubble out
// gpEl.addEventListener('click', () => {
//     console.log('Grand parent event triggered');
// })
// pEl.addEventListener('click', () => {
//     console.log('Parent event triggered');
// })
// chEl.addEventListener('click', () => {
//     console.log('Child event triggered');
// })

//Event Capturing
//Trickle down
gpEl.addEventListener('click', () => {
    console.log('Grand parent event triggered');
}, true)
pEl.addEventListener('click', () => {
    console.log('Parent event triggered');
}, true)
chEl.addEventListener('click', () => {
    console.log('Child event triggered');
}, true)

//First the event capturing events are triggered then bubbling events are triggered
// gpEl.addEventListener('click', () => {
//     console.log('Grand parent event triggered');
// }, true)
// pEl.addEventListener('click', () => {
//     console.log('Parent event triggered');
// }, false)
// chEl.addEventListener('click', () => {
//     console.log('Child event triggered');
// }, false)

//we can use e.stopPropagation() to stop event bubbiling/capturing