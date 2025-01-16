function solution(a, b) {
    let answer = 0;
    const [start, end] = [Math.min(a, b), Math.max(a, b)];
    for (let i = start; i <= end; i += 1) {
        answer += i;
    }
    return answer;
}