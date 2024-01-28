let instance;
let count = 0;

class Counter {
    constructor() {
        if (instance) {
            throw new Error('Cannot create multiple instance');
        }
        instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return count;
    }

    increment() {
        count += 1;
    }

    decrement() {
        count -= 1;
    }
}

const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;