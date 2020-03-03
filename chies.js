function chies(h, w) {

    for (let i = h; i >= 1; i--) {

        let str=" ";
        for (let j = 1;j<=w;j++){
            if((i+j)%2==0){
                str+="@ ";
            }
            else{
                str+="# ";
            }
        }
        console.log(i+''+str);
    }
    let a = 65;
    let str="  ";
    for (let i = 1;i<=w;i++){
        str+=String.fromCharCode((a++))+' ';
    }
    console.log(str);
}
chies(8,8);
