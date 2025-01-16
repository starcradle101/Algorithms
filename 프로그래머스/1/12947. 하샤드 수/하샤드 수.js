function solution(x) {
    const sumOfDigits = x.toString().split('').reduce((acc, curr) => acc + Number(curr), 0);
    
    return x % sumOfDigits === 0;
}