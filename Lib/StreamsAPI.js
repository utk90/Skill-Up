// user should be able to create multiple subscriptions
// and whenever a value is pushed to the stream,
// all the subscriptions should run

// input
// const z = new Stream();
// z.subscribe((value) => console.log('value'));
// z.subscribe((value) => console.log('value') * 2);
// z.subscribe((value) => console.log('value') * 3);
// z.push(2);

// output
// 2
// 4
// 6

class Stream {
    constructor() {
        this.subscriptions = [];
    }

    subscribe(fn) {
        if (typeof fn === 'function')
            this.subscriptions.push(fn);
    }

    push(value) {
        this.subscriptions.forEach((currSub) => {
            currSub.call(this, value);
        })
    }
}

// input
const z = new Stream();
z.subscribe((value) => console.log(value));
z.subscribe((value) => console.log(value * 2));
z.subscribe((value) => console.log(value * 3));
z.push(2);



