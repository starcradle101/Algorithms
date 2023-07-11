function solution(numbers, n) {
    var answer = 0;
    for (let number of numbers) {
        if (answer > n) {
            return answer;
        } else {
            answer += number;
        }
    }
    return answer;
}