function solution(my_string) {
    let arr = my_string.split(' ');
    let answer = +arr[0];
    for (let i = 2; i < arr.length; i+=2) {
        if(arr[i-1] === '+') {
            answer += +arr[i];
        } else {
            answer -= +arr[i];
        }
    }
    return answer;
}

// 잘못된 수식은 존재하지 않는다 -> 숫자 연산자 숫자의 조합이 명확하다는 것
         // 홀수는 연산자, 짝수는 숫자

// split으로 나눈다.
// [0] -> 첫 번째 수
// [1] -> 연산자 기호
// [2] -> 두 번째 수
