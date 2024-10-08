function solution(my_string, overwrite_string, s) {
    let answer = my_string.split('');
    for (i = 0; i < overwrite_string.length; i += 1) {
        answer[i + s] = overwrite_string[i];
    }
    return answer.join('');
}

// 시작 지점을 정해주고,
// 시작 지점부터 문자열을 덮어쓰기한다.
// 방법은 여러가지가 있을 듯

// 1번
// 메서드를 활용해 overwrite_string의 길이를 구하고 my_string에서 그 길이의 좌우 원본 문자열을 분리
// 문자열을 합쳐서 결과 반환

// 2번
// 문자열을 배열로 변환
// 변환된 배열에서 overwrite_string 만큼 반복하며 해당 배열의 요소를 문자열의 요소로 교체