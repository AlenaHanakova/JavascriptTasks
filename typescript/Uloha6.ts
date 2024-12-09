export { };

function dayDif(date1: Date, date2: Date): number {
    return Math.abs(Math.round((date1.getTime() - date2.getTime()) / (24 * 60 * 60 * 1000)));
}

function daysSince(date1: Date): number {
    return Math.abs(Math.round((date1.getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000)));
}

let date1 = new Date("2024-12-3");
let date2 = new Date("2024-11-20");
console.log(dayDif(date1, date2));
console.log(daysSince(date1));