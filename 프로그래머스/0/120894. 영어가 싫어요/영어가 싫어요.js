function solution(numbers) {
    let answer = numbers;
    const str_num_match = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        zero: 0,
    }
    
    for (let el in str_num_match) {
        answer = answer.replaceAll(el, str_num_match[el]);
    }
    
    return Number(answer);
}