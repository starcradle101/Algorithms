function solution(myString, pat) {
    let answer = 0;
    
    for (let i = 0; i <= myString.length - pat.length; i += 1) {
        let checkString = myString.slice(i, i + pat.length);
        if (checkString === pat) answer += 1;
    }
    
    return answer;
}

// pat이 등장하는 횟수