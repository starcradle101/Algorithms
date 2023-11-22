function solution(input) {
  const range = input[0][0];
  const standardNum = input[0][1];
  const inputArray = input[1];
  let answer = [];

  for (let idx = 0; idx < range; idx++) {
    if (inputArray[idx] < standardNum) answer.push(inputArray[idx]);
  }
  console.log(answer.join(' '));
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
