let x = {}, y = { name: 'Ronny' }, z = { name: 'John' };

x[y] = { name: 'Vivek' };
x[z] = { name: 'Akki' };

console.log(x[y]); // Akki (as the latest value would overwrite [object Object] key)
