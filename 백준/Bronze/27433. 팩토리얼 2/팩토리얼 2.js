function solution(input) {
	if (input === 0 || input === 1) return 1;

	return input * solution(input - 1);
}

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input;

rl.on('line', function (line) {
	input = line;
	input = parseInt(line);
	rl.close();
}).on('close', function () {
	console.log(solution(input));
	process.exit();
});
