function solution(my_string, indices) {
    let answer = '';
    for(let i = 0; i < my_string.length; i += 1) {
        if (!indices.includes(i)) {
            answer += my_string[i];
        } else {
            continue;
        }
    }
    return answer;
}