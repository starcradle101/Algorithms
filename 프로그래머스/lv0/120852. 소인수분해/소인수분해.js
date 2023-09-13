function solution(n) {
    var answer = [];
    function isPrime(num) {
        let cnt = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) cnt++;
        }
        if (cnt === 2) return true;
        else return false;
    }
    for (let i = 2; i<=n; i++) {
        if (n % i === 0 && isPrime(i)) {
            answer.push(i);
        }
    }
    return answer;
}

// 1부터 n까지 증가시키는데
// 각 step의 수가 일단 소수인지를 판별해야 한다.
// 소수를 판단하는 방법은? -> 해당 수를 1부터 n까지 나누었을 때 1과 자기 자신으로만 나뉘는지