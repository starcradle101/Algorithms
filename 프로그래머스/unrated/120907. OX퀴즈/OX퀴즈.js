function solution(quiz) {
    let answer = [];
  for (let expression of quiz) {
    const expressionArr = expression.split(' ');
    const X = +expressionArr[0];
    const CALCULATE = expressionArr[1];
    const Y = +expressionArr[2];
    const Z = +expressionArr[4];
    
    if (CALCULATE === '+') {
      (X + Y === Z) ? answer.push('O') : answer.push('X');
    } else {
      (X -Y === Z) ? answer.push('O'): answer.push('X');
    }
  }
    return answer;
}