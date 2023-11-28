function solution(input) {
  const inputArr = input.split('');
  let alphabetObj = {};

  for (let i = 97; i <= 122; i += 1) {
    let alphabet = String.fromCharCode(i);
    alphabetObj[alphabet] = 0;
  }

  const answer = Object.keys(alphabetObj)
    .map(char => inputArr.indexOf(char))
    .join(' ');
  console.log(answer);
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
