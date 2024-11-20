function solution(money) {
    const americanos = parseInt(money / 5500);
    const charge = money % 5500;
    
    return [americanos, charge];
}