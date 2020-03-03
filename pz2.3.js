let laguage = '';
let dayss = '';
let mas_day_in_ua = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
let mas_day_in_ea = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function lan() {
    let lang = prompt('chosse language?');
    return lang;
}

function days() {
    let day = prompt('chosse day?');
    return day;
}


function main() {
    laguage = lan();
    dayss = days();

    if (laguage.toLowerCase() === 'en') {
        if (typeof mas_day_in_ea[dayss - 1] !== 'undefined') {
            alert(mas_day_in_ea[dayss - 1]);
        } else main();
    } else if (laguage.toLowerCase() === 'ua') {
        if (typeof mas_day_in_ua[dayss - 1] !== 'undefined') {
            alert(mas_day_in_ua[dayss - 1]);
        } else main();
    } else main();
}


main();


