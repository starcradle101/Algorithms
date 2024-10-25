function solution(arr, intervals) {
    const answer = [];
    intervals.forEach(([start, end]) => answer.push(...(arr.slice(start, end + 1))));
    
    return answer;
}