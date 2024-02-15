const obj1 = {
    firstName: 'John',
    lastName: 'Doe',
    details: function (age) {
        console.log(`${this.firstName} ${this.lastName} is ${age} years old`)
    }
}

const obj2 = {
    firstName: 'Reap',
    lastName: 'Doe'
}

// obj1.details(29); // John Doe is 29 years old
// obj1.details.bind(obj2)(29); // Reap Doe is 29 years old

Function.prototype.customBind = function (...args1) {
    const fnContext = this;
    const refContext = args1[0];
    const restArgs1 = args1.slice(1);

    refContext.fn = fnContext;

    return function (...args2) {
        return refContext.fn(...restArgs1, ...args2);
    }
}

obj1.details.customBind(obj2, 29)(); // Reap Doe is 29 years old
obj1.details.customBind(obj2)(29); // Reap Doe is 29 years old