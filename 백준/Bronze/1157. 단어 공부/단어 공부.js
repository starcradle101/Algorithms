function solution(input) {
  const upperInput = input.toUpperCase();
  let alphabetObj = {};
  for (let char of upperInput) {
    alphabetObj[char] === undefined
      ? (alphabetObj[char] = 1)
      : (alphabetObj[char] += 1);
  }

  const valueArr = Object.values(alphabetObj);
  const maxAlphabetCnt = Math.max(...valueArr);
  let cnt = 0;
  for (let idx = 0; idx < valueArr.length; idx += 1) {
    if (valueArr[idx] === maxAlphabetCnt) cnt += 1;
  }

  return cnt === 1
    ? console.log(
        Object.keys(alphabetObj).find(
          key => alphabetObj[key] === maxAlphabetCnt
        )
      )
    : console.log('?');
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  solution(input);
  process.exit();
});
