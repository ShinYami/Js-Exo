// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let i = 1;
        let array = [];
        while (i <= 10) {
            array.push(Math.floor(Math.random() * 100) + 1);
            i++;
        }

        document.getElementById("n-1").innerHTML = (array[1]);


        console.log(array);



        document.getElementById("min").innerHTML = Math.min(...array);
        document.getElementById("max").innerHTML = Math.max(...array);
        document.getElementById("sum").innerHTML = array.reduce((a, b) => a + b, 0);
        document.getElementById("average").innerHTML = (Math.floor(array.reduce((a, b) => a + b, 0)) / array.length);
    })
})();
