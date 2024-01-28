/*
function that is similar to the Array.map() but returns a promise that resoles on the list of output by mapping each input through an asynchronous iteratee function or rejects it if any error occurs
it also accepts a limit to decide how many operations can occur at a time
*/

let numPromise = mapLimit([1, 2, 3, 4, 5], 3, function (num, callback) {
    setTimeout(function () {
        num = num * 2;
        console.log(num);
        callback(null, num);
    }, 1000);
});

numPromise.then(result => console.log('success:' + result))
    .catch(() => console.log('no success'));

