function solution(input) {
  const flatInput = input.flat();
  const maxNum = Math.max(...flatInput);
  const maxNumIndex = flatInput.indexOf(maxNum) + 1;

  console.log(`${maxNum}\n${maxNumIndex}`);
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
