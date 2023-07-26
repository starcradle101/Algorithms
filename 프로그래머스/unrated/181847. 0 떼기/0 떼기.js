function solution(n_str) {
    for (let i = 0; i < n_str.length; i++) {
        if (n_str[i] !== '0') {
            return n_str.slice(i);
        } else {
            continue;
        }
    }
}
// 반복문을 돌면서
// 처음으로 0이 아닌 요소가 나오면
// 그 요소부터 slice한 문자열을 반환
// 아니면 계속