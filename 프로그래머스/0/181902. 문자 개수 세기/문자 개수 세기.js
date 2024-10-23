function solution(my_string) {
    const answer = Array(52).fill(0);
    for (let i = 0; i < my_string.length; i += 1) {
        const charCode = my_string.charCodeAt(i);
        if (charCode >= 97) {
            answer[charCode - 97 + 26] += 1
        } else {
            answer[charCode - 65] += 1
        }
    }
    return answer;
}

