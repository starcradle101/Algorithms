function solution(i, j, k) {
  let answer = 0;
  for (let n = i; n <= j; n++) {
    let check = n.toString().split('');
    for (let digit of check) {
      if (Number(digit) === k) {
        answer += 1;
      }
    }
  }
  return answer;
}
