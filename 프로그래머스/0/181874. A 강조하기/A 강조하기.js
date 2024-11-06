function solution(myString) {
    return myString.split('').map((el) => {
        if (el === 'a') {
            return 'A'
        }
        
        if (el === el.toUpperCase() && el !== 'A') {
            return el.toLowerCase();
        }
        
        return el
    }).join('')
}

// a가 등장하면 전부 A
// A 가아닌 대문자 알파벳은 모두 소문자로