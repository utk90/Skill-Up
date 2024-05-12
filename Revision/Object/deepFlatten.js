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
            R: [9, 10],
        },
        S: {
            T: "90"
        }
    }
};

const flatten = (obj, flatObj, keyStr) => {
    for (let key of Object.keys(obj)) {
        if (typeof obj[key] === 'object') {
            if (Array.isArray(obj[key])) {
                for (let i = 0; i < obj[key].length; i++) {
                    flatObj[keyStr + `.${key}.${i}`] = obj[key][i];
                }
            } else {
                flatten(obj[key], flatObj, keyStr ? keyStr + '.' + key : key);
            }
        } else {
            if (keyStr !== '')
                flatObj[keyStr + `.${key}`] = obj[key];
            else
                flatObj[key] = obj[key];
        }
    }

    return flatObj;
}

const newObj = {};
console.log(flatten(org, newObj, ''));