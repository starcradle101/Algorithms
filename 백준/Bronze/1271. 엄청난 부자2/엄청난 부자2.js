function solution(input) {
	const num1 = BigInt(input.shift());
	const num2 = BigInt(input.shift());

	console.log((num1 / num2).toString());
	console.log((num1 % num2).toString());
}

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input;
let list = [];

rl.on('line', function (line) {
	input = line;
	rl.close();
}).on('close', function () {
	list = input.split(' ');

	solution(list);
	process.exit();
});
