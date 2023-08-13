function solution(num_list) {
    let answer = 0;
    for (let el of num_list) {
      let curr = el;
      while (curr !== 1) {
        curr % 2 == 0 ? curr = curr / 2 : curr = (curr - 1) / 2;
        answer ++;
      }
    }
    return answer;
}