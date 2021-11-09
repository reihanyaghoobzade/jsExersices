//let & const:
{
    var x = 2;
}

{
    let x = 2;
    const y = 3;
}


//arrow functions:
const sayHello = function() {
    return "Hello";
}

const sayHello = () => {
    return "Hello";
}

const sayHello = () => "Hello";



//default parameter values:
function getName(name = "rasool") {
    return "name is : " + name;
}

getName();
getName("amin");

//spread operator:
//parameter
function sum(...numbers) {
    let sum = 0;
    for (let number of numbers) sum += number;
    return sum;
}
sum(1);
sum(1, 2);
sum(1, 2, 3);


//argument
function myFunction(a, b, c, d, e) {
    //a=100, b=200, c=300, d=400, e=500
}
const args = [200, 300];
myFunction(100, ...args, 400, ...[500]);


//array
const city1 = ['tehran', 'karaj'];
const cities = ['esfahan', ...city1, 'shiraz', 'yazd'];
//  ['esfahan', 'tehran’, 'karaj', 'shiraz’, 'yazd']

//can merge 2 array
const city1 = ['tehran', 'karaj'];
const citiy2 = ['esfahan', 'shiraz', 'yazd'];
const allCities = [...city1, ...city2];
//  ['tehran’, 'karaj', 'esfahan', 'shiraz’, 'yazd']


//string interpolation
var message = "my name is :  " + person.name + "\n";
var message = `my name is : ${person.name} \n`;


//raw string access
const city = "tehran";
console.log(city[2]); // h
console.log(city[3]); // r
console.log("virgool" [4]); // o


//promise
const somePromise = new Promise((resolve, reject) => {
    if (false) {
        resolve([20, 30, 40]);
    } else {
        reject("some error occur");
    }
});
somePromise.then(resolveResult => {
    console.log(resolveResult);
}).catch(rejectResult => {
    console.log(rejectResult);
});

//binary & octal literal

//ES5:
var value = parseInt("111110111", 2); //503
var value = parseInt("767", 8); //503;

//ES6:
let value = 0b111110111; // 503
let value = 0o767; //503


//manipulating
//ES5:
var obj1 = { a: 1, b: 2 };
var obj2 = { a: 2, c: 3, d: 4 };
var obj3 = Object.assign(obj1, obj2);

//ES6:
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 2, c: 3, d: 4 };
const obj3 = {...obj1, ...obj2 };

//ES5:
var obj_1 = { a: 1, b: 2, c: 3, d: 4 };
var a = obj_1.a;
var b = obj_1.b;
var c = obj_1.c;
var d = obj_1.d;

//ES6:
const obj_1 = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, c, d } = obj_1;


//ES5:
var a = 1,
    b = 2,
    c = 3,
    d = 4;
var obj1 = { a: a, b: b, c: c, d: d };

//ES6:
var a = 1,
    b = 2,
    c = 3,
    d = 4;
var obj1 = { a, b, c, d };


//destructuring
//array
let arr = [1, 2, 3];
let [a, b, c] = arr;

//objects
let obj = {
    name: 'sahra',
    age: '12'
}
let { name: n, age: a } = obj;



//class
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
let john = new Person("John Doe");
let name = john.getName();

//inheritance
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}
class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}
let bird = new Bird(2);
bird.walk();
bird.fly();


//for of:
let scores = [80, 90, 70];

for (let score of scores) {
    score = score + 5;
    console.log(score);
}



//map:    .set .has .delete .clear .keys .values .entries
let userRoles = new Map();
userRoles.set(john, 'admin');
userRoles.set(lily, 'editor');


//set:    .add .has .delete .clear .keys .values .entries
let setObject = new Set();
chars.add('a');
chars.add('b');