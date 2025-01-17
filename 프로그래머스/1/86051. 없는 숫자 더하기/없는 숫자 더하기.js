function solution(numbers) {
    let 정답 = 0;
    for (let 숫자 = 0; 숫자 <= 9; 숫자 += 1) {
        if (!numbers.includes(숫자)) 정답 += 숫자;
    }
    return 정답;
}