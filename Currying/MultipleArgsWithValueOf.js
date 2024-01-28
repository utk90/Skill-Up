// write a function that satisfies the following
// sum(1)(2).value() = 3;
// sum(1, 2)(3).value() = 6;
// sum(1)(2)(3).value() = 6;
// sum(1)(2) + 3 = 6;

const sum = (() => {
    let result = 0;

    function add(...args) {
        result = args.reduce((acc, curr) => acc += curr, result);
        return add;
    }

    add.valueOf = function () {
        const tempRes = result;
        result = 0;
        return tempRes;
    }

    add.value = add.valueOf;

    return add;
})();

console.log(sum(1)(2).value());
console.log(sum(1, 2)(3).value());
console.log(sum(1)(2)(3)(4).value());
console.log(sum(1)(2) + 3);



// sum(1)(2).value();
// sum(1, 2)(3).value();
// sum(1)(2)(3).value();