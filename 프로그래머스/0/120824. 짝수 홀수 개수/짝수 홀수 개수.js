function solution(num_list) {
    let answer = [0, 0];
    
    for (let i = 0; i < num_list.length; i+=1) {
        (num_list[i] % 2 === 0) ? answer[0] += 1 : answer[1] += 1;
    }
    
    return answer;
}