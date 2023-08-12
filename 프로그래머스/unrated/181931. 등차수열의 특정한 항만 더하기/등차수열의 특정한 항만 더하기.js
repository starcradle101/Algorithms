function solution(a, d, included) {
  var answer = 0;
  let current = a;
  for (let el of included) {
    if (el === true) {
      answer += current;
      current += d;
    } else {
      current += d;
      continue;
    }
  }
  return answer;
}
