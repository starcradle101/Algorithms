function solution(number) {
  let answer = 0;
  for (let el of number) {
    answer += Number(el);
  }
  return answer % 9;
}
