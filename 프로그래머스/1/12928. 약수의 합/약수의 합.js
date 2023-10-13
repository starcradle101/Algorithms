function solution(n) {
    let divisorArray = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisorArray.push(i);
        } else {
            continue;
        }
    }
    let answer = divisorArray.reduce((acc, curr) => acc + curr, 0);
    return answer;
}

// 정수 n의 약수의 합을 구하는 문제
// 빈 배열을 만들고, 1부터 n까지 n을 나누어 떨어지게 하는 수들만을 저장
// 저장된 배열을 reduce를 통해서 합을 구하고 반환