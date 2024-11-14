function solution(picture, k) {
    let answer = [];
    
    picture.forEach((row) => {
        let magnified_row = '';
        [...row].forEach((el) => magnified_row += el.repeat(k));
        
        for (let i = 0; i < k; i += 1) {
            answer.push(magnified_row);
        }
    })
    
    return answer;
}