function solution(l, r) {
	var answer = [];

	for (let i = l; i <= r; i += 1) {
		if (
			i
				.toString()
				.split('')
				.filter(x => x === '5' || x === '0').length ===
			i.toString().split('').length
		) {
			answer.push(i);
		}
	}
	return answer.length !== 0 ? answer : [-1];
}