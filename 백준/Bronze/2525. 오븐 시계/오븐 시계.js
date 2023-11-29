function solution(input) {
  let hour = input[0][0];
  let minute = input[0][1];

  const timer = input[1][0];
  const timerHour = Math.floor(timer / 60);
  const timerMinute = timer % 60;

  hour += timerHour;
  minute += timerMinute;

  if (minute >= 60) {
    hour += 1;
    minute -= 60;
  }

  if (hour >= 24) hour -= 24;

  console.log(`${hour} ${minute}`);
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
