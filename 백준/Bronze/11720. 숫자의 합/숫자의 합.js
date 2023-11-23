function solution(input) {
  const answer = input[1][0]
    .split('')
    .map(char => parseInt(char))
    .reduce((acc, curr) => acc + curr);
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
    list.push(val.split(' '));
  });
  solution(list);
  process.exit();
});