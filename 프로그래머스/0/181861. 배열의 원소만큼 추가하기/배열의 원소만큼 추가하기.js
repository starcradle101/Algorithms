function solution(arr) {
    let answer = [];
    
    arr.forEach((el) => {
        for (let i = 1; i <= el; i += 1) {
            answer.push(el);
        }
    })
    return answer;
}