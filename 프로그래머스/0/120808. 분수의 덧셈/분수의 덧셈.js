function solution(numer1, denom1, numer2, denom2) {
    let answer = [numer1 * denom2 + numer2 * denom1, denom1 * denom2];
    return answer.map((el) => el / getGCD(...answer));
}

const getGCD = (num1, num2) => {
    if (num1 % num2 === 0) return num2; 
    
    const remainder = num1 % num2;
    return getGCD(num2, remainder);
}