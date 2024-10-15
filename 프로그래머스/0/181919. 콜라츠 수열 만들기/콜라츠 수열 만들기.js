function solution(n) {
    const answer = [];
    while(n > 1) {
        switch (n % 2) {
            case 1:
                answer.push(n);
                n = n * 3 + 1;
            case 0:
                answer.push(n);
                n = n / 2;
        }
    }
    answer.push(1);
    return answer;
}


// 현재 값이 짝수면 나누기 2, 홀수면 3 * x + 1로 바꾸면 x가 언젠가 1이 디ㅗㄹ까?
// 이게 바로 콜라츠 무넺다

// 이 수열을 저장해서 return