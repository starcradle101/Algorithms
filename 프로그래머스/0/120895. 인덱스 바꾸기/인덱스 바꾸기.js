function solution(my_string, num1, num2) {
    let answer_arr = [...my_string];
    [answer_arr[num1], answer_arr[num2]] = [answer_arr[num2], answer_arr[num1]];
    return answer_arr.join('');
}
