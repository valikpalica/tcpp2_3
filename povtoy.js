main();

function main() {
    let someText = "Hello world heLlo what do you dO next day WhaT?";
    patter(someText.toLowerCase());
}

function patter(text) {
    let regExp = /(\w+)/g;
    let arr = text.match(regExp);
    console.log(arr);
    let mas = [];
    for (let i = 0; i < arr.length; i++) {
        let counter = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
                console.log(arr[i] + "-" + counter);
                if (!mas.includes(arr[i])) {
                    mas.push(arr[i]);
                }
            }
        }
        if (!mas.includes(arr[i])) {
            console.log(arr[i] + "-" + counter);
        }

    }
}
