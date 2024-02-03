class Dog {
    constructor(name) {
        this.name = name;
    }

}

const dogFunctionality = {
    bark: () => console.log('Woof!'),
    wagTail: () => console.log('Wagging my tail!'),
    play: () => console.log('Playing!')
}

Object.assign(Dog.prototype, dogFunctionality);

const pet1 = new Dog("Daisy");
pet1.name; // Daisy
pet1.bark(); // Woof!
pet1.play(); // Playing!

const animalFunctionality = {
    walk: () => console.log('Walking!'),
    sleep: () => console.log('Sleeping!')
}

const dogFunctionalityEnhanced = {
    bark: () => console.log('Woof!'),
    wagTail: () => console.log('Wagging my tail!'),
    play: () => console.log('Playing!'),
    walk() {
        super.walk();
    },
    sleep() {
        super.sleep();
    }
}

Object.assign(dogFunctionalityEnhanced, animalFunctionality);
Object.assign(Dog.prototype, dogFunctionality);
// Any new instance of Dog can now access the walk and sleep methods as well.

// --------------------------------------------------------------

var target1 = {}, target2 = {}
var obj1 = Object.create(target1, { myProp: { value: 1 } });
var obj2 = Object.assign(target2, { myProp: 1 });

// obj1 !== target1(true)
// obj2 === target2(true)

console.log(obj1.myProp);
// console.log(Object.entries(obj1));
// console.log(obj2);