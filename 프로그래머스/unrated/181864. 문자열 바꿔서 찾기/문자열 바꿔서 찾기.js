function solution(myString, pat) {
    let modifiedString = '';
    for (let char of myString) {
        if (char === 'A') {
            modifiedString += 'B';
        } else {
            modifiedString += 'A';
        }
    }
    return (modifiedString.includes(pat)) ? 1 : 0;
}