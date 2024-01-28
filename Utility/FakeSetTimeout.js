// create a fake setTimeout that should work somehow similar to the original setTimeout

// MY_TIMER.setTimeout(()=>console.log(1), 2500);
// MY_TIMER.setTimeout(()=>console.log(2), 2000);
// MY_TIMER.run();

// output
// 2 (will be printed after 2s)
// 1 (will be printed 500ms after the 1st)

const MY_TIMER = {
    timerId: 1,
    queue: [],
    // create a new timer
    setTimeout: function (cb, time, ...args) {
        const id = this.timerId++;

        // add a new entry to the queue
        // the time at which it will run
        // will be added to the current date
        // so that it will run next
        this.queue.push({ id, cb, time: Date.now() + time, args });

        this.queue.sort((a, b) => a.time - b.time);

        return id;
    },
    // to stop the timer
    clearTimeout: function (removeId) {
        // remove the entry with the given id
        this.queue = this.queue.filter(({ id }) => id !== removeId);
    },
    // start running the timer
    run: function () {
        while (this.queue.length) {
            const { cb, time, args } = this.queue[0];
            if (Date.now() > time) {
                cb.call(this, args);
                this.queue.shift();
            }
        }
    }
}

// input
MY_TIMER.setTimeout(() => {
    console.log(1);
}, 2500);

MY_TIMER.setTimeout(() => {
    console.log(2);
}, 2000);

MY_TIMER.setTimeout(() => {
    console.log(3);
}, 2500);

MY_TIMER.setTimeout(() => {
    console.log(4);
}, 3000);

// 2 1 3 4

MY_TIMER.run();
