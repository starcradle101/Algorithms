function solution(arr, n) {
    if (arr.length % 2 === 1) {
        return arr.map((el, idx) => (idx % 2 === 0) ? el + n : el)
    } else {
        return arr.map((el, idx) => (idx % 2 === 1) ? el + n : el)
    }
}

// arr 길이가 홀수 = arr의 모든 짝수 인덱스 위치에 n을 더한 배열
// arr 길이가 짝수 = arr의 모든 홀수 인덱스 위치에 n을 더한 배열