//в ES6 классы использовать до их объявления нельзя!
class Rectangle {
    constructor(height, width = Rectangle.getDefaultWidth()){
        this._height = height; // личное св-во; в get height шла бы перезапись
        this.width = width;
        Rectangle.count += 1;
    } 

    get height() {                                                  /// связывает св-во объекта с функцией,
        return this._height != this.width ? 'rectangle' : 'square';///которая будет вызыв. при обращении к св-ву
    }

    //set

    calcArea() {
        return this._height * this.width;
    }

    static getDefaultWidth(){// статический метод (для вспомогательной функции)
        return 10;
    }
}

Rectangle.count = 0; // статическое св-во 

const square = new Rectangle(10,10);
const squar = new Rectangle(20,10);
const squa =  new Rectangle (10);


console.log(square.calcArea());
console.log(squar.calcArea());
console.log(squa.calcArea());   
console.log(Rectangle.count); 
console.log(square._height, square.width, square.height);
console.log(squar._height, squar.width, squar.height);