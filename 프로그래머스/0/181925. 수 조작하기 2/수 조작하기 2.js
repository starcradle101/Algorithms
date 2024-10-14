function solution(numLog) {
    var answer = '';
    for (let i = 0; i < numLog.length - 1; i += 1) {
        const diff = numLog[i + 1] - numLog[i];
        switch(diff) {
            case 1:
                answer += 'w';
                break;
            case -1:
                answer += 's';
                break;
            case 10:
                answer += 'd';
                break;
            case -10:
                answer += 'a';
                
        }
    }
    return answer;
}

// 이전과 비교해서
// 그 결과를 찾는다.