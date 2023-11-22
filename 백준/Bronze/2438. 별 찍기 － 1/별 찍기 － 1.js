function printStars(input) {
	for(let i = 1; i <= input; i++) {
        let star = '*'.repeat(i);
        console.log(star);
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
    printStars(input);
    process.exit();
});