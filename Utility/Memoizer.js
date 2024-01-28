// create a function that memorizes or caches the result for the given input
// so that the subsequent calls for the same inputs will be faster

const memoize = function (fn) {
    const cache = [];
    return function () {
        const key = JSON.stringify(arguments);
        if (cache[key]) {
            console.log('RETURENED from cache');
            return cache[key];
        }

        const computed = fn(...arguments);
        cache[key] = computed;
        console.log('RETURENED from computed');
        return computed;
    }
}

// input
function factorial(n) {
    if (n === 0 || n === 1) {
        return n;
    }
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(100));
// console.log(memoizedFactorial(100));