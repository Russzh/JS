const PI = 3.14159;
PI = 3.15;

console.log(PI);//error

///

console.log(PI);//error
const PI = 3.14159;

///

const MATH = {
    PI: 3.14159
};

MATH.PI = 3.15;

console.log(MATH.PI)//3.15

///
const MATH = {
    PI: 3.14159
};

MATH = {
    PI: 3.15
};

console.log(MATH.PI)//error