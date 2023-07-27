function solution(my_string, m, c) {
  let answer = '';
  let answerArr = [];
  let my_stringArr = my_string.split('');
  for (let i = 0; i < my_stringArr.length; i += m) {
    answerArr.push(my_stringArr.slice(i, i + m));
  }
  for (let i = 0; i < answerArr.length; i++) {
    answer += answerArr[i][c - 1];
  }

  return answer;
}