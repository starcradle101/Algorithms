function solution(my_string) {
    const answer = [];
    for(let i = 0; i < my_string.length; i += 1) {
        answer.push(my_string.slice(i));
    }
    
    return answer.sort();
}