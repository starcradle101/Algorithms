const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = [];

rl.on("line", function(line){
    input.push(line.split(' ').map(el => +el));
}).on("close", function(){
    const t = input[0];
    let numbers = [];
    for(let i=1; i<=t; i++){
        numbers.push(input[i])
    }
    for(let i=0; i<numbers.length; i++){
        let num = numbers[i][0] + numbers[i][1];
        console.log(num);
    }
    process.exit();
})