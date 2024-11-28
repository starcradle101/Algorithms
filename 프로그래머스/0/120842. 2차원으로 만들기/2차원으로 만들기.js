function solution(num_list, n) {
    let sub_array = [];
    let answer = [];
    for (let i = 0; i <= num_list.length; i += 1) {
        if (i !== 0 && i % n === 0) {
            answer.push(sub_array);
            sub_array = [];
        }
        
        sub_array.push(num_list[i]);
    }
    return answer;
}