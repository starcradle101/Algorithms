const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

let input = [];

rl.on("line", function(line){
    input.push(line.split(' ').map(el => +el));
}).on("close", function(){
    for(let i = 0; i < input.length - 1; i++) {
        console.log(input[i][0] + input[i][1]);
    }
    process.exit();
})