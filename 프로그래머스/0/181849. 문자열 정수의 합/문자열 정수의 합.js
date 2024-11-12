function solution(num_str) {
    let answer = 0;
    num_str.split('').forEach((el) => answer += Number(el))
    
    return answer;
}

// 문자열의 각 자리수 합 return