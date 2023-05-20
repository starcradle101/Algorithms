function solution(n) {
    let answer = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer += 1;
        }
    }
    return answer;
}

// 0으로 나누어 떨어지면
// 나눈 수와 몫을 비교하고
// 만약 나눈 수  === 몫이라면
// 카운트는 1만 하고 넘어간다.