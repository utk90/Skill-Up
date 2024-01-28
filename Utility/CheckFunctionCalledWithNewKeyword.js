// determine if the function is called with the "new" keyword

// using instanceOf (start)--------------------------------------
// function A(B) {
//     if (this instanceof arguments.callee) {
//         console.log('OK, new');
//     } else {
//         console.log('OK, function');
//     }
// }


// input
// A(); // OK, function
// new A(); // OK, new
// new A(); // OK, new

// A(4); // OK, function
// var X = new A(4); // OK, new

// var Z = new A(); // OK, new
// Z.lolol = A;
// Z.lolol(); // OK, new

// var Y = A;
// Y(); // OK, function
// var y = new Y(); // OK, new
// y.lolol = Y;
// y.lolol(); // OK, new

// function A(B) {
//     if (this instanceof A && !this._contructed) {
//         this._contructed = true;
//         console.log('OK, new');
//     } else {
//         console.log('OK, function');
//     }
// }

// input
// A(); // OK, function
// new A(); // OK, new
// new A(); // OK, new

// A(4); // OK, function
// var X = new A(4); // OK, new

// var Z = new A(); // OK, new
// Z.lolol = A;
// Z.lolol(); // OK, function

// var Y = A;
// Y(); // OK, function
// var y = new Y(); // OK, new
// y.lolol = Y;
// y.lolol(); // OK, function
// using instanceOf (end)--------------------------------------

// using new.target (start)--------------------------------------
function A(B) {
    if (new.target) {
        console.log('OK, new');
    } else {
        console.log('OK, function');
    }
}

// input
A(); // OK, function
new A(); // OK, new
new A(); // OK, new

A(4); // OK, function
var X = new A(4); // OK, new

var Z = new A(); // OK, new
Z.lolol = A;
Z.lolol(); // OK, function

var Y = A;
Y(); // OK, function
var y = new Y(); // OK, new
y.lolol = Y;
y.lolol(); // OK, function
// using new.target (end)--------------------------------------