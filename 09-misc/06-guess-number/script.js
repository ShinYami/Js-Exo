// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here

    let userTry = 0; 
    let maxTry = prompt('How many try do you want ?');

    // generate a number between  1 & 100
    let random = Math.floor(Math.random() * 100) + 1;

    //  user input
    let number = parseInt(prompt('Guess a number between 1 & 100 : '));


    while (number !== random ) {
        let number = parseInt(prompt('Guess a number between 1 & 100 : '));
        userTry += 1;

        if (userTry > maxTry) {
            alert("You have no more tries left ! Press F5");
            break
        }

        if (number > random) {
            alert("Lower");
        } else {
            alert("Higher");
        }

        if (number === random) {
            alert("Congratz");
        }
    }

})();
