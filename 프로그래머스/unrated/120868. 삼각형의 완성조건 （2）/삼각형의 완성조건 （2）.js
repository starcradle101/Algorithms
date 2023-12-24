function solution(sides) {
     const [a, b] = sides;
    const maxSide = Math.max(a, b);
    const minSide = Math.min(a, b);

    const minThirdSide = maxSide - minSide + 1;
    const maxThirdSide = a + b - 1;

    return maxThirdSide - minThirdSide + 1;
}