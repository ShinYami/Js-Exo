
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {

        let year = document.getElementById("year").value;
        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let i = 0;
        let months = "";

        while (i < 12) {
            let date = new Date(year, i, 13);
            if (date.getDay() === 5) {
                months = months + " " + monthNames[date.getMonth()];
            }
            i++
        }
        alert(months);
    });
})();
