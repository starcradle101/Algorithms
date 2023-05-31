const solution = (number1, denom1, number2, denom2) => {
  let commonDenomFraction = [(number1 * denom2) + (number2 * denom1), denom1 * denom2];
  let gcd = euclidean(commonDenomFraction[0], commonDenomFraction[1]);
  let answer = [commonDenomFraction[0]/gcd, commonDenomFraction[1]/gcd];
  return answer;
}

const euclidean = (num1, num2) => {
  if (num1 % num2 === 0) {
    return num2;
  }
  return euclidean(num2, num1%num2);
}