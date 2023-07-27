function solution(a, b, c) {
  if (a !== b && a !== c && b !== c) {
    return a + b + c;
  } else if (
    (a === b && a !== c) ||
    (a === c && a !== b) ||
    (b === c && b !== a)
  ) {
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  } else {
    return (
      (a + b + c) *
      (a ** 2 + b ** 2 + c ** 2) *
      (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3))
    );
  }
}