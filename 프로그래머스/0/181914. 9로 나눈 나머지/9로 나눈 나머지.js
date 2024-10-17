function solution(number) {
    
    return String(number).split('').map(Number).reduce((acc, curr) => acc + curr, 0) % 9;
}

// 음이 아닌 정수를 9로 나눈 나머지 =  그 정수의 각 자리 숫자의 합을 9로 나는 나머지
// a % 9 === String(a).split('').map(Number).reduce((acc, curr) => acc + curr, 0) % 9;
// 