function solution(n) {
    let answer = Math.floor(n / 7);
    return (n % 7 === 0) ? answer : answer + 1;
}

// 모든 사람이 피자를 한 조각 이상 먹어야 함
// 즉, 나머지가 없어야 함
// 몫 + 나머지 존재한다면 피자 한 판 더 추가