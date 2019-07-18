let xmen = [ 'Cyclops', 'Wolverine', 'Rogue'];

for (let xman of xmen) {
    console.log(xman);
}

console.log(typeof xmen[Symbol.iterator]);//function
console.log(typeof xmen[Symbol.iterator]()); //object : iterator

let iterator =  xmen[Symbol.iterator]();
// console.log(iterator.next());//{value, done} - { value: 'Cyclops', done: false }
// console.log(iterator.next());//{value, done} - { value: 'Wolverine', done: false }
// console.log(iterator.next());//{ value: 'Rogue', done: false }
// console.log(iterator.next());//{ value: undefined, done: true }

// console.log(iterator.length);//undefined

//перебор
let next = iterator.next();

while (!next.done) {
    console.log(next.value);
    next = iterator.next();
}

//создание вручную
let idGenerator = {
    [Symbol.iterator]() {
        let id = 1;
        return {
            next() {
                let value = id > 100 ? undefined : id++;
                let done = !value;

                return { value, done };
            }
        };
    }
};

for (let id of idGenerator) {
    console.log(id);
}

///#2
let randomGenerator = {
    [Symbol.iterator]() {
        let count = 0;
        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 9;
                count += 1;
                return { value, done };
            }
        };
    }
};

// for (let random of randomGenerator) {
//     console.log(random);
// }
let random =  randomGenerator[Symbol.iterator]();
console.log(random.next().value);
