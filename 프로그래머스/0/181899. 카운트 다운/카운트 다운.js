function solution(start_num, end_num) {
    let answer = [];
    for (let i = start_num; i >= end_num; i -= 1) {
        answer.push(i)
    }
    return answer;
}