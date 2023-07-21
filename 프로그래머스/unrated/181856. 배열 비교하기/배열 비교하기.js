function solution(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return (arr1.length > arr2.length) ? 1 : -1;
    } else {
        let sum_arr1 = arr1.reduce((acc,curr) => acc + curr);
        let sum_arr2 = arr2.reduce((acc,curr)=> acc + curr);
        if (sum_arr1 === sum_arr2) {
            return 0;
        } else {return (sum_arr1 > sum_arr2) ? 1 : -1;}
    }
}