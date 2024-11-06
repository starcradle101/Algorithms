function solution(strArr) {
    return strArr.map((el, idx) => {
        if (idx % 2 === 0) {
            return el.toLowerCase();
        } else {
            return el.toUpperCase();
        }
    })
}

// 홀수번째 인덱스 모두 대문자
// 짝수번째 인덱스 모두 소문자