// only one object is created for each interface (class or function) and the same
// object is returned every time when called
// eg: a notification object, which sends notification across the system

// const object1 = singleton.getInstance();
// const object2 = singleton.getInstance();
// console.log(object1===object2); // true

const singleton = (function Singleton() {
    let instance = false;

    function createInstance() {
        const object = new Object('I am the instance');
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const object1 = singleton.getInstance();
const object2 = singleton.getInstance();

console.log(object1 === object2);