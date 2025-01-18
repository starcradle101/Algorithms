function solution(bin1, bin2) {
    const sum = BigInt('0b' + bin1) + BigInt('0b' + bin2);
    return sum.toString(2);
}