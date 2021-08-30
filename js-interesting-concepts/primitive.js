/*  JavaScript Data Types
--------> Primitve data types <------
1. Number
2. String
3. Boolean
4. undefined
5. null
7. Symbol

---------> Non primitive data type <----------
6. Object

*/

// ----------->> Primitive data types <<----------

let a = 'hello';
let b = a;

console.log(a, b);

a = 'gello'

console.log(a, b);




// --------->> Non primitive data type <<--------------
let x = {
    job: 'Web Developer'
};
let y = x;
let z = y;
console.log(x, y, z);

x.job = 'Front end developer'
console.log(x, y, z);
y.job = 'MERN Stack developer'
console.log(x, y, z);
z.job = 'Full Stack developer'

console.log(x, y, z);