function createEmail(to, from, subject, message) {
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${message}
    `);
}
createEmail('Join@mail.com', 'Jane@mail.com', 'Hello', 'How are you?');

///Шаблонные теги
let name = "Bill";
console.log(upperName`Hello ${name}`);

function upperName(literals, value){
    console.log(literals, value);
    return literals[0] + value.toUpperCase();
}

////
function greet(name){
    console.log(`Hello ${name}`.toUpperCase());
}

greet('Bill');

//////
function add(x, y) {
    console.log(`${x} + ${y} = ${parseInt(x)+ parseInt(y)}`)
}

add('5','7');
