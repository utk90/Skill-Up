// implement a simple polyfill for JSON.stringify()

// console.log(JSON.stringify([{ x: 5, y: 6 }])); // [{"x": 5, "y": 6}]

const isArr = (data) => {
    return Array.isArray(data);
}

const isObj = (data) => {
    return !isArr(data) && typeof data === 'object'
}

const stringify = (json) => {
    function mineStringify(data, modObj) {
        const isArr = isArr(data);
        const isObj = isObj(data);
        if (isArray) {
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