function solution(arr) {
    let answer = [];
    for (let el of arr) {
        if (el >= 50 && el % 2 === 0) {
            answer.push(el / 2);
        } else if (el < 50 && el % 2 === 1) {
            answer.push(el * 2);
        } else {
            answer.push(el);
        }
    }
    return answer;
    // 50보다 크거나 같은 짝수면 2로 나누고
    // 50보다 작은 홀수라면 2를 곱한다.
    // 나머지는 그냥 그대로 둔다
}