function solution(num) {
    if (num === 0) {
        return "Even";
    }
    return (num % 2 === 1 || num % 2 === -1) ? "Odd" : "Even";
}

// 짝수일 경우 Even 홀수인 경우 Odd
//