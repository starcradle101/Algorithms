function solution(n, control) {
    let answer = n;
    for (let code of control) {
        switch(code) {
            case 'w':
                answer += 1;
                break;
            case 's':
                answer -= 1;
                break;
            case 'd':
                answer += 10;
                break;
            case 'a':
                answer -= 10;
        }
    }
    return answer;
}