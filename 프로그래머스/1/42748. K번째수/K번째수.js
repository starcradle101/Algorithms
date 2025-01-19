function solution(array, commands) {
    let answer = [];
    commands.forEach(el => {
        const [start, end, k] = el;
        answer.push(array.slice(start - 1, end).sort((a, b) => a - b)[k - 1]);
    })
    return answer;
}