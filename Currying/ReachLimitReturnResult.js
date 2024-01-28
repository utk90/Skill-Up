// function for 4 args and when we reach the limit, return the value
// input
// sum(1, 2, 3, 4)
// sum(1, 2)(3, 4)
// sum(1, 2, 3)(4)
// sum(1)(2, 3, 4)
// sum(1)(2)(3)(4)
// output
// 10

const sum = ((result = 0, range = 4, currentArgsLen = 0) => {
    function add(...args) {
        result = args.reduce((acc, curr) => acc += curr, result);
        currentArgsLen += args.length;

        if (currentArgsLen >= range) {
            console.log(result);
            result = 0, range = 4, currentArgsLen = 0
            return result;
        } else {
            return add;
        }
    }

    return add;
})();


sum(1, 2, 3, 4);
sum(1, 2)(3, 4);
sum(1)(2, 3, 4);
sum(1)(2)(3)(4);

// special case: return the value when invoked with empty arguments

const specSum = ((sum = 0) => {
    return function add(...args) {
        if (args.length === 0) {
            console.log(sum);
            sum = 0;
            return sum;
        }
        sum = args.reduce((acc, curr) => acc += curr, sum);
        return add;
    }
})();

console.log('--------------------');
specSum(1, 2, 3, 4)(1, 2, 3)();
specSum(1, 2)(3, 4)();
specSum(1)(2, 3, 4)();
specSum(1)(2)(3)(4)();
