function solution(my_strings, parts) {
    let answer = '';
    my_strings.forEach((str, idx) => {
        const [s, e] = parts[idx];
        answer += str.slice(s, e + 1);
    })
    
    return answer;
}