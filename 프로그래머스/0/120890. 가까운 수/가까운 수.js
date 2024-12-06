function solution(array, n) {
    let answer = [];
    const diff_abs = array.map(el => Math.abs(el - n));
    const min_abs = Math.min(...diff_abs);
    
    for (let el of array) {
        if (Math.abs(el - n) === min_abs) answer.push(el);
    }
   
    return (answer.length > 1) ? Math.min(...answer) : answer[0];
}


