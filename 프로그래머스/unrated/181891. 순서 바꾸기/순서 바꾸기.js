function solution(num_list, n) {
    let answer = (num_list.slice(n).concat(num_list.slice(0, n)));
    return answer;
    // slice와 push를 활용해보자
    
}