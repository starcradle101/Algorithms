function solution(input) {
  const range = input[0][0];
  for (let idx = 1; idx <= range; idx += 1) {
    const height = input[idx][0];
    const width = input[idx][1];
    const guest = input[idx][2];

    let floorString = '';
    let roomNumString = '';

    let count = 1;
    for (let roomNum = 1; roomNum <= width; roomNum += 1) {
      for (let floor = 1; floor <= height; floor += 1) {
        if (count === guest) {
          roomNum < 10
            ? (roomNumString = '0' + '' + roomNum)
            : (roomNumString = '' + roomNum);
          floorString = '' + floor;

          const answer = floorString + roomNumString;

          console.log(answer);
        }
        count += 1;
      }
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
