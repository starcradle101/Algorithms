function solution(emergency) {
  let answer = [];
  let diagnosisOrder = [...emergency].sort((a, b) => b - a);

  for (let i = 0; i < emergency.length; i++) {
    answer.push(diagnosisOrder.indexOf(emergency[i]) + 1);
  }
  return answer;
}