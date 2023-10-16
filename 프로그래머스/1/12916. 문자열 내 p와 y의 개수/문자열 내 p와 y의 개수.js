function solution(s){
    let [countP, countY] = [0, 0];
    
    for (let char of s.toLowerCase()) {
        if (char === 'p') {
            countP+=1;
        } else if (char === 'y') {
            countY+=1;
        } else continue;
    }
    
    if (countP === countY) {
        return true;
    } else return false;
}

// 소문자로 바꾸고
// 문자열을 돌면서
// p와 y개수를 돌고
// 개수가 같거나 