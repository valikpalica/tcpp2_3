
function dub(arr) {
    let rez = [];
    for (let item of arr){
        if(!rez.includes(item)){
            rez.push(item);
        }
    }
    return rez;
}

function main() {
    let arr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
    let mas=  dub(arr);
    console.log(mas);
}
main();
