function solution(my_string, num1, num2) {
    let answer =  [...my_string];
    let temp = answer[num1];
    answer[num1] = answer[num2];
    answer[num2] = temp;
    return answer.join('');
}

// 배열로 바꿔서
// 인덱스 값을 temp에 저장해 두고
// 고전적으로...?