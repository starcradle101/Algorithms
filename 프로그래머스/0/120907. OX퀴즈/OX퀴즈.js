function solution(quiz) {
    let answer = [];
    
    for (let exp of quiz) {
        determinate(exp) ? answer.push('O') : answer.push('X');
    }

    return answer;
}

function determinate(exp) {
    const [left, right] = exp.split('=');
    const [a, sign, b] = left.trim().split(' ');
    const c = right.trim();
    
    switch(sign) {
        case '+':
            return Number(a) + Number(b) === Number(c);
            break;
        case '-':
            return Number(a) - Number(b) === Number(c);
            break;
    }
}