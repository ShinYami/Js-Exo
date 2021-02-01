
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        let i = 1;
        let numbers = "";
        while ((i * i) < 21) {

            let square = i * i;
            numbers = numbers + " , " + square;

            i += 1;
        }
        alert(numbers.substring(2));
    });

})();
