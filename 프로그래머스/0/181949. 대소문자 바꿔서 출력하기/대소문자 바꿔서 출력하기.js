const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let answer = '';
    for (let char of str) {
        if (char.toLowerCase() === char) {
            answer += char.toUpperCase();
        } else {
            answer += char.toLowerCase();
        }
    }
    console.log(answer)
});