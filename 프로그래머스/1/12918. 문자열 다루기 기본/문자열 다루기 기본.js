function solution(s) {
    return isLength4Or6(s) && isNumbersOnly(s);
}

function isNumbersOnly(s) {
    for (let char of s) {
        if (isNaN(Number(char))) return false;
    }
    
    return true;
}

function isLength4Or6(s) {
    if (s.length === 4 || s.length === 6) return true;
    
    return false;
}