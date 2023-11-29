function isPrimeNumber(num) {
  let cnt = 0;
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) cnt += 1;
  }

  return cnt === 2;
}

function solution(input) {
  const array = input[1];
  console.log(array.filter(num => isPrimeNumber(num)).length);
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
