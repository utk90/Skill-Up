const obj1 = {
    firstName: 'Utkarsh',
    lastName: 'Nayan',
    details: function (age) {
        return `${this.firstName} ${this.lastName} is ${age} years old`;
    },
    address: function (pincode, state) {
        return `${this.firstName} ${this.lastName} resides in ${pincode} pincode ${state} state`;
    }
}

const obj2 = {
    firstName: 'Shivam',
    lastName: 'Nayan'
}

// console.log(obj1.details.bind(obj2, 28)())
// console.log(obj1.details.bind(obj2)(30))

// console.log(obj1.address.bind(obj2, 110017, 'DEL')())
// console.log(obj1.address.bind(obj2)(240343, 'BRY'))

Function.prototype.customBind = function(obj, ...args1){
    const fnContext = this;
    obj.fn = fnContext;

    return function(...arg2){
        return obj.fn(...args1, ...arg2);
    }
}

console.log(obj1.details.customBind(obj2, 28)())
console.log(obj1.details.customBind(obj2)(30))

console.log(obj1.address.customBind(obj2, 110017, 'DEL')())
console.log(obj1.address.customBind(obj2)(240343, 'BRY'))


