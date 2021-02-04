// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    // your code here
    let idSource = document.getElementById('source');
    let src = idSource.getAttribute('data-image');
    let target = document.getElementById('target');

    target.innerHTML = `<img src=${src}></img> `;

    source.parentNode.removeChild(source);
})();