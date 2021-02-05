// 10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles


(() => {
    // your code here
    document.getElementById('run').addEventListener('click', () => {

        function getPost(){
            window.lib.getPosts((error, post) => {
                post.forEach(post => console.log(post));
            });
        }
        console.log(getPost);
        // idk if its supposed to work like this..
    })
})();
