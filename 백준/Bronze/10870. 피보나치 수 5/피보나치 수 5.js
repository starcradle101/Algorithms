function solution(input) {
	if (input <= 1) return input;

	return solution(input - 1) + solution(input - 2);
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
	let answer = solution(input);
	console.log(answer);
	process.exit();
});
