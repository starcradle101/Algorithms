function solution(arr, divisor) {
    let filteredArray = arr.filter(x => x % divisor === 0).sort((a, b) => a - b);
    return (filteredArray.length !== 0) ? filteredArray : [-1];
}