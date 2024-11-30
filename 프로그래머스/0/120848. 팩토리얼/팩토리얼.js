function solution(n) {
    let answer = 1;
    while(factorial(answer) <= n) {
        answer += 1;
    }
    
    return answer - 1;
}

const factorial = (n) => {
    return (n < 2) ? 1: n * factorial(n - 1);
}