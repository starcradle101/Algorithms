// function solution(x, n) {
//     let answer = [];
//     if (x > 0) {
//         for (let i = x; i<= x * n; i+=x) {
//             answer.push(i);
//         }    
//     } else if (x < 0) {
//         for (let i = x; i>= x*n; i+=x) {
//             answer.push(i);
//         }
//     } else return 0;
    
//     return answer;
// }
function solution(x, n) {
    let answer = [];
    
    if (x === 0) {
        // x가 0일 때, n이 어떤 값이든 결과 리스트에 0을 n번 추가
        for (let i = 0; i < n; i++) {
            answer.push(0);
        }
    } else {
        for (let i = x; answer.length < n; i += x) {
            answer.push(i);
        }
    }
    
    return answer;
}


// x부터 시작해 x씩 증가하는 n개를 지니는 배열을 반환