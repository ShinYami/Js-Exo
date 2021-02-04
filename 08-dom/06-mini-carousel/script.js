// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
    let actualImage = 0;
    let img = document.querySelector("img");
    document.getElementById("next").addEventListener("click", () => {

        img.src = gallery[actualImage + 1];
        actualImage++;
        if (actualImage === gallery.length - 1) {
            actualImage = 0;
        }

    });
})();
