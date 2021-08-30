// gobal scope 
const z = 87;

function result(x, y) {
    // console.log(x);
    // local scope
    const sum = x + y;
    // console.log(z);
    if (x < y) {
        // block scope
        let mood = 'happy';
        // console.log(mood);
    }
    // console.log(mood);
    return sum;
}
const total = result(3, 6)
// console.log(z);
// console.log(mood);

for (let i = 0; i < 10; i++) {

}
// console.log(i);