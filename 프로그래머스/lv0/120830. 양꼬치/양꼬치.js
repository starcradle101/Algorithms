function solution(n, k) {
    let skewPrice = n * 12000;
    let drinkPrice = ((k - Math.floor(n / 10)) * 2000);
    let answer = skewPrice + drinkPrice;
    return answer;
}