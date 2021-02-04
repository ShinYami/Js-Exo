// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


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
            passOne.classList.add("error");
            passTwo.classList.add("error");
        }
    })
})();
