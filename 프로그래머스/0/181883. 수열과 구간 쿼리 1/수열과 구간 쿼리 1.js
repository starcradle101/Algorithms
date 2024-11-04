function solution(arr, queries) {
    const answer = [...arr];
    queries.forEach(([s, e]) => {
        for (let i = s; i <= e; i += 1) {
            answer[i] += 1
        }
    })
    return answer;
}