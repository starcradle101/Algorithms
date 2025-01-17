function solution(arr) {
    const min = Math.min(...arr);
    let answer = arr.filter(el => el !== min);
    
    return answer.length > 0 ? answer : [-1];
}