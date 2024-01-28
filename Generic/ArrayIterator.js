// create an iterator method that accepts an array and returns a new method that will return the next
// array value on each invocation

// let iterator = helper([1,2,"hello"]);
// console.log(iterator.next()); // 1
// console.log(iterator.next()); // 2
// console.log(iterator.done()); // false
// console.log(iterator.next()); // "hello"
// console.log(iterator.done()); // true
// console.log(iterator.next()); // "null"

const helper = (args) => {
    let currIdx = 0;

    function next() {
        return args[currIdx++] ?? null;
    }

    function done() {
        return currIdx >= args.length;
    }

    return {
        next, done
    };
}

let iterator = helper([1, 2, "hello"]);
console.log(iterator.next()); // 1
console.log(iterator.next()); // 2
console.log(iterator.done()); // false
console.log(iterator.next()); // "hello"
console.log(iterator.done()); // true
console.log(iterator.next()); // "null"