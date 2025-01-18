function solution(left, right) {
    let answer = 0;
    for (let i = left; i <= right; i += 1) {
        isFactorsEven(i) ? answer += i : answer -= i;
    }
    
    return answer;
}

function isFactorsEven(num) {
    let count = 0;
    for (let i = 1; i <= num; i += 1) {
        if (num % i === 0) count += 1;
    }
    
    return count % 2 === 0;
}

