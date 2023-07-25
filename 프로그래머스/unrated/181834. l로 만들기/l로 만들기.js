function solution(myString) {
    var answer = '';
    for (let char of myString) {
        if (char > 'l') {
            answer += char;
        } else {
            answer += 'l';
        }
    }
    return answer;
}