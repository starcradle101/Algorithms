function solution(n) {
    var answer = '';
    for (let i = 0; i < n; i++) {
        (i % 2 === 0) ? answer = answer.concat('수') : answer = answer.concat('박');
    }
    return answer;
}