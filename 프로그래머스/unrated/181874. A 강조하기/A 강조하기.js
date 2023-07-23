function solution(myString) {
    let myArr = myString.split('');
    let answer = myArr.map(el => (el === 'a' || el === 'A') ? el.toUpperCase() : el.toLowerCase()).join('');
    return answer;
}