
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let d = new Date();
    let year = d.getFullYear();
    let date = d.getDate();
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const monthIndex = d.getMonth();
    const monthName = months[monthIndex];
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saterday'
    ];
    const dayName = days[d.getDay()];
    let hour = d.getHours();
    let minute = d.getMinutes();
    const formatted = `${dayName} ${date} ${monthName} ${year}, ${hour}h${minute}`;
    document.getElementById("target").innerHTML = formatted;
})();
