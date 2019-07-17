function User (name, age) {
    this.name =  name;
    //this.age = age;
    let userAge = age;

    //геттеры и сеттеры используются для работы с инкапсулированными элементами
    this.getAge = function() {
         return userAge;
     };

     this.setAge = function(age) {
        if(typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        }else {
            console.log('Недопустимое значение')
        }
    };

    this.say = function (){
        console.log(`Имя пользователя ${this.name}, возраст: ${this.userAge}`);
    };
}

 
let user =  new User('Ivan', 25);
console.log(user.name);
//console.log(user.age);
console.log(user.userAge);
user.say();
console.log(user.getAge());
user.setAge(30); 
//user.setAge('30'); 
console.log(user.getAge());