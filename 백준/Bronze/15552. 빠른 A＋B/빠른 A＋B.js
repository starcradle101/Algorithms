function solution(input) {
    let answer = '';
    for(let i = 1; i <= input[0]; i++) {
        if (i === input[0]) {
            answer += `${(input[i][0] + input[i][1])}`;
        } else {
            answer += `${(input[i][0] + input[i][1])}\n`;
        }
    }
    console.log(answer);
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,    
});

let input = [];
let list = [];

rl.on("line", function (line) {
   input.push(line)
}).on("close", function () {
    input.forEach((val) => {
       list.push(val.split(' ').map((el) => parseInt(el)));
    });
    solution(list);
    process.exit();
});