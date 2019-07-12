let add = (x , y) => (x + y);

let square = x => x * x;

let giveMeAnswer = () => 42;

let log = () => console.log("Logging") ;

let multiply = (x, y) => {
    let result = x * y;
    return result;
}
 
//при возврате литерала объекта используются круглые скобки
let getPerson = () => ({ name : 'John'}); 

///IIFE
(() => console.log('IIFE'))(); 
 

console.log(add(2, 5));
console.log(square(2, 5));
console.log(giveMeAnswer());
log(); 
console.log(multiply(3, 7));
console.log(getPerson());

////Array and arrow-function
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

numbers.forEach(num => sum += num);

let squared =  numbers.map(n => n * n);


console.log(sum);
console.log(squared);

////Object and arrow-function ; замыкание
let person = {
    name : 'Bob',
    greet : function() {
        setTimeout(() =>{
            console.log(`Hello, my name is ${this.name}`);
            console.log(this);
        }, 2000);
    }   
};

person.greet();

///Нельзя юзать как конструкторы; нельзя юзать bind(), call(), apply()

let Task = () => console.log('Creating a task');

let task =  new Task(); 