// function Task() {  //function declaration

// }

// let Task = function Task() { //function expression

// }

// class Task {         //class declaration
//     constructor(){
//         console.log("Creating a task");
//     }
// }

 //в ES6 классы использовать до их объявления нельзя!
 //Классы не засоряют глобальное пространство имен! (Window)

let Task = class Task {   //class expression
    constructor() {
        console.log("Creating a task");
    }
}

let Subtask = class extends Task {
    constructor() {
        super();
        console.log("Creatin a subtask")
    }
}

let task = new Task(); // создание экзмепляров
let subtask = new Subtask();