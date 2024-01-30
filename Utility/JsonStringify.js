// implement a simple polyfill for JSON.stringify()

// console.log(JSON.stringify([{ x: 5, y: 6 }])); // [{"x": 5, "y": 6}]

const checkIsArr = (data) => {
    return Array.isArray(data);
}

const checkIsObj = (data) => {
    return !checkIsArr(data) && typeof data === 'object'
}

const stringify = (json) => {
    function mineStringify(data, modObj) {
        const isArr = checkIsArr(data);
        const isObj = checkIsObj(data);
        if (isArr) {
            for (let arrItem of data) {
                return mineStringify(arrItem, modObj);
            }
        } else if (isObj) {
            for (let key of Object.keys(data)) {
                if (typeof data[key] === 'object') {
                    return mineStringify(data[key], modObj);
                } else {
                    modObj[`'${key}'`] = data[key];
                    console.log('modObj', modObj)
                }
            }
        } else {
            return modObj;
        }
    }
    return mineStringify(json, Object.assign(json));
}

console.log(stringify([{ x: 5, y: 6 }]));