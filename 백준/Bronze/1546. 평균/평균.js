function solution(input) {
  const range = input[0][0];
  const scores = input[1];
  const bestScore = Math.max(...input[1]);
  let totalScore = 0;

  for (let idx = 0; idx < range; idx += 1) {
    totalScore += (scores[idx] / bestScore) * 100;
  }

  const answer = totalScore / scores.length;

  console.log(answer);
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input.forEach(val => {
    list.push(val.split(' ').map(el => parseInt(el)));
  });
  solution(list);
  process.exit();
});
