function solution(n) {
    let answer = [];
    for (let i = 1; i <= n; i += 1) {
        if (n % i === 0) answer.push(i);
    }
    return answer;
}