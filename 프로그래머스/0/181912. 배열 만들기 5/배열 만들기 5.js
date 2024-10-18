function solution(intStrs, k, s, l) {
    return intStrs.map(str => {
        return Number(str.slice(s, s + l));
    }).filter((str) => Number(str) > k);
}

// 배열 만들기