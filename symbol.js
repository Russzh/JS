'use strict';

let sym = Symbol("name");  //  != new
alert( typeof sym ); // symbol

alert( Symbol("name") == Symbol("name") ); // false

Symbol.length/// 0

/////Глобальный реестр
let name = Symbol.for("name");

alert( Symbol.keyFor(test) ); // name
alert( Symbol.keyFor(Symbol("name2")) ); // undefined

//////
var obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (var i in obj) {
   console.log(i); // "c" и "d"
}

///////
const object1 = {};
const a = Symbol('a');
const b = Symbol.for('b');

object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';

const objectSymbols = Object.getOwnPropertySymbols(object1);// !=getOwnPropertyNames

console.log(objectSymbols.length);
// expected output: 2
