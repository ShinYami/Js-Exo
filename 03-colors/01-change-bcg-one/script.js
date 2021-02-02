
// 03-colors/01-change-bcg-one/script.js - 3.1: Bcg one (1)


(() => {

    // your code here
    document.getElementById('red').onclick = bgred;

    function bgred() {
        document.body.style.backgroundColor = "red";
        return false;
    }

    document.getElementById('green').onclick = bggreen;

    function bggreen() {
        document.body.style.backgroundColor = "green";
        return false;
    }

    document.getElementById('yellow').onclick = bgyellow;

    function bgyellow() {
        document.body.style.backgroundColor = "yellow";
        return false;
    }

    document.getElementById('blue').onclick = bgblue;

    function bgblue() {
        document.body.style.backgroundColor = "blue";
        return false;
    }

})();

// or EventTarget.addEventListener()

