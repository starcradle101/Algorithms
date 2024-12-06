function solution(order) {
    let answer = 0;
    const threeSixNine = [3, 6, 9];
    [...String(order)].forEach(el => {
        if (threeSixNine.includes(Number(el))) answer += 1;
    })
    
    return answer;
}