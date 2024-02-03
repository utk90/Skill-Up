class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(func) {
        this.observers.push(func);
    }

    unsubscribe(func) {
        this.observers = this.observers.filter(observer => observer !== func);
    }

    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

// 1st observer
const fireHandler = function (item) {
    console.log("FIred (●'◡'●)", item);
}

// 2nd observer
const moveHandler = function (item) {
    console.log('Moved ^_____^', item);
}

const observable = new Observable();

// subscribe 1st observer
observable.subscribe(fireHandler);
observable.notify('event #1');

// unsubscribe 1st observer
observable.unsubscribe(fireHandler);
observable.notify('event #2');

// subscribe 2nd observer
observable.subscribe(moveHandler);
observable.subscribe(fireHandler);
observable.notify('event #3');


