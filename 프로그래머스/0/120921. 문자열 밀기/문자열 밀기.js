function solution(A, B) {
	let str = A;
	let answer = 0;

	for (let i = 0; i < str.length; i += 1) {
		if (str === B) {
			return answer;
		}
		str = str[str.length - 1] + str.slice(0, str.length - 1);
		answer += 1;
	}

	return answer === str.length ? -1 : answer;
}
