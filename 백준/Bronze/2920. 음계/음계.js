function solution(input) {
  let initialValue = input[0];
  for (let idx = 1; idx < input.length; idx += 1) {
    if (Math.abs(input[idx - 1] - input[idx]) !== 1) {
      return console.log('mixed');
    }
  }

  return initialValue - input[input.length - 1] < 0
    ? console.log('ascending')
    : console.log('descending');
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let list = [];

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  list = input.split(' ').map(el => Number(el));

  solution(list);
  process.exit();
});
