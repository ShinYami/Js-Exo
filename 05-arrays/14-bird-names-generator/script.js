// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        { name: "mouette", fem: true },
        { name: "corbeau" },
        { name: "mésange", fem: true },
        { name: "hibou" },
        { name: "buse", fem: true },
        { name: "pigeon" },
        { name: "pie", fem: true },
        { name: "vautour" },
        { name: "faucon" },
        { name: "rouge-gorge" },
        { name: "tourterelle", fem: true },
        { name: "corneille", fem: true },
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.getElementById("run").addEventListener("click", () => {

        let randomName = birds[Math.floor(Math.random() * birds.length)]; //way to pick randomly an elm from array
        console.log(randomName); //check to see if it correctly pick a random birds name
        let adjectiveArray = Array.from(adjectives); //switch to array
        let randomAdjective = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
        console.log(randomAdjective); //check to see if it picks a random adjective

        if (randomName.fem === true) {
            document.getElementById("target").innerHTML = (randomName.name + " " + randomAdjective + "e");
        } else {
            document.getElementById("target").innerHTML = (randomName.name + " " + randomAdjective);
        }

    });
})();



