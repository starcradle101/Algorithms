function solution(num_list) {
    let [odd_sum, even_sum] = [0, 0];
    
    for(let i = 0; i < num_list.length; i += 1) {
        i % 2 === 0 ? odd_sum += num_list[i] : even_sum += num_list[i];
    }
    
    if(odd_sum === even_sum) return odd_sum;
    
    return odd_sum > even_sum ? odd_sum : even_sum;
}

// 배열의 홀수/짝수 번째 원소들의 합 구하기
// 두 합을 비교하기
// 같다면 (우선 조건) 아무 값이나 return 하기