function solution(input) {
  for (let i = 0; i < input.length - 1; i += 1) {
    const sortedInput = input[i].sort((a, b) => a - b);
    if (sortedInput[0] ** 2 + sortedInput[1] ** 2 === sortedInput[2] ** 2) {
      console.log('right');
    } else {
      console.log('wrong');
    }
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
