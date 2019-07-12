class Task {
    constructor(title) {
        this._title = title;
        this.done = false;
        Task.count += 1; //статическое св-во
        console.log('Создание задачи');
    } 

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    static getDefaultTitle() { //статический метод
        return 'Задача'
    }

    complete() { 
        this.done = true;
        console.log(`Задача "${this.title}" выполнена`);
    }
}

Task.count = 0;  //статическое св-во

class SubTask extends Task {  
    constructor(title, parent) {
        super (title); //конструктор подкласса должен вызвать конструктор родителя
        
        this.parent = parent;//наследование св-ва
        console.log('Создание подзадачи');
    }

    complete() { //перезапись родительского метода 
        this.done = true;
        console.log(`Подзадача "${this.title}" выполнена`);
        //or
        //super.complete();
        //console.log(`Подзадача "${this.title}" выполнена`);
    }

}

let task = new Task("Изучить JS");
let subtask =  new SubTask("Изучить ES6", task);

console.log(SubTask.getDefaultTitle()); //унаследование статического метода
console.log(SubTask.count); //унаследование статического св-ва

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);

console.log(subtask instanceof SubTask); 
console.log(subtask instanceof Task);