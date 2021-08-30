/* 
-------------------> >=============>> Falsy <<=============< <------------------------
## false
## 0 (Zero)
## Empty String ''
## undefined
## null
## NaN



-------------------> >=============>> Truthy <<=============< <------------------------
## true
## Any Number (postive or negitve)
## Any String including single white space
## Empty
## Empty Array
## Object
## Empty Object

## ANY THING ELSE IS NOT FALSY WILL BE TRUTHY !!

*/

const x = {};

if (x) {
    console.log('The variable is TRUTHY');
} else {
    console.log('The variable is FALSY');
}


const y = 2;

if (y) {
    console.log('this is true');
} else {
    console.log('this is false');
}