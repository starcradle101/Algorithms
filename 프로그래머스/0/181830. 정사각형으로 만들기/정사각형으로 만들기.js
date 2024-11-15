function solution(arr) {
    let answer = [...arr];
    const [row_length, col_length] = [arr.length, arr[0].length];
    
    if (row_length > col_length) {
        for (let i = 0; i < row_length - col_length; i += 1) {
            answer.map((el) => el.push(0));
        }
    }
        
    if (row_length < col_length) {
        for (let i = 0; i < col_length - row_length; i += 1) {
            answer.push(Array(col_length).fill(0));
        }
    }
    
    return answer;
}