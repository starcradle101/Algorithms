class Solution {
    fun solution(n: Int): Int {
        var answer: Int = 0
        do {
            answer += 1
        } while (6 * answer % n != 0)
        return answer
    }
}