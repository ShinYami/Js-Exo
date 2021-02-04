// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    // your code here
    let userTry = 0; 
    // generate a number between  1 & 100
    let random = Math.floor(Math.random() * 100) + 1;
    let number = '';

    console.log(random);
    
    while (number !== random ) {
        number = parseInt(prompt('Guess a number between 1 & 100 : '));
        userTry += 1;

        if (number > random) {
            alert("Lower");
        } else if (number < random) {
            alert("Higher");
        }

        else {
            alert("Congratz, you did it with " + userTry + " guesses !");
        }
    }
})();
