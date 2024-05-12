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
    a: [2, 1],
    b: {
        y: 3,
        x: 'abc',
    }
}

const isObjEqual = (data1, data2) => {
    const keyLen1 = Object.keys(data1).length;
    const keyLen2 = Object.keys(data2).length;

    if (keyLen1 !== keyLen2) return false;

    function compare(obj1, obj2) {
        for (let key of Object.keys(obj1)) {
            if (!obj2.hasOwnProperty(key)) {
                return false;
            } else if (typeof obj1[key] !== typeof obj2[key]) {
                return false;
            }

            if (typeof obj1[key] === 'object') {
                if (!Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) {
                    compare(obj1[key], obj2[key]);
                } else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
                    if (JSON.stringify(obj1[key]) !== JSON.stringify(obj2[key])) {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }

        return true;
    }

    return compare(data1, data2);
}

console.log(isObjEqual(obj1, obj2));