let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString();
let year = parseInt(input);

let 윤년 = year % 4 !== 0 ? 0 : year % 100 !== 0 || year % 400 === 0 ? 1 : 0;

console.log(윤년);
