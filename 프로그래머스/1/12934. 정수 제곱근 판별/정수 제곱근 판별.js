function solution(n) {
    const sqrt_n = Math.sqrt(n);
    
    return (sqrt_n === parseInt(sqrt_n)) ? (sqrt_n + 1) ** 2 : -1;
}