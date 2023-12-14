function solution(numbers, k) {
    var answer = 0;
  const whoseTurn = 2*(k-1);
   (whoseTurn < numbers.length) ? answer = numbers[whoseTurn] : answer = numbers[whoseTurn % numbers.length];
  return answer;
}