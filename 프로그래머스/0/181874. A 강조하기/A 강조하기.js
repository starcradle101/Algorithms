function solution(myString) {
    let answer = ''
    for (let char of myString) {
        if (char === 'a') {
            answer += char.toUpperCase();
        } else {
            if (char.toUpperCase() === char && char !== 'A') {
                answer += char.toLowerCase();
            } else {
                answer += char;
            }    
        }
    }
    return answer;
}

// step1. 문자열 순회하기
// step2. 문자열이 a일 경우 A로 변환하기
// step3. a가 아닌 문자일 경우
// step3-1. 대문자라면 소문자 알파벳으로 변환하기
// step3-2. 소문자라면 그대로 두기
// 제한사항에서 주어지는 문자열은 전부 알파벳으로 이루어졌다고 했으니 다른 케이스 고려할 필요 없음