function solution(n) {
  let answer = 0;
  for (let i = 1; i < 1000; i++) {
    if ((i * 6) % n === 0) {
      answer = i;
      break;
    }
  }

  return answer;
}