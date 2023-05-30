function solution(array) {
  let answer = 0;
  let arrString = array.join('');
  for (let el of arrString) {
    if (el === '7') answer += 1;
  }
  return answer;
}