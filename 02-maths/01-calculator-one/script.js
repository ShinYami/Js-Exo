
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        let numberOne = parseInt(document.getElementById("op-one").value);
        let numberTwo = parseInt(document.getElementById("op-two").value);
        let result = numberOne + numberTwo;
        alert(result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        let numberOne = parseInt(document.getElementById("op-one").value);
        let numberTwo = parseInt(document.getElementById("op-two").value);
        let result = numberOne - numberTwo;
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        let numberOne = parseInt(document.getElementById("op-one").value);
        let numberTwo = parseInt(document.getElementById("op-two").value);
        let result = numberOne * numberTwo;
        alert(result);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        let numberOne = parseInt(document.getElementById("op-one").value);
        let numberTwo = parseInt(document.getElementById("op-two").value);
        let result = numberOne / numberTwo;
        alert(result);
    });
})();
