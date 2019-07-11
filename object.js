let firstName = 'Bill',
    lasnName = 'Gates',
    email = 'bill@gmai.com';

let person = {
    firstName,
    lasnName,
    email,
    sayHello() {
        console.log(`Hi my name is ${this.firstName} ${this.lasnName}`);
    },
    get fullName(){
        return this.firstName + ' ' + this.lasnName; 
    },
    set fullName(value) {//принимает значение
        this.firstName = value;
    }
};

console.log(person);
person.sayHello();

///обращение к св-вам объекта
person.lasnName;

person['firstName']; 
//or
let property = 'firstName'
person[property];

///dynamic properties ES6
let property = 'email';
person = {
    [property]:'bill@gmai.com', 
} 

///ES5
function createCar(property, value){
    var car = {};

    car[property] = value;

    return car;
}

console.log(createCar('vin', 1));

//ES6
function createCar(property, value){
   return {
       [property] : value,
       ['_' + property]: value,
       [property.toUpperCase()]: value,
       ['get' + property]() {
           return this[property];
       }
   };
}

console.log(createCar('vin', 1));
 