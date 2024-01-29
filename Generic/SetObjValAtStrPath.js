// given an object, a path in the string or array of strings format, and a value, update the value at
// the given path in the object

// polyfill similar to lodash._set() method and is opposite of lodash._get() method

// const object = { 'a': [{ 'b': { 'c': 3 } }] };
// set(object, 'a[0].b.c', 4);
// console.log(object.a[0].b.c); // 4
// set(object, ['x', '0', 'y', 'z'], 5);
// console.log(object.x[0].y.z); // 5

const object = { 'a': [{ 'b': { 'c': 3 } }] };

const set = (obj, path, val) => {
    const pathArr = Array.isArray(path) ? path : path.split('.');

    function mineValue(obj, pathIdx) {
        let formattedPath = pathArr[pathIdx];
        let objVal = obj[formattedPath];
        let arrStartIdx = -1;
        let arrEndIdx = -1;
        let arrAccessIdx = -1;
        const isPathArr = String(pathArr[pathIdx]).includes('[');
        if (isPathArr) {
            arrStartIdx = pathArr[pathIdx].indexOf('[');
            arrEndIdx = pathArr[pathIdx].indexOf(']');
            arrAccessIdx = pathArr[pathIdx].substring(arrStartIdx + 1, arrEndIdx);
            formattedPath = pathArr[pathIdx].substring(0, arrStartIdx);
            objVal = obj[formattedPath][arrAccessIdx];
        }
        pathIdx++;

        if (pathIdx === pathArr.length) {
            if (arrEndIdx !== -1) {
                obj[formattedPath][arrAccessIdx] = val;
                return;
            }
            obj[formattedPath] = val;
            return;
        }

        if (typeof objVal === 'object') {
            return mineValue(objVal, pathIdx);
        } else {
            return pathIdx === pathArr.length ? objVal : undefined;
        }
    }

    return mineValue(obj, 0);
}

set(object, 'a[0].b.c', 4);
console.log(object.a[0].b.c); // 4
set(object, ['a', '0', 'b', 'c'], 5);
console.log(object.a[0].b.c); // 5

const abc = {
    a: {
        b: {
            c: [1, 2, 3]
        },
        d: {
            a: "hello"
        }
    }
};

const instance1 = JSON.parse(JSON.stringify(abc));
set(instance1, 'a.b.c', 'aheadOf');
console.log(instance1.a.b.c); //aheadOf

const instance2 = JSON.parse(JSON.stringify(abc));
set(instance2, 'a.b.c.0', 'redEye');
console.log(instance2.a.b.c[0]); //redEye
