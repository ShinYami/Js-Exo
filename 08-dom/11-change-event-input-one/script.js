// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    // your code here
    let a = document.getElementById('pass-one');
    let b = document.getElementById('counter');
    a.addEventListener('input', () => {
        a.value.length > 10 && (a.value = a.value.substring(0, a.value.length - 1));
        b.innerHTML = a.value.length + "/10";
    }
    );
})();
