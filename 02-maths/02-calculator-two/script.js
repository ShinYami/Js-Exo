
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation

        let numberOne = parseInt(document.getElementById("op-one").value);
        let numberTwo = parseInt(document.getElementById("op-two").value);
        switch (operation) {
            case 'addition':
                let resultAddition = numberOne + numberTwo;
                alert(resultAddition);
            break;
            case 'substraction':
                let resultSubstraction = numberOne - numberTwo;
                alert(resultSubstraction);
            break;
            case 'multiplication':
                let resultMultiplication = numberOne * numberTwo;
                alert(resultMultiplication);
            break;
            case 'division':
                let resultDivision = numberOne / numberTwo;
                alert(resultDivision);
            break;
        }

    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
