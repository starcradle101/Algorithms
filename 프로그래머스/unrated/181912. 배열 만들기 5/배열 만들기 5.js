function solution(intStrs, k, s, l) {
  var answer = [];
  for (let str of intStrs) {
    let modifiedStr = Number(str.slice(s, s + l));
    if (modifiedStr > k) {
      answer.push(modifiedStr);
    }
  }
  return answer;
}
