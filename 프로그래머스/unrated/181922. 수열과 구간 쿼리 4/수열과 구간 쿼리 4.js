function solution(arr, queries) {
	var answer = arr;

	for (let query of queries) {
		let minRange = query[0];
		let maxRange = query[1];
		let queryValue = query[2];

		for (let idx = minRange; idx <= maxRange; idx += 1) {
			if (idx % queryValue === 0) {
				answer[idx] += 1;
			} else {
				continue;
			}
		}
	}
	return answer;
}