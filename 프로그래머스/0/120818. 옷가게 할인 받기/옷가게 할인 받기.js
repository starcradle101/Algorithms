function solution(price) {
    if (price >= 500000) {
        return parseInt(price * 0.8);  // 50만원 이상: 20% 할인
    } else if (price >= 300000) {
        return parseInt(price * 0.9);  // 30만원 이상: 10% 할인
    } else if (price >= 100000) {
        return parseInt(price * 0.95); // 10만원 이상: 5% 할인
    } else {
        return price;        // 10만원 미만: 할인 없음
    }
}