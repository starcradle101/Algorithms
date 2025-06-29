class Solution {
    fun solution(n: Int): Int {
        var answer = 0
        val numToString = n.toString()
        
        for(digit in numToString) {
            answer += digit.digitToInt()
        }

        return answer
    }
}