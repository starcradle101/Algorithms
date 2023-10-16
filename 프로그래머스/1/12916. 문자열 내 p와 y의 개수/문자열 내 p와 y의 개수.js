function solution(s) {
  // 문자열을 모두 소문자로 변환
  s = s.toLowerCase();

  // 'p'와 'y'를 필터링한 후 배열의 길이를 비교하여 반환
  return s.split('p').length === s.split('y').length;
}