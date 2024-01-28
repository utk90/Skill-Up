// implement a calculator that performs the basic actions like
// add, subtract, divide, multiply

// calculator.add(10).subtract(2).divide(2).multiply(5);
// console.log(calculator.total); // 20

// using objects
// const calculator = {
//     total: 0,
//     add: function (val) {
//         this.total += val;
//         return this;
//     },
//     subtract: function (val) {
//         this.total -= val;
//         return this;
//     },
//     divide: function (val) {
//         this.total /= val;
//         return this;
//     },
//     multiply: function (val) {
//         this.total *= val;
//         return this;
//     }
// }

// calculator.add(10).subtract(2).divide(2).multiply(5);
// console.log(calculator.total); // 20

// using functions
const Calc = function () {
    this.total = 0;
    this.add = (val) => {
        this.total += val;
        return this;
    }
    this.subtract = (val) => {
        this.total -= val;
        return this;
    }
    this.multiply = (val) => {
        this.total *= val;
        return this;
    }
    this.divide = (val) => {
        this.total /= val;
        return this;
    }
}

const calculatorObj = new Calc();
calculatorObj.add(10).subtract(2).divide(2).multiply(5);
console.log(calculatorObj.total);