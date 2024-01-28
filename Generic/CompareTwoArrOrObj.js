// write a program to compare two arrays or objects

// 1. using JSON.stringify()
// to convert the whole array or object to a string and then compare the strings

let a = { a: 1, b: 2, c: 3 };
let b = { a: 1, b: 2, c: 3 };

console.log(JSON.stringify(a) === JSON.stringify(b)); // true

// this approach fails if the order of elements is different
b = { a: 1, c: 3, b: 2 };
console.log(JSON.stringify(a) === JSON.stringify(b)); // false

console.log('----------------');

// 2. recursively deep check arrays or objects
const obj1 = {
    a: [1, 2],
    b: {
        x: 'abc',
        y: 3
    }
}

const obj2 = {
    a: [1, 2],
    b: {
        y: 3,
        x: 'abc'
    }
}

const checkObj = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    let currKey;

    if (obj1Keys.length !== obj2Keys.length) return false;

    const firstObj = obj2Keys.length > obj1Keys.length ? obj2 : obj1;
    const secondObj = obj2Keys.length > obj1Keys.length ? obj1 : obj2;

    function compare(obj1, obj2, currIdx = 0) {
        currKey = Object.keys(obj1)[currIdx];

        if (!currKey) return true;

        // check if obj1 key is present in obj2
        if (currKey in obj2) {
            if (typeof obj1[currKey] !== 'object') {
                if (obj1[currKey] === obj2[currKey]) {
                    return compare(obj1, obj2, ++currIdx);
                } else {
                    return false;
                }
            } else {
                if (Array.isArray(obj1[currKey])) {
                    if (JSON.stringify(obj1[currKey]) === JSON.stringify(obj2[currKey])) {
                        return compare(obj1, obj2, ++currIdx);
                    } else {
                        return false;
                    }
                } else {
                    return compare(obj1[currKey], obj2[currKey], 0);
                }
            }
        }

        return false;
    }

    return compare(firstObj, secondObj);
}

console.log(checkObj(obj1, obj2));