function solution(input) {
	let groupWordCount = 0;
	const words = input.slice(1);

	for (const word of words) {
		let isGroupWord = true;
		const visited = new Set();

		for (let i = 0; i < word.length; i++) {
			const currentChar = word[i];

			if (visited.has(currentChar)) {
				isGroupWord = false;
				break;
			}

			if (i < word.length - 1 && currentChar !== word[i + 1]) {
				visited.add(currentChar);
			}
		}

		if (isGroupWord) {
			groupWordCount++;
		}
	}

	console.log(groupWordCount);
}

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input.push(line);
}).on('close', function () {
	solution(input);
	process.exit();
});
