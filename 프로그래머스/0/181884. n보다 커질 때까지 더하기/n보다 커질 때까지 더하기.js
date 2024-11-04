function solution(numbers, n) {
    let [sum, i] = [0, 0];
    while(sum <= n) {
        sum += numbers[i];
        i ++;
    }
    return sum;
}