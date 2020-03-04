let masGolos = ['A', 'E', 'I', 'O', 'U', 'Y'];
let ma = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'];


word={};
function create(golos,prigolos,text) {
    word['текст']=text;
    word['голосі']=golos;
    word['приголосні']=prigolos
}

function createObj(mas,someText) {

    let counter = 0;
    for(let i =0;i<mas.length;i++){
        for(let j =0 ;j<masGolos.length;j++){
            if(mas[i][0].toUpperCase() === masGolos[j]){
                counter++;
                console.log(mas[i]+" "+ counter);
            }
        }
    }
    create(counter,mas.length - counter,someText);
}

function reg(someText) {
    let regex = /(\w+)/g;
    let mas = [];
    someText.match(regex).forEach(element => element.length > 1 ? mas.push(element) : null);
    createObj(mas,someText);
}


function main() {
    let someText = "“Hi Amy! Your mum sent me  text. You forgot your inhaler. Why don’t you turn your phone on?” Amy didn’t like technology. She never sent text messages and she hated Facebook too.";
    reg(someText);
    console.log(word);
}

main();
