function solution(my_string) {
    let answer = 0;
    for (let char of my_string) {
        if (char == Number(char)) answer += Number(char);
    }
    return answer;
}