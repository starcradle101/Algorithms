function solution(myString, pat) {
    let answer = '';
    for (let char of myString) {
        if (char === 'A') {
            answer += 'B'
        } else {
            answer += 'A'
        }
    }
    
    return +answer.includes(pat);
}