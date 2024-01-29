// implement a method in javascript that will take an object and a string or array of strings as a path
// and return the value at that path. If nothing found, return undefined

// similar to write polyfill for lodash._get()

// input
// const obj = {
//     a: {
//         b: {
//             c: [1, 2, 3]
//         }
//     }
// };

// console.log(get(obj, 'a.b.c'));
// console.log(get(obj, 'a.b.c.0'));
// console.log(get(obj, 'a.b.c[1]'));
// console.log(get(obj, 'a.b.c[3]'));

// output
// [1, 2, 3]
// 1
// 2
// undefined

const obj = {
    a: {
        b: {
            c: [1, 2, 3]
        }
    }
};

const get = (obj, path) => {
    const pathArr = Array.isArray(path) ? path : path.split('.');

    function mineValue(obj, pathIdx) {
        let formattedPath = pathArr[pathIdx];
        let objVal = obj[formattedPath];
        const isPathArr = String(pathArr[pathIdx]).includes('[');
        if (isPathArr) {
            const arrStartIdx = pathArr[pathIdx].indexOf('[');
            const arrEndIdx = pathArr[pathIdx].indexOf(']');
            const arrAccessIdx = pathArr[pathIdx].substring(arrStartIdx + 1, arrEndIdx);
            formattedPath = pathArr[pathIdx].substring(0, arrStartIdx);
            objVal = obj[formattedPath][arrAccessIdx];
        }
        pathIdx++;

        if (pathIdx === pathArr.length) {
            return objVal;
        }

        if (typeof objVal === 'object') {
            return mineValue(objVal, pathIdx);
        } else {
            return pathIdx === pathArr.length ? objVal : undefined;
        }
    }

    return mineValue(obj, 0);
}

console.log(get(obj, 'a.b.c'));
console.log(get(obj, 'a.b.c.0'));
console.log(get(obj, ['a', 'b', 'c', 1]));
console.log(get(obj, 'a.b.c[1]'));
console.log(get(obj, 'a.b.c[3]'));
console.log(get(obj, 'a.c'));


