class Rectangle {
    constructor(height, width = Rectangle.getDefaultWidth()){
        this.height = height;
        this.width = width;
        Rectangle.count += 1;
    }
    calcArea() {
        return this.height * this.width;
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