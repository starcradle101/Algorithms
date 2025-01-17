function solution(num) {
    let answer = 0;
    
    function guessCollatz(n) {
        if ((n === 1) && (answer === 0)) return 0;
        if (answer > 500) return -1;
        if (n === 1) return answer;
        
        answer += 1;
        return (n % 2 === 0) ? guessCollatz(Math.floor(n / 2)) : guessCollatz(3 * n + 1);
    }
    
    guessCollatz(num);
    return answer > 500 ? -1 : answer;
}



// 반복하면 모든 수를 1로 만들 수 있다
// 재귀로 가능
// 짝수라면 2로 나누기, 홀수라면 3을 곱하고 1을 더하기
// 결과로 나온 수에 같은 작업을 반복해 1일 될 때까지 만들기
// 주어진 수가 1이면 0, 500번 반복할때까지 1이 되지 않는다면 -1