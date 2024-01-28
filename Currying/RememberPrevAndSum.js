// implement a function that will remember its previous passed values and return the sum
// of the current and previous value

// sum(5) // 5
// sum(3) // 8
// sum(4) // 12
// sum(0) // 12

const sum = (() => {
    let result = 0;
    return function (...args) {
        result = args.reduce((acc, curr) => acc += curr, result);
        console.log(result);
    }
})();

sum(5) // 5
sum(3) // 8
sum(4) // 12
sum(0) // 12


