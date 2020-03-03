let laguage = '';
let dayss = '';
let mas_day_in_ea = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота', 'Неділя'];
let mas_day_in_ua = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

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

    if (laguage === 'en') {
        alert(mas_day_in_ea[dayss - 1]);
    } else if (laguage === 'ua') {
        alert(mas_day_in_ua[dayss - 1]);
    } else main();
}


main();


