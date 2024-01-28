// instanceOf operator tests if the prototype property of a constructor appears anywhere in the prototype chain of an object
// return value is a boolean 

// iterative implementation with __proto__
// const instanceOf = (obj, target) => {
//     if (obj === null || typeof obj !== 'object')
//         return false;

//     while (obj) {
//         if (obj.__proto__ === target.prototype)
//             return true;

//         obj = obj.__proto__;
//     }

//     return false;
// }

// recursive implementation with getPrototypeOf(object)
const instanceOf = (obj, target) => {
    if (obj === null || typeof obj !== 'object') {
        return false;
    }

    if (Object.getPrototypeOf(obj) === target.prototype) {
        return true;
    }

    return instanceOf(Object.getPrototypeOf(obj), target);
}

// input
class P { }
class Q extends P { }

const q = new Q();
console.log(instanceOf(q, Q)); // true
console.log(instanceOf(q, P)); // true
console.log(instanceOf(q, Object)); // true

function R() { }
console.log(instanceOf(q, R)); // false
R.prototype = Q.prototype;
console.log(instanceOf(q, R)); // true
R.prototype = {};
console.log(instanceOf(q, R)); // false