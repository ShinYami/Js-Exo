// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');
})

    // YOUR CODE HERE

    let questions =  (() => {
        let userName = prompt("Whats your name ?");
        let age = prompt("How old are you ?");
        let gender = prompt("What is your gender ?");
        let city = prompt("In which city do you live ?");
        let confirmation = confirm(`Hello ${userName}, You are a ${gender} of ${age} years old from ${city}`);
    });

    questions();