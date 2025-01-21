function solution(n, m) {
    const gcd = getGCD(n, m);
    const lcm = getLCM(n, m);
    
    return [gcd, lcm];
}

const getGCD = (num1, num2) => {
    if (num1 % num2 === 0) return num2; 
    
    const remainder = num1 % num2;
    return getGCD(num2, remainder);
}

const getLCM = (num1, num2) => {
    return (num1 * num2) / getGCD(num1, num2);
}