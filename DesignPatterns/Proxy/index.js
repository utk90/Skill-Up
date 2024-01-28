const person = {
    name: 'John Doe',
    age: 42,
    nationality: 'American'
}

const personProxy = new Proxy(person, {
    get: (obj, prop) => {
        console.log(`value of ${prop} is ${Reflect.get(obj, prop)}`);
    },
    set: (obj, prop, value) => {
        console.log(`changed ${prop} from ${obj[prop]} to ${value}`)
        return Reflect.set(obj, prop, value);
    }
})

personProxy.name;
personProxy.age = 43;
personProxy.name = 'Jane Doe';