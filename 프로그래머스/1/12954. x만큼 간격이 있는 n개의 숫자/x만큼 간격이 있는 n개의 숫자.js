function solution(x, n) {
    let [limit, current] = [n, x];
    let answer = [];
    while (limit > 0) {
        answer.push(current);
        current += x;
        limit -= 1;
    }
    return answer;
}