// write a program to merge two or more objects without using any native methods
// two different types of merge operations
// 1. shallow: 
// will only merge properties owned by object, it will not merge extended
// properties or methods
// 2. deep:
// will merge own and extended properties of the objects, if it exists


// shallow
// input
let obj1 = {
    person: 'John Doe',
    age: 24
}

let obj2 = {
    qualification: 'B.Tech',
    street: '10 Downing street'
}

// output
//  {
//     age: 24,
//     person: "John Doe",
//     qualification: "B.Tech",
//     street: "10 Downing street"
// }

const merge = (...obj) => {
    const resObj = {};

    obj.forEach(currObj => {
        for (let currKey of Object.keys(currObj)) {
            resObj[currKey] = currObj[currKey];
        }
    });

    return resObj;
}

const obj3 = Object.assign(obj2);
const obj4 = { address: `${Object.assign(obj2)}` };

console.log(merge(obj1, obj2, obj3, obj4));
// --------------------------------------------------
// deep merging

const deepMerge = (...objects) => {
    const isObject = (obj => obj && typeof obj === 'object');

    return objects.reduce((acc, curr) => {
        for (const currKey in curr) {
            if (isObject(acc[currKey]) && isObject(curr[currKey])) {
                acc[currKey] = deepMerge(acc[key], curr[key]);
            } else {
                acc[currKey] = curr[currKey];
            }
        }
        return acc;
    }, {})
}

console.log(deepMerge({
    person: 'John Doe',
    age: 24,
    qualification: 'B.Tech',
    street: '10 Downing street',
    address: {
        pincode: 1010310,
        area: 'New York'
    }
}))