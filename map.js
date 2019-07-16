const map = new Map([ //перебираемы объект; сохраняет порядок добавления элементов
    ['Hi', 'Привет'],//можем использовать не только строки и символы
    [42, 'Ответ на какой-то вопрос'],
    [true, false],
    [{}, 'object'],
    [function() {}, ' Функция']
]);

map.set(39, 'Answer2');//add
map.set('39', 'Answer2');

map.delete('39'); 
//map.clear();

console.log(map, map.size);
console.log(map.get(42)); 
console.log(map.has(42));//true or false
console.log(map.keys());//ключи
//console.log(...map.keys());
//console.log([...map.keys()]);//перебираемый объект 
console.log([...map.values()]);//значения
console.log([...map.entries()]); //массив массивов 

//деструктуризация
 
const [ [ key, value ], second, third ] =  map;

console.log( second, third);
console.log(key, value);

///перебор
for (let kv of map) {
    console.log(kv);
}
// or
// for (let [key, value] of map) {
//     console.log(key, value);
// }
map.forEach((value, key, map) => console.log( value, key, map));      