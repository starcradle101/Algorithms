function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i<num_list.length; i++) {
        (i % 2 === 0) ? evenSum += num_list[i] : oddSum += num_list[i];
    }
    return (oddSum > evenSum) ? oddSum: evenSum;
}