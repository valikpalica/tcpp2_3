function f(weight, hight) {
    let ress = "";
    let counter = 0;
    for (let i = 0; i < hight; i++) {
        counter++;
        ress += `${hight - i} `;
        for (let j = 0; j < weight; j++) {
            if (counter++ % 2) {
                ress += `# `;
            } else {
                ress += `@ `;
            }
        }
        ress = ress.trimEnd();
        ress += `\n\r`;
    }

    ress += "  ";
    let char = 65;
    for (let i = 0; i < weight; i++) {
        ress += String.fromCharCode(char++) + " ";

    }
    console.log(ress)
}

f(8, 8);




