function solution(s1, s2) {
    let answer = 0;
    for (let el of s1) {
        if (s2.includes(el)) answer += 1;
    }
    return answer;
}

// 클래식한 방법
// 일치하는 원소의 개수 counter를 선언
// 1. s1 배열을 기준으로 잡고 반복문으로 순회
// 2. s1 배열의 각 요소가 s2 배열에 존재하는지 확인
// 3. 존재한다면 counter에 1 추가
