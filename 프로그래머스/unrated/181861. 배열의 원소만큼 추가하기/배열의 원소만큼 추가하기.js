function solution(arr) {
    var answer = [];
    for (let el of arr) {
        for(let i = 0; i < el; i ++) {
            answer.push(el);
        }
    }
    return answer;
}