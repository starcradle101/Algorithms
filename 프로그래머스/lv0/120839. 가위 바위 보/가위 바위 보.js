function solution(rsp) {
  let answer = '';
  for (let hand of rsp) {
    switch (hand) {
      case '2':
        answer += '0';
        break;
      case '5':
        answer += '2';
        break;
      case '0':
        answer += '5';
    }
  }
  return answer;
}