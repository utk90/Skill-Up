// Object.freeze() freezes the object completely
// does not allow changing of object properties

const obj = {
    prop: 42
}

Object.freeze(obj);

obj.prop = 33; // Throws an error in strict mode
console.log(obj.prop); // 42
// --------------------------------------------------
// shallowly freezes the nested object properties

const nestedObj = {
    prop: 42,
    nested: {
        a: 1,
        b: 2
    }
}

Object.freeze(nestedObj);

nestedObj.nested.a = 33; // updates the value (Object.freeze() does not work)
console.log(nestedObj.nested.a); // 33
// --------------------------------------------------
// deep freezing the nested object

const deepNestedObj = {
    prop: 42,
    nested: {
        a: 1,
        b: 2
    }
}

function deepFreeze(obj) {
    for (let currKey of Object.keys(obj)) {
        if (typeof obj[currKey] === 'object') {
            obj[currKey] = deepFreeze(obj[currKey]);
        }
    }
    return Object.freeze(obj);
}

deepFreeze(deepNestedObj);

deepNestedObj.nested.a = 33; // restrict the updating
console.log(deepNestedObj.nested.a); // 1
// --------------------------------------------------
// check if an object is frozen or not

const testObj = {
    prop: 42,
    nested: {
        a: 1,
        b: 2
    }
}

Object.freeze(testObj); // or deepFreeze(testObj)
console.log(Object.isFrozen(testObj)); // true
