function dayDif(date1, date2) {
    return Math.abs(Math.round((date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000)));
}

function daysSince(date) {
    return Math.abs(Math.round((date.getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000)));
}

function getLastDayOfMonth(date) {
    let resultDate = new Date(Date.UTC(date.getFullYear(), (date.getMonth() + 1), 0));
    return resultDate;
}

function getLDOMInfo(date) {
    let lDOM = getLastDayOfMonth(date);
    return `The last day of the given month is: ${lDOM.toDateString()}`;
}

let date1 = new Date("2024-12-3");
let date2 = new Date("2024-11-20");
console.log(dayDif(date1, date2));
console.log(daysSince(date1));
console.log(getLDOMInfo(date1));
