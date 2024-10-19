function solution(a, b) {
    return (computeAandB(a, b) > computeAandB(b, a)) ? computeAandB(a, b) : computeAandB(b, a)
}

const computeAandB = (a, b) => Number(String(a) + String(b));

// 두 수를 문자열로 만들어서 더하는 연산