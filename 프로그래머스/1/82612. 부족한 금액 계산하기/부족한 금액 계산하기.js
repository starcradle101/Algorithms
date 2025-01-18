function solution(price, money, count) {
    let currentPrice = 0;
    for (let i = 1; i <= count; i += 1) {
        currentPrice += i * price;
    }
    const answer = (money - currentPrice > 0) ? 0 : currentPrice - money;
    
    return answer;
}