function solution(input) {
	const croatianAlphabets = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
	let count = 0;
	let i = 0;

	while (i < input.length) {
		let isCroatian = false;
		for (const croatian of croatianAlphabets) {
			if (input.slice(i, i + croatian.length) === croatian) {
				isCroatian = true;
				count += 1;
				i += croatian.length;
				break;
			}
		}

		if (!isCroatian) {
			count += 1;
			i += 1;
		}
	}

	console.log(count);
}

const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input;

rl.on('line', function (line) {
	input = line;
	rl.close();
}).on('close', function () {
	solution(input);
	process.exit();
});
