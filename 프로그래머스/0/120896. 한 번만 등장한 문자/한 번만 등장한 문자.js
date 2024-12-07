function solution(s) {
    const s_array = [...s];
    let answer = '';
    s_array.forEach(el => {
        if (s_array.indexOf(el) === s_array.lastIndexOf(el)) answer += el;
    })
    return answer.length > 0 ? [...answer].sort().join('') : answer;
}