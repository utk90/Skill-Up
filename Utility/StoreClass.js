// create a simple store class (hashset) with set(key, value), get(key) & has(key) methods

class Store {
    constructor() {
        this.collector = {};
    }

    set(key, value) {
        this.collector[key] = value;
    }

    get(key) {
        return this.collector[key];
    }

    has(key) {
        return !!this.collector[key];
    }
}

// input 
const store = new Store();
store.set('a', 10);
store.set('b', 20);
store.set('c', 30);

console.log(store.get('b')); // 20
console.log(store.has('c')); // true
console.log(store.get('d')); // undefined
console.log(store.has('e')); // false