function solution(hp) {
  let answer = 0;
  let antArmy = [5, 3, 1];
  for (let ant of antArmy) {
    //if (hp === 0) break;
    answer += Math.floor(hp / ant);
    hp = hp % ant;
  }
  return answer;
}

solution(23);
