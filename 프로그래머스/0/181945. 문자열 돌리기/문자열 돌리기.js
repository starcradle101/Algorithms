const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    strArr = input[0].split('');
    strArr.forEach((el) => {
        console.log(el);
    })
    
});