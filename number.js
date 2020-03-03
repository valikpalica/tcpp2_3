function obj(thousand, hundred, desatka, num) {
    return {
        thousand,
        hundred,
        desatka,
        num
    }
}


function main() {
    let number = prompt('enter number');
    if (Number(number) > 0 && Number(number) <= 9999) numbers(number);
    else main();
}

function numbers(number) {
    let mas = number.split('').reverse();
    let numb = obj(typeof mas[3] === 'undefined' ? 0 : mas[3],
        typeof mas[2] === 'undefined' ? 0 : mas[2],
        typeof mas[1] === 'undefined' ? 0 : mas[1],
        typeof mas[0] === 'undefined' ? 0 : mas[0]);

    alert(JSON.stringify(numb, null, 4));
}

main();
