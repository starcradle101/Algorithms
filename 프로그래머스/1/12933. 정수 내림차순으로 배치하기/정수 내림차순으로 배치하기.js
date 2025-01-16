function solution(n) {
    const x = n.toString().split('').map(el => Number(el));
    
    return Number(x.sort((a, b) => b - a).join(''));
}