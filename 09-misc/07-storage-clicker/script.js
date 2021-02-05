// 09-misc/07-storage-clicker/script.js - 9.7: storage clicker


(() => {

    // your code here

    let increment = document.getElementById('increment');

    let target = document.getElementById('target'); //pas obligé de def une variable pour target

    let count = localStorage.getItem('number');
    if ( count === undefined){
        count = 0;
    }

    target.innerText = count;

    increment.addEventListener('click', () =>{
        count++;
        target.innerText = count;
        localStorage.setItem('number', count);
    })

})();
