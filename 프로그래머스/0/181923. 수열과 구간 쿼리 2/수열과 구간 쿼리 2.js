function solution(arr, queries) {
    const answer = [];
    queries.forEach(([s, e, k]) => {
        const queried_arr = [];
        for (let i = s; i <= e; i += 1) {
            if (arr[i] > k) queried_arr.push(arr[i]);
        }
        queried_arr.length !== 0 ? answer.push(Math.min(...queried_arr)) : answer.push(-1);
    })
    return answer;
}

// s e k
// s <= i <= e인 모든 i에 대해서, k보다 크면서 가장 작은 arr[i]를 찾는다.