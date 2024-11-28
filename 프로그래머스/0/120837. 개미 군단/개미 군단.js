function solution(hp) {
    let hp_remain = hp;
    const quotient_five = Math.floor(hp_remain / 5);
    hp_remain %= 5;
    const quotient_three = Math.floor(hp_remain / 3);
    hp_remain %= 3;
    return quotient_five + quotient_three + hp_remain;
}