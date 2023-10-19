function solution(n) {
    let squareRoot = Math.sqrt(n);
    if(squareRoot === Math.floor(squareRoot)) {
        return Math.pow(squareRoot + 1, 2);
    }
    
    return -1;
}