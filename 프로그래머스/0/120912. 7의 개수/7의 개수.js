function solution(array) {
    let answer = 0;
    const string_array = array.join('');
    for (let char of string_array) {
        if (char === '7') answer += 1;
    }
    return answer;
}