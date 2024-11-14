function solution(arr, k) {
    return arr.map((el) => (k % 2 === 1) ? el * k : el + k);
}

// 홀수면 모든 원소에 k 곱하기
// 짝수면 모든 원소에 k 더하기