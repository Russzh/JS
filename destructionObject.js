let person = {
    firstname: 'John',
    lastname: 'Doe'
};

let {firstname, lastname, age = 25} = person;//названия переменных со св-вами должны совпадать

console.log(firstname, lastname, age);  

// let {firstname: first, lastname: last} = person;
// console.log(first, last); 

let user = {
    firstname: 'John',
    lastname: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

let {firstname, lastname, social: { facebook: fb }, age = 25} = user;

console.log(firstname, lastname, fb, age);  

function post(url, {data, cache}) {
    console.log(data, cache); 
}

let result = post('api/users', { data: user, cache: false});

//возврат нескольких значений из функции
function getUserInfo() {
    return {
        firstname: 'John',
        lastname: 'Doe',
        social: {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }
    }; 
}

let { firstname, lastname, social: { twitter } } = getUserInfo();

console.log(firstname, lastname, twitter);