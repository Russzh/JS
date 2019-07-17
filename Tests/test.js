function sayName(name) {
    let message = "My name is" + name;
    return message
}

let arr = [5, -3, 6, -5, 0, -7, 8, 9];
let result = arr.reduce(function(sum, elem) {
    return sum + elem;
})

let assert = require('chai').assert;

describe("sayName", function() {
    it("Получаем фразу с новым именем", function(){
        assert.typeOf(sayName("Alex "), 'string')
    });
});  

describe("arr", function() {
    it("Получаем сумму чисел массива", function(){
        assert.equal(result, 13)
    });
});  

//подключение к странице
/* 
<div id="mocha"></div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/6.1.4/mocha.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/6.1.4/mocha.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js"></script>

<script>
    mocha.setup('bdd');

    let assert = chai.assert'
</script>
<script src="../Tests/test.js"></script>
<script src="file.js"></script>

<script>
    mocha.run();
</script> */