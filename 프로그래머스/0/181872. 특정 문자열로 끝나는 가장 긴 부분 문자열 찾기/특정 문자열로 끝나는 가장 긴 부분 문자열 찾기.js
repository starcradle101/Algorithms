function solution(myString, pat) {
    let answer = '';
    for (let i = myString.length - 1; i >= 0; i -= 1) {
        const checkString = myString.slice(0, i + 1);
        if(checkString.endsWith(pat)) {
            answer += checkString;
            break;
        }
    }
    return answer;
}

// pat으로 끝나는 부분 문자열중 가장 긴 부분 문자열 찾기

// endsWith에 문자열과 idx를 줄수 있다.
// idx를 점점 줄여나가면서 반복문 돌리기