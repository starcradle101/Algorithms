function solution(num, k) {
    let search = String(num).indexOf(k);
    return (search < 0) ? search : search + 1; 
    
    // 막히면 천천히
    // 먼저 정수를 문자로 바꾸고
    // indexof를 활용하자.
}