function solution(my_string, m, c) {
    let answer = '';
    
    for (let i = 0; i < my_string.length; i += 1) {
        if (i % m === 0) answer += my_string[i + c - 1];
    }
        
    return answer;
}