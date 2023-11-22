function solution(input) {
  const inputArr = [...input];
  let answer = '';
  for (let char of inputArr) {
    if (char.toLowerCase() === char) {
      answer += char.toUpperCase();
    } else {
      answer += char.toLowerCase();
    }
  }
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
