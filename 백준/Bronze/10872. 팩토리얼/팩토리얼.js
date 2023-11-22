function factorial(input) {
	let answer = 1;
    if(input === 0) {
        console.log(answer);
    } else {
        for (let i = 1; i <= input; i++) {
            answer *= i;
        }
        console.log(answer);
    }
}

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
    output: process.stdout,
});

let input;

rl.on("line", function (line) {
    
    input = line; 
    input = parseInt(line);
    rl.close();

}).on("close", function () {
    factorial(input);
    process.exit();
});