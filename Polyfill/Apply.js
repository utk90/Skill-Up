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
// obj1.details.call(obj2, [29]); // Reap Doe is 29 years old

Function.prototype.customApply = function (context, [...args]) {
    const fnContext = this;
    const refContext = context;

    refContext.fn = fnContext;
    return refContext.fn(args);
}

obj1.details.customApply(obj2, [29]);