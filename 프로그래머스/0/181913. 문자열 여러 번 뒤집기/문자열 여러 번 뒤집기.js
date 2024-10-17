function solution(my_string, queries) {
    let answer = my_string;
    for (let [s, e] of queries ) {
        answer = answer.slice(0, s) + answer.slice(s, e + 1).split('').reverse().join('') + answer.slice(e + 1);
    }
    return answer;
}

// [s, e]
// s부터 e까지 뒤집기
// 뒤집고 새로운 문자열을 만들어서 저장
// 또 뒤집는 과정을 새롭게 저장된 문자열을 기반으로 실행
// 다 뒤집고 결과 반환