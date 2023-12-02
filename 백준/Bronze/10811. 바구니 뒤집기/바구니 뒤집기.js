function solution(input) {
  const sizeOfBaskets = input[0][0];
  const range = input[0][1];
  const changeArray = input.slice(1);

  let baskets = Array.from({ length: sizeOfBaskets }, (_, idx) => idx + 1);

  for (let i = 0; i < range; i += 1) {
    [start, end] = [changeArray[i][0] - 1, changeArray[i][1]];
    const reversedBaskets = baskets.slice(start, end).reverse();
    baskets.splice(start, end - start, ...reversedBaskets);
  }
  console.log(baskets.join(' '));
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
