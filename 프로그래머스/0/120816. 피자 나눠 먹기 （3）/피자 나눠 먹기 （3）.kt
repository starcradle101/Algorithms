class Solution {
    fun solution(slice: Int, n: Int): Int {
        var answer: Int = 0
        do {
            answer += 1
        } while (slice * answer / n < 1)
        return answer
    }
}
