function solution(input) {
  let calculated = input
    .flat()
    .reduce((acc, curr) => acc * curr, 1)
    .toString()
    .split('');
  let answerObj = {};
  calculated.forEach(el => {
    answerObj[el] ? (answerObj[el] += 1) : (answerObj[el] = 1);
  });
  for (let i = 0; i < 10; i += 1) {
    answerObj[i] !== undefined ? console.log(answerObj[i]) : console.log(0);
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
    list.push(val.split(' ').map(el => parseInt(el)));
  });
  solution(list);
  process.exit();
});
