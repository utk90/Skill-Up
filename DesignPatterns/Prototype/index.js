class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log('Woof!');
    }
}

class SuperDog extends Dog {
    constructor(name) {
        super(name);
    }

    fly() {
        console.log('Flying!');
    }
}

const dog1 = new SuperDog('Daisy');
dog1.bark(); // Woof!
dog1.fly(); // Flying!

/*
dog1 (name, __proto__)  -->  SuperDog.prototype (fly, __proto)  -->  Dog.prototype (bark)
*/

// Object.create
// object.create method lets us create a new object, to which we can explicitly pass the value of its prototype

const petDog = {
    bark() {
        return 'Waaaaaohhhhhhhh!';
    }
}

const pet1 = Object.create(petDog);
pet1.bark(); // Waaaaaohhhhhhhh!
console.log('Direct properties on pet1:', Object.keys(pet1)); // []
console.log('Properties on pet1 prototype:', Object.keys(pet1.__proto__)); // ["bark"]

// although pet1 itself doesn't have any properties, it does have access to properties on its prototype chain! Since we passed
// the petDog object as pet1' prototype, we can access the bark property