function solution(arr, intervals) {
  let answer = [];
  for (let el = 0; el < intervals.length; el++) {
    let intervalStart = intervals[el][0];
    let intervalEnd = intervals[el][1];
    answer = answer.concat(arr.slice(intervalStart, intervalEnd + 1));
  }
  return answer;
}