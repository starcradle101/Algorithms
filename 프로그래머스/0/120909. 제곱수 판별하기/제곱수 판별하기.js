function solution(n) {
    const sqrt = Math.sqrt(n);
    return (sqrt === parseInt(sqrt)) ? 1 : 2;
}