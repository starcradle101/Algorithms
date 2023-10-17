function solution(x) {
    let digitSum = (""+x).split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    if (x % digitSum === 0) {
        return true;
    } else return false;
    
    // harshad라면 x의 자릿수의 합으로 x가 나누어 떨어져야 한다.
    // x % 자릿수의 합 === 0이라면 true, 아니면 false 반환
}