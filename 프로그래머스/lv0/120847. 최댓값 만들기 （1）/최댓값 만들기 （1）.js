function solution(numbers) {
    numbers.sort((a, b) => b -a);
    return numbers[0] * numbers[1];
}

// 역으로 정렬하고 1, 2 번째 요소를 곱한 값을 return하자