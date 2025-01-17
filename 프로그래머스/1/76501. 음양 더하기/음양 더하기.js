function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i += 1) {
        answer += (signs[i] ? 1 : -1) * absolutes[i];
    }
    return answer;
}