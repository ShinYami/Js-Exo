// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {

        let passOne = document.getElementById("pass-one");
        let passTwo = document.getElementById("pass-two");

        if (passOne.value === passTwo.value) {
            passOne.setAttribute("style", "border-color:green");
            passTwo.setAttribute("style", "border-color:green");
        } else {
            passOne.setAttribute("style", "border-color:red");
            passTwo.setAttribute("style", "border-color:red");
        }
    })
})();
