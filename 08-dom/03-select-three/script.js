// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    let Targets = document.getElementsByClassName("target");
    for (let i = 0; i < Targets.length; i++) {
        Targets[i].innerHTML = "Owned";
    }

})();
