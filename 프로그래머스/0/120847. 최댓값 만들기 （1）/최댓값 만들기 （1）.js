function solution(numbers) {
    const sorted_numbers = [...numbers].sort((a, b) => b - a);
    return sorted_numbers[0] * sorted_numbers[1];
}