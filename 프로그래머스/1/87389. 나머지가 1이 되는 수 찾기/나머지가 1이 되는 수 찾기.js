function solution(n) {
    for (let i = 1; i < n; i++) {
        if (n%i===1) {
            return i;
        }
    }
}

// 1부터 n까지 증가하면서
// 나누었을 때 나머지가 1이 되는 숫자를 찾는다.