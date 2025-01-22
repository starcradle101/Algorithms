function solution(t, p) {
    let answer = 0;
    let idx = 0;
    while (t.length - idx >= p.length) {
        const subString = t.slice(idx, idx + p.length);
        if (Number(subString) <= Number(p)) answer += 1;
        idx += 1;
    }
    return answer;
}