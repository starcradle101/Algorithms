function solution(numbers) {
    numbers.sort((a, b) => b - a);
    const m1 = numbers[0] * numbers[1];
    const m2 = numbers[0] * numbers.slice(-1);
    const m3 = numbers.slice(-2).reduce((acc, curr) => acc * curr, 1);
    
    return Math.max(m1, m2, m3);
}