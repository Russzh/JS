try {
    console.log('Начинаем работу');
    console.log(a);
    console.log('Результат')
} catch(error) {
    console.log(error.name);
    console.log(error.message);//описание 
    console.log(error.stack);//набор вызовов, которые привели к этой ошибке
}   

console.log('Код продолжает свою работу');

/////
let json = '{"id": 2}'

try {
    // let user = JSON.parse(data); 
    let user = JSON.parse(json); 
    console.log(user);

    if(!user.name){
        throw new Error("В этих данных нет имени")
    }
} catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`Мы получили ошибку: ${error.name}`)
}   finally {
    console.log('Всегда буду выполняться')
}

console.log('Код продолжает свою работу');