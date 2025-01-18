function solution(a, b) {
    // let answer = 0;
    // for (let i = 0; i < a.length; i += 1) {
    //     answer += a[i] * b[i];
    // }
    // return answer;
    return a.reduce((acc, curr, idx) => acc + curr*b[idx], 0);
}