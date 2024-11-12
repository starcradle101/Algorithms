function solution(arr1, arr2) {
    
    if (arr1.length === arr2.length) {
        const [arr1_sum, arr2_sum] = [arr1.reduce((acc, curr) => acc + curr, 0), arr2.reduce((acc, curr) => acc + curr, 0)];
        
        if (arr1_sum > arr2_sum) {
            return 1;
        } else if (arr1_sum < arr2_sum) {
            return -1;
        } else {
            return 0;
        }
    }
    
    return (arr1.length > arr2.length) ? 1 : -1;
}