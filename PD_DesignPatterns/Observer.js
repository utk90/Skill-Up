// a subscription model in which an object subscribes to a host and the host notifies the object
// whenever an event occurs is known as Observer patttern

// used for event-driven programming
// this pattern promotes, loose coupling facilitating and good object-oriented design

// Observer design also known as pub/sub pattern short for publication/subscription.
// if you are subscribed to the publication and if something is published in the publication it will
// notify the subscriber

// creating observer design pattern

// 1. host
// -> it will maintain the list of observers
// -> provides options to subscribe and unsubscribe to the obserers
// -> notifies the observer when state changes

// 2. observer
// -> has a function that gets invoked everytime a state changes

const Move = function () {
    this.handlers = [];

    this.subscribe = function (fn) {
        this.handlers.push(fn);
    }

    this.unsubscribe = function (fn) {
        this.handlers = this.handlers.filter((handler) => {
            handler !== fn;
        });
    }

    this.fire = function (o, thisObj) {
        const scope = thisObj || this.window;
        this.handlers.forEach(item => {
            item.call(scope, o);
        })
    }
}

// 1st observer
const moveHandler = function (item) {
    console.log('fired:', item);
}

// 2nd observer
const moveHandler2 = function (item) {
    console.log('Moved:', item);
}

const move = new Move();

// subscribe 1st observer
move.subscribe(moveHandler);
move.fire('event #1');

// unsubscribe the 1st observer
move.unsubscribe(moveHandler);
move.fire('event #2');

move.subscribe(moveHandler);
move.subscribe(moveHandler2);
move.fire('event #3');

