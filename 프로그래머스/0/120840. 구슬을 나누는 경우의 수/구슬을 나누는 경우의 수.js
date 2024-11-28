function solution(balls, share) {
    return Math.round(factorial(balls) / (factorial(balls - share) * factorial(share)));
}

function factorial(n) {
    return n < 2 ? 1 : n * factorial(n - 1);
}