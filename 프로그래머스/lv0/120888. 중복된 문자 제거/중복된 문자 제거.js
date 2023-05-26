function solution(my_string) {
  let answer = '';

  for (let character of my_string) {
    if (!answer.includes(character)) {
      answer += character;
    }
  }
  return answer;
}