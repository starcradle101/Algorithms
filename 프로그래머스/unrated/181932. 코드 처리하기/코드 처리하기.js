function solution(code) {
	var answer = '';
	let mode = 0;
	for (let idx = 0; idx < code.length; idx += 1) {
		if (mode) {
			// mode가 1일 경우
			if (code[idx] === '1') mode = 0;
			if (code[idx] !== '1' && idx % 2 === 1) answer += code[idx];
		} else {
			// mode가 0일 경우
			if (code[idx] === '1') mode = 1;
			if (code[idx] !== '1' && idx % 2 === 0) answer += code[idx];
		}
	}

	// 최종 문자열 반환
	return answer.length === 0 ? 'EMPTY' : answer;
}