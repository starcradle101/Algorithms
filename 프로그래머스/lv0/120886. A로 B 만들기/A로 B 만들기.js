function solution(before, after) {
  const refSet = new Set(before);

  for (let el of refSet) {
    let countBefore = before.split('').filter((x) => x === el).length;
    let countAfter = after.split('').filter((x) => x === el).length;

    if (countBefore !== countAfter) {
      return 0;
    }
  }

  return 1;
}