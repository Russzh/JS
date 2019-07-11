if (true) {
    var version = 'ES5';
}
console.log(version);//ES5


if (true) {
    let version = 'ES6';
}
console.log(version);//error

////


console.log(version);//undefined
let version = 'ES5';

console.log(version);//error
let version = 'ES6';

///// 

function makeArray() {
    var items = [];

    for (var i = 0; i < 10; i++){
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

var arr = makeArray();

arr[1]();//10
arr[3]();//10
arr[7]();//10



function makeArray() {
    let items = [];

    for (let i = 0; i < 10; i++){
        let item = function() {
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

let arr = makeArray();

arr[1]();//1
arr[3]();//3
arr[7]();//7