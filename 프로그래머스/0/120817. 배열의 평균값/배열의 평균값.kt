class Solution {
    fun solution(numbers: IntArray): Double {
        var answer: Double = 0.0
        for(number in numbers) {
            answer += number
        }
        return answer / numbers.size
    }
}