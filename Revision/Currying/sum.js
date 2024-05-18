// currying function

// sum(1)(2)(3) // 6
// sum(1,2)(3)
// sum(1)(2,3)
// sum(1,2,3)
const sum1 = function (limit, ...args1) {
    let count = args1.length;
    let total = args1.reduce((acc, curr) => acc += curr, 0);
    return function currySum(...args2) {
        count += args2.length;
        total = args2.reduce((acc, curr) => acc += curr, total);
        if (count >= limit) {
            console.log('Total sum1:', total)
            return total;
        }
        return currySum;
    }
}

// const sum1Test = sum1(5, 20);
// sum1Test(1)(2)(3)(4);

// -------------------------------------------------------------------------------------

// sum(1)(2)(3)()
const sum2 = function (...args1) {
    let total = args1.reduce((acc, curr) => acc += curr, 0);
    return function currSum(...args2) {
        if (args2.length === 0) {
            console.log('Total sum 2:', total);
            return total;
        }
        total = args2.reduce((acc, curr) => acc += curr, total);
        return currSum;
    }
}

const sum2Test = sum2(5, 20);
sum2Test(1)(2)(3)(4)();
