// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {

    // your code here
    let txt = document.getElementById("target").textContent;
    let target = document.getElementById("target");
    target.innerHTML = "";  // faire disparaitre le texte 

    let i = 0;
    let speed = 50; //pour la vitesse

    function typeWriter() {
        if (i < txt.length) {
            speed = Math.floor(Math.random() * 200) + 1;
            document.getElementById("target").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        };
    };

    typeWriter();

})();
