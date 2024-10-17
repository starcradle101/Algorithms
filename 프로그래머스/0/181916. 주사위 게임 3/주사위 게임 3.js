function solution(a, b, c, d) {
  const dice = [a, b, c, d];
  const counts = {};

  dice.forEach(num => {
    counts[num] = (counts[num] || 0) + 1;
  });

  const uniqueNumbers = Object.keys(counts).map(Number);
  const frequencies = Object.values(counts);

  if (frequencies.length === 1) {
    const p = uniqueNumbers[0];
    return 1111 * p;
  }

  if (frequencies.includes(3)) {
    const p = uniqueNumbers[frequencies.indexOf(3)];
    const q = uniqueNumbers[frequencies.indexOf(1)];
    return Math.pow((10 * p + q), 2);
  }

 
  if (frequencies.length === 2 && frequencies.every(f => f === 2)) {
    const [p, q] = uniqueNumbers;
    return (p + q) * Math.abs(p - q);
  }

 
  if (frequencies.includes(2) && frequencies.length === 3) {
    const q = uniqueNumbers[frequencies.indexOf(1)];
    const r = uniqueNumbers[frequencies.lastIndexOf(1)];
    return q * r;
  }

 
  if (frequencies.length === 4) {
    return Math.min(...dice);
  }

  return 0;
}