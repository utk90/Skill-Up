// given a nested object which can have any type of object, deep flatten it and
// return the new object in javascript

// input
// {
//     A: "12",
//         B: 23,
//             C: {
//         P: 23,
//             O: {
//             L: 56
//         },
//         Q: [1, 2]
//     }
// }

// output
// {
//     "A": "12",
//     "B": 23,
//     "C.O.L": 56,
//     "C.P": 23,
//     "C.Q.0": 1,
//     "C.Q.1": 2
// }

const org = {
    A: 10,
    B: "20",
    C: {
        P: [0, 1],
        Q: {
            R: [9, 10]
        },
        S: {
            T: "90"
        }
    }
};

const flatten = (obj, str) => {
    for (let currKey of Object.keys(obj)) {
        if (typeof obj[currKey] === 'object') {
            if (Array.isArray(obj[currKey])) {
                for (let arrKey in obj[currKey]) {
                    console.log(str + `.${currKey}.${arrKey}:${obj[currKey][arrKey]}`);
                }
            } else {
                flatten(obj[currKey], str ? str + '.' + currKey : currKey);
            }
        } else {
            if (str.length !== 0)
                console.log(str + '.' + currKey + ':' + obj[currKey]);
            else
                console.log(currKey + ':' + obj[currKey]);
        }
    }
}

// only for object
// const flattenObj = (obj, flatObj = {}, key = '') => {
//     for (let currKey of Object.keys(obj)) {
//         let formattedKey = key ? key + '.' + currKey : currKey;
//         if (typeof obj[currKey] === 'object') {
//             flattenObj(obj[currKey], flatObj, formattedKey);
//         } else {
//             flatObj[formattedKey] = obj[currKey];

//         }
//     }

//     return flatObj;
// }

flatten(org, '');