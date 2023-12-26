function solution(n) {
    let answer = 1;
    for (let i = 1; i < n; ++i) {
        do {
            answer++;
        } while (containsThree(answer) || isMultipleOfThree(answer))
    }
    return answer;
}

function containsThree(num) {
    while (num > 0) {
        if (num % 10 === 3) return true;
        num = Math.floor(num / 10);
    }
    return false;
}

function isMultipleOfThree(num) {
    return num % 3 === 0;
}