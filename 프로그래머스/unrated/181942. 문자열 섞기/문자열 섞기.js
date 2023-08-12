function solution(str1, str2) {
  var answer = '';
  for (let i = 0; i < str1.length * 2; i++) {
    if (i % 2 === 0) {
      answer += str1[i / 2];
    } else {
      answer += str2[Math.floor(i / 2)];
    }
  }
  return answer;
}

// 번갈아가면서 한 번씩 등장하는 문자열 만들기
// 두 문자열의 길이는 같다
// 반복문으로 넣어보자
