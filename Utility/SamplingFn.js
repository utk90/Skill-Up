// function that accepts a function as input and a count and executes that input function once for a given count of calls

const sampler = (job, triggerInterval, context) => {
    let triggerCount = 0;
    return function (...args) {
        const context = this ?? context;
        triggerCount++;
        if (triggerCount % triggerInterval === 0) {
            job.apply(context, args);
        }
    }
}

function message() {
    console.log("hello");
}

const sample = sampler(message, 4);
sample();
sample();
sample();
sample(); // hello
sample();
sample();
sample();
sample(); // hello
sample();
sample();
sample();