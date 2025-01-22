function solution(s) {
    return s.split(' ').map(el => {
        return [...el].map((el, idx) => idx % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('');
    }).join(' ');
}

// 홀수번째는 소문자 ()
// 짝수번째는 대문자
// map으로 바꾸기