function solution(input) {
  let hour = input[0];
  let minute = input[1];

  if (hour === 0) {
    const alarm =
      minute - 45 >= 0 ? [hour, minute - 45] : [23, 60 + minute - 45];
    console.log(`${alarm[0]} ${alarm[1]}`);
  } else {
    const alarm =
      minute - 45 >= 0 ? [hour, minute - 45] : [hour - 1, 60 + minute - 45];
    console.log(`${alarm[0]} ${alarm[1]}`);
  }
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
