// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const Me = { firstName: "Loris", lastName: "Conti", age: 25, city: "Charleroi", country: "Belgium" };
        console.log(Me);
    })
})();
