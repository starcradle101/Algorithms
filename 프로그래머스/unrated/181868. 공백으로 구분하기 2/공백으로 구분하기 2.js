function solution(my_string) {
    var answer = [];
    let partialString = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === ' ') {
            if (partialString === '') {
                continue;
            } else {
                answer.push(partialString);
                partialString = '';
            }
        } else {
            partialString += my_string[i];
            if (i === my_string.length - 1) answer.push(partialString);
        }
    }
    return answer;
    // 공백이면 넘어감
    // 공백이 아니면
    // 문자를 문자열에 담고
    // 다시 처음으로 돌아감
    // 만약 공백이면
    // 지금까지 담은 문자열에 문자가 존재하는지 확인하고
    // 존재하면 걔를 정답 배열에 넣어줍니다.
    // 존재하지 않으면 그냥 다음 문자를 확인
}