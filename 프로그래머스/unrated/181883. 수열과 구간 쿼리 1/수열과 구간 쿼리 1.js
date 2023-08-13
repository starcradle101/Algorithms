function solution(arr, queries) {
    var answer = arr;
    for (let el of queries) {
      for (let i = el[0]; i <= el[1]; i++) {
        answer[i] += 1;
      }
    }
    return answer;
}