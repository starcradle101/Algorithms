function solution(list) {
  const sizeOfMatrix = list[0];
  let matrix1 = [];
  let matrix2 = [];
  for (let idx = 1; idx <= sizeOfMatrix[0]; idx++) {
    matrix1.push(list[idx]);
    matrix2.push(list[idx + sizeOfMatrix[0]]);
  }

  let matrixSum = [];
  for (let row = 0; row < sizeOfMatrix[0]; row++) {
    let rowSum = [];
    for (let column = 0; column < sizeOfMatrix[1]; column++) {
      rowSum.push(matrix1[row][column] + matrix2[row][column]);
    }
    matrixSum.push(rowSum);
  }

  for (let row of matrixSum) {
    console.log(row.join(' '));
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
