function solution(input) {
  const totalPrice = input[0][0];

  const purchasedItems = input.slice(2);

  const calculatedTotalPrice = purchasedItems.reduce(
    (acc, curr) => acc + curr[0] * curr[1],
    0
  );

  const priceCorrect = totalPrice === calculatedTotalPrice ? 'Yes' : 'No';

  console.log(priceCorrect);
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
