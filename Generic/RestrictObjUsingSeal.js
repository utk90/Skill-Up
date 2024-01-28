// using Object.seal() to restrict object extending
// it marks all existing properties as non configurable like we cannot delete
// them but just update their value if it is writable
// but we cannot restrict the modification of nested objects with Object.seal()

// flat obj object
const obj = {
    prop: 42
}

Object.seal(obj);
obj.prop = 33;
console.log(obj.prop); // 33

delete obj.prop; // cannot delete when sealed
console.log(obj.prop); // 33
// --------------------------------------------------
// cannot restrict modifying nested objects
const nestedObj = {
    prop: 42,
    nested: {
        a: {
            p: {
                q: 5
            }
        },
        b: 2
    }
}

// seal the object
// Object.seal(nestedObj);

// nestedObj.nested.a = 2;
// delete nestedObj.nested.a;
// console.log(nestedObj.nested.a); // undefined

// --------------------------------------------------
// deeply sealing the object
function deepSeal(obj) {
    for (let currKey of Object.keys(obj)) {
        if (typeof obj[currKey] === 'object') {
            obj[currKey] = deepSeal(obj[currKey]);
        }
    }
    return Object.seal(obj);
}

deepSeal(nestedObj);

// seal the object
Object.seal(nestedObj);

delete nestedObj.nested.a;
console.log(nestedObj.nested.a); // { p: { q: 5 } }
// --------------------------------------------------
// to check if the object is sealed
const testObj = {
    prop: 42,
    nested: {
        a: {
            p: {
                q: 5
            }
        },
        b: 2
    }
}

Object.seal(testObj); // or deeplSeal(testObj)
console.log(Object.isSealed(testObj)); // true