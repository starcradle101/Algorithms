function solution(d, budget) {
    const sorted_d = [...d].sort((a, b) => a - b);
    let [answer, sum] = [0, 0];
    for (let el of sorted_d) {
        sum += el;
        if (sum > budget) break;
        answer += 1;
    }
    return answer;
}