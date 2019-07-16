//множество уникальных неповторяющихся значений
//Нет понятия ключа и индекса
let set = new Set(['button', 'active', 'small']);//{ 'button', 'active', 'small' }
let set1 = new Set('button');//{ 'b', 'u', 't', 'o', 'n' }
let set2 = new Set(['button']);//{ 'button' }
//let set3 = new Set(42);//error 

set.add('buttonm')
    .add('big');

set.delete('active');
//set.clear();

set.add({ className: 'button'});

console.log(set);
console.log(set.size);
console.log(set.has('button'));//проверка наличия строки; true/false
console.log(set.has({ className: 'button'}));//false :ссылки на объекты не равна, нужно юзать let


//доступ к элементу
console.log(...set);
console.log(set.values());//[Set Iterator] { 'button', 'small', 'buttonm', 'big', { className: 'button' } }
console.log(...set.values());//button small buttonm big { className: 'button' }
console.log([...set]);//массив
//or
console.log(Array.from(set));
//Нет понятия ключа и индекса

//перебор
let set1 = new Set('button');//{ 'b', 'u', 't', 'o', 'n' }

for (let item of set1) {
    console.log(item);
}

set1.forEach( (item,  item2, set1) => console.log(item,  item2, set1));