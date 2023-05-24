let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split(' ');
let x = parseInt(input[0]);
let y = parseInt(input[1]);

console.log(Math.abs(x - y));
