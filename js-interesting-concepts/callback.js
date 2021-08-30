function welcomeMessage(greetHandelar, name) {
    // console.log(greetHandelar);
    greetHandelar(name)
};
// const names = ['Rahim', 'Karim', 'Abul']
// const myObj = {
//     name: 'Rahim',
//     age: 30
// }

function greetMessage(name) {
    console.log(`Good Morning ${name}`);
}

function greetAfternoon(name) {
    console.log(`Good afternoon ${name}`);
}

function greetEvening(name) {
    console.log(`Good evening ${name}`);
}


welcomeMessage(greetMessage, 'Rahim');
welcomeMessage(greetAfternoon, 'Karim');
welcomeMessage(greetEvening, 'Abul');


// greetMessage()


const result = (double, x) => {
    double(x)
}


const doubleIt = (x) => {
    console.log('hello',
        x * 2);
}

const totals = result(doubleIt, 2)
// console.log(totals);