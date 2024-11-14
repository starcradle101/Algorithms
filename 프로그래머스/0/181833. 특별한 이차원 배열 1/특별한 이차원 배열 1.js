function solution(n) {
    let answer =  Array(n).fill().map(() => Array(n).fill(0));
    for (let i = 0; i < answer.length; i += 1) {
        answer[i][i] = 1;
    }
    
    return answer;
}