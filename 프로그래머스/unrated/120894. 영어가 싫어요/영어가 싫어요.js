function solution(numbers) {
	let english = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
	];
	let i = 0;
	let answer = '';
	while (i < numbers.length) {
		for (let element of english) {
			const char = numbers.slice(i, i + element.length);
			if (char === element) {
				answer += english.indexOf(element);
				i += element.length;
			} else {
				continue;
			}
		}
	}
	return parseInt(answer, 10);
}