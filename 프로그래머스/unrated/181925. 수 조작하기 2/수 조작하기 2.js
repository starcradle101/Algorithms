function solution(numLog) {
  var answer = '';
  for (let i = 0; i < numLog.length - 1; i++) {
    let diff = numLog[i + 1] - numLog[i];
    switch (diff) {
      case 1:
        answer += 'w';
        break;
      case -1:
        answer += 's';
        break;
      case 10:
        answer += 'd';
        break;
      case -10:
        answer += 'a';
        break;
    }
  }
  return answer;
}