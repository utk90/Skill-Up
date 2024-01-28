// extend the arrays in javascript such that an event gets dispatched whenever an item is added or removed

// input
// const arr = [];
// arr.addListener('add', (eventName, items, array) => {
//     console.group('items were added', items);
// })

// arr.addListener('remove', (eventName, item, array) => {
//     console.group(item, 'was removed');
// })

// arr.pushWithEvent('add', [4, 5]);
// arr.popWithEvent('remove', 5);

// output
// 'items were added again'
// [4, 5]

// 5 'was removed'

// ----------------------------------------------------------
// to track the events and their callbacks
Array.prototype.listeners = {};
// to add/assign a new event with listener
Array.prototype.addListener = function (name, callback) {
    if (!this.listeners[name]) {
        this.listeners[name] = [];
    }
    this.listeners[name].push(callback);
}
// add a new method that triggers an event on push
// call trigger event
Array.prototype.pushWithEvent = function (event, args) {
    // push the new values
    this.push(...args);
    // trigger add event
    this.triggerEvent(event, args);
}

// add a new method that triggers an event on pop
// calls trigger event
Array.prototype.popWithEvent = function (event, args) {
    // push new values
    const element = this.pop();

    // trigger add event
    this.triggerEvent(event, element);
}

Array.prototype.triggerEvent = function (eventName, elements) {
    // if the event is present
    // trigger all the callbacks with the value
    if (this.listeners[eventName]) {
        this.listeners[eventName].forEach(callback => callback(eventName, elements, this));
    }
}

Array.prototype.removeListener = function (eventName, callbacks) {
    // if event exists
    if (this.listeners[eventName]) {
        // filter out the listener
        // note: this won't work for anonymous function
        this.listeners[eventName] = this.listeners[eventName].filter(e => e !== callbacks);
    }
}

const arr = [];
arr.addListener('add', (eventName, items, array) => {
    console.group('items were added', items);
})

arr.addListener('remove', (eventName, item, array) => {
    console.group(item, 'was removed');
})

arr.pushWithEvent('add', [4, 5, 9, 10]);
arr.popWithEvent('remove');

console.log(arr);