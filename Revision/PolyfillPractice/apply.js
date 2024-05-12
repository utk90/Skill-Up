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

// console.log(obj1.details.apply(obj2, [28]));
// console.log(obj1.address.apply(obj2, [110017, 'DEL']));

Function.prototype.customApply = function(obj, args){
    const fnContext = this;
    obj.fn = fnContext;
    return obj.fn(args);
}

console.log(obj1.details.apply(obj2, [28]));
console.log(obj1.address.apply(obj2, [110017, 'DEL']));
