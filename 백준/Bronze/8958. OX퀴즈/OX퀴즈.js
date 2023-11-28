function arithmeticSeqSum(n) {
  return (n * (1 + n)) / 2;
}

function solution(input) {
  const range = input[0][0];
  for (let cnt = 1; cnt <= range; cnt += 1) {
    const score = input[cnt][0]
      .split('X')
      .map(q => q.length)
      .reduce((acc, curr) => acc + arithmeticSeqSum(curr), 0);
    console.log(score);
  }
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
    list.push(val.split(' '));
  });
  solution(list);
  process.exit();
});