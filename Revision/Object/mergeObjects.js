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

const mergeObjects = function (objects) {
    const resObj = {};

    // merging obj in merged
    const deepMerge = function (merged, obj) {
        for (let key of Object.keys(obj)) {
            if (typeof obj[key] === 'object') {
                if (Array.isArray(obj[key])) {
                    merged[key] = obj[key];
                } else {
                    merged[key] = {};
                    deepMerge(merged[key], obj[key]);
                }
            } else {
                merged[key] = obj[key];
            }
        }
    }

    for (let obj of objects) {
        deepMerge(resObj, obj);
    }

    return resObj;
}

// using reduce method
const mergeObjectsUsingReduce = function (objects) {
    return objects.reduce((acc, curr) => {
        for (let key of Object.keys(curr)) {
            if (typeof curr[key] === 'object' && typeof acc[key] === 'object') {
                acc[key] = mergeObjectsUsingReduce(acc[key], curr[key]);
            } else {
                acc[key] = curr[key];
            }
        }

        return acc;
    }, {});
}

// console.log(mergeObjects([{
//     person: 'John Doe',
//     age: 24,
// }, {
//     address: {
//         pincode: 1010310,
//         area: 'New York'
//     }
// }, {
//     qualification: 'B.Tech',
//     street: '10 Downing street',
// }]));

console.log(mergeObjectsUsingReduce([{
    person: 'John Doe',
    age: 24,
}, {
    address: {
        pincode: 1010310,
        area: 'New York'
    }
}, {
    qualification: 'B.Tech',
    street: '10 Downing street',
}]));