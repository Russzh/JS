//creating generators
//анонимная f
let generator = function*(){}

//литерал объекта
let obj = {
    *generator() {}
};

//литерад класса
class SomeClass {
    *generator() {}
}




//Ключевое слово  yield
function* generate() {
    yield 1; 
}
let iterator = generate();
console.log(iterator.next());

//
function* generator() {
    let result = 1 + (yield);
    console.log(`Result: ${result}`);
}

let iterator = generator();
//console.log(iterator.next(1));//error, запускает генератор
console.log(iterator.next());
console.log(iterator.next(1));//2

//
function* generate() {
    let array = [yield, yield, yield];
    console.log(array[2]); //3
}

let iterator = generate();
console.log(iterator.next());
console.log(iterator.next(1));
console.log(iterator.next(2));
console.log(iterator.next(3));

//
function* generator() {
    yield 42;
    yield[1, 2, 3];
    yield 43;
    yield* [1, 2, 3];
}

let iterator = generator();
console.log(iterator.next().value);//42
console.log(iterator.next().value);//[1, 2, 3]
console.log(iterator.next().value);//43
console.log(iterator.next().value);//1
console.log(iterator.next().value);//2
console.log(iterator.next().value);//3
console.log(iterator.next().value);//undefined
//
//or generator in generator
//
function* generateArray(){
    yield* [1, 2, 3];
}

function* generator() {
    yield 42;
    yield[1, 2, 3];
    yield 43;
    yield* generateArray();
}

let iterator = generator();
console.log(iterator.next().value);//42
console.log(iterator.next().value);//[1, 2, 3]
console.log(iterator.next().value);//43
console.log(iterator.next().value);//1
console.log(iterator.next().value);//2
console.log(iterator.next().value);//3
console.log(iterator.next().value);//undefined







//методы, которых нет у итератора и которые могут досрочно остановить генератор
function* generate() {
    yield 1; 
    yield 2;
    yield 3;
}

let iterator = generate();
console.log(iterator.next());  //{ value: 1, done: false }
//console.log(iterator.throw());//error
console.log(iterator.return());//{ value: undefined, done: true }
console.log(iterator.next());  //{ value: undefined, done: true }



//ошибки
function* generate() {
    try{
        yield 1; 
        yield 2;
        yield 3;
    }
    catch(e){
        console.log(e);
    }

}

let iterator = generate();
console.log(iterator.next());  //{ value: 1, done: false }
console.log(iterator.throw(new Error('Error')));//error
console.log(iterator.next());  //{ value: undefined, done: true }








///#1
function* generate() {
    console.log('Start');
    yield 1; 
    yield 2;
    yield 3;
    console.log('Finish');
}

console.log(typeof generate);//func
///console.log(generate()); //object, имеет метод next()
let iterator = generate();
iterator.next();//start  //{ value: 1, done: false} //запускает генератор
iterator.next();//{ value: 2, done: false }
iterator.next();//{ value: 3, done: false }
iterator.next();//finish { value: undefined, done: true }

//////#2
function* range(start, end) {
    let current = start;
    while (current <= end) {
        yield current++;
    }
}

for (let num of range(1, 10)) {
    console.log(num);
}

//in object
let numbers = {
    *range(start, end) {
        let current = start;
        while (current <= end) {
            yield current++;
        }
    }
}; 
 
log                 

for (let num of numbers.range(1, 10)) {
    console.log(num);
}