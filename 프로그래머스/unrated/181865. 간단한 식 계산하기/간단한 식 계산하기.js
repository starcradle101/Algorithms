function solution(binomial) {
    let operator = binomial.split(' ')[1];
    let num1 = Number(binomial.split(' ')[0]);
    let num2 = Number(binomial.split(' ')[2]);
    let answer = 0;
    switch (operator) {
        case '+': 
            answer = num1 + num2;
            break;
            
        case '-':
            answer = num1 - num2;
            break;
            
        case '*':
            answer = num1 * num2;
    }
    return answer;
}