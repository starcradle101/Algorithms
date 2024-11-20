function solution(my_string, n) {
    let answer = [];
    [...my_string].forEach((el) => {
        answer.push(el.repeat(n));
    })
    return answer.join('');
}