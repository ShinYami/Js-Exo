// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    // your code here
    let img = document.querySelector("img");
    let head = document.querySelector("img").getAttribute("src");
    let data = document.querySelector("img").getAttribute("data-hover");
    document.querySelector("img").addEventListener("mouseover", () => {
        img.src = data;
    })
    document.querySelector("img").addEventListener("mouseout", () => {
        img.src = head;
    })

})();
