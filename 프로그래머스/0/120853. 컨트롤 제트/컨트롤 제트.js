function solution(s) {
    const s_arr = s.split(' ');
    let answer = 0;
    
    for (let i = 0; i < s_arr.length; i += 1) {
        if (s_arr[i] === 'Z') {
            answer -= Number(s_arr[i-1]);
        } else {
            answer += Number(s_arr[i]);
        }
    }
    
    return answer;
}