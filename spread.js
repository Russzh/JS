let staticLanguages = ["C", "C++", "JAVA"];
let dynamicLanguages = ['JavaScripr', 'Ruby', "PHP"];

let languages = [...dynamicLanguages, "C#", ...staticLanguages, "Python"];

console.log(languages);

///

function sum(...values){
    console.log(values instanceof Array);

    let sum = 0;
    values.forEach(function (value){
        sum += value;
    });

    console.log(sum)
}

sum (5, 7, 2, 10);

////
function sum(...values){
    console.log(values.reduce(function(prevValue, currentValue){
        return prevValue + currentValue;
    }));
}

sum (5, 7, 2, 10);