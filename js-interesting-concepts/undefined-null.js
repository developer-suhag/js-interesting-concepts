/* 
-------------------> >=============>> Undefined <<=============< <------------------------
1. Variable value is not assigned
2. function but didn't return anything
3. just wrote return but didn't return anything
4. function parameter that isn't passed
5. property that doesn't exist in an object
6. accessing array Eleement out of range
7. accessing deleted array element
8. explicitly set value to undefined

*/

let x;
// console.log(x);

function first(x, y) {
    const sum = x + y
}
// console.log(first(2, 3));
function second(x, y) {
    const diff = x - 7;
    return;
}
// console.log(second(6, 3));
function thrid(a, b) {
    const multiply = a * 2;
    // console.log(b);
}
thrid(4)


const person = {
    name: 'Rahim',
    age: 23
}
// console.log(person.job);

const arr = [23, 54, 64, 54]
delete arr[2]
// console.log(arr[5]);
// console.log(arr[2]);

const nai = undefined;
// console.log(nai);