function solution(num_list) {
    let odd_list = [];
    let even_list = [];
    
    for (let i = 0; i<num_list.length; i++) {
        if (num_list[i]%2===0) {
            even_list.push(num_list[i]);
        } else {
            odd_list.push(num_list[i]);
        }
    }
    let odd = Number(odd_list.join(''));
    let even = Number(even_list.join(''));
    
    let answer = odd + even;
    return answer;
}