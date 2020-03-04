main();

function main() {
    console.log(match('palica@gmail.com'));
    console.log(match('valik@bk.ru'));

}

function match(text) {
    let regExp = new RegExp(/(\w+)@(gmail|mail)(.com|.ua)/);
    return regExp.test(text);
}
