// given an object with a cycle, remove the cycle or circular reference from it

const List = function (val) {
    this.next = null;
    this.val = val;
}

const item1 = new List(10);
const item2 = new List(20);
const item3 = new List(30);

item1.next = item2;
item2.next = item3;
item3.next = item1;

console.log('Item with cycle', item1);

// two places where this cycle removal can take place
// 1. for normal use of Object
// 2. while creating JSON string

// Normal use
// Weakset -> used to store unique object references and detect if the given objec was previously detected or not
// if it was detected then delete it
const removeCycle = (obj) => {
    const set = new WeakSet([obj]);
    // recursively detect and delete object references
    (function iterateObj(obj) {
        for (let key in obj) {
            // if the key is directly present in the object itself
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === 'object') {
                    if (set.has(obj[key])) {
                        delete obj[key];
                    } else {
                        set.add(obj[key]);
                        iterateObj(obj[key]);
                    }
                }
            }
        }
    })(obj);
}

// input
// removeCycle(item1);
// console.log('Item without cycle', item1);

// Using JSON.stringify while creating JSON
// JSON.stringify accepts a replacer function that can be used to alter the value of stringification process

const getCircularReplacer = () => {
    // form a closure and use the weakset to monitor object reference
    const seen = new WeakSet();

    return (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    }
}

console.log('after removing cycle using JSON.stringify');
console.log(JSON.stringify(item1, getCircularReplacer()));