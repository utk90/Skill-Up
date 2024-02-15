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
// obj1.details.call(obj2, 29); // Reap Doe is 29 years old

Function.prototype.customCall = function (...args) {
    const fnContext = this;
    const refContext = args[0];
    const restArgs = args.slice(1);

    refContext.fn = fnContext;
    refContext.fn(restArgs);
}

obj1.details.customCall(obj2, 29); // Reap Doe is 29 years old