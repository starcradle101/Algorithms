function solution(num_list) {
    let answer = 0;
    num_list.forEach((el) => {
        while(el !== 1) {
            el = compute(el);
            answer += 1;
        }
    })
    return answer;
}

function compute(num) {
    return (num % 2 === 0) ? num / 2 : (num - 1) / 2;
}

// 짝수는 반으로 나누기
// 홀수는 1을 뺀 뒤 반으로 나누기

// 배열의 모든 값을 1로 만들기 위해서 필요한 나누기 연산의 횟수는?

// 아하, 각 배열별로 기억하면 되겠구나!