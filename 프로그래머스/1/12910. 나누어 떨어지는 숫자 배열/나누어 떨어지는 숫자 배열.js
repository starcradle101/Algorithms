function solution(arr, divisor) {
    const filteredArray = arr.filter(el => el % divisor === 0);
    return (filteredArray.length > 0 ) ? filteredArray.sort((a, b) => a - b) : [-1];
}
