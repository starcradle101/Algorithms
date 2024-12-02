function solution(n) {
    let answer = [];
    for (let i = 2; i <= n; i += 1) {
        if (isPrimeNumber(i) && (n % i === 0)) {
            answer.push(i)
        }
    }
    return answer;
}

function isPrimeNumber(n) {
    let cnt = 0;
    for (let i = 1; i <= n; i += 1) {
        if (n % i === 0) cnt += 1;
    }
    return (cnt <= 2);
}