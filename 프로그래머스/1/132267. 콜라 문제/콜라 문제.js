function solution(a, b, n) {
  let answer = 0;
  function getCola(emptyBottle) {
    if (emptyBottle < a) return 0;

    const newCola = Math.floor(emptyBottle / a) * b;
    const leftBottle = (emptyBottle % a) + newCola;
    answer += newCola;

    return getCola(leftBottle);
  }

  getCola(n);
  return answer;
}